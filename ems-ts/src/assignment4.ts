// ============================================================
// Assignment 4 — Async operations & event callbacks
// ============================================================
// Imports services from Assignment 3

import { EmployeeService, ProjectService, buildServices } from "./assignment3";
import { Employee } from "./assignment1";
import { Repository } from "./assignment2";

// --- Delay helper ---

export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// --- EventBus ---

type EventHandler = (payload: unknown) => void;

export class EventBus {
  private listeners: Map<string, EventHandler[]> = new Map();

  on(event: string, handler: EventHandler): void {
    const existing = this.listeners.get(event) ?? [];
    this.listeners.set(event, [...existing, handler]);
  }

  emit(event: string, payload: unknown): void {
    const handlers = this.listeners.get(event) ?? [];
    handlers.forEach(h => h(payload));
  }
}

// --- Async EmployeeService ---

export class AsyncEmployeeService extends EmployeeService {
  constructor(repo: Repository<Employee>, private bus: EventBus) {
    super(repo);
  }

  async addAsync(emp: Employee): Promise<void> {
    await delay(300);
    this.add(emp);
    this.bus.emit("employee:added", { id: emp.id, name: emp.name });
  }

  async promoteAsync(id: number, newRole: Parameters<EmployeeService["promote"]>[1]): Promise<boolean> {
    await delay(300);
    const result = this.promote(id, newRole);
    if (result) this.bus.emit("employee:promoted", { id, newRole });
    return result;
  }

  async removeAsync(id: number): Promise<boolean> {
    await delay(300);
    const result = this.remove(id);
    if (result) this.bus.emit("employee:removed", { id });
    return result;
  }

  async getSalaryReportAsync() {
    await delay(300);
    return this.getSalaryReport();
  }
}

// --- Async ProjectService ---

export class AsyncProjectService extends ProjectService {
  constructor(repo: Repository<import("./assignment1").Project>, private bus: EventBus) {
    super(repo);
  }

  async assignEmployeeAsync(projectId: number, empId: number): Promise<boolean> {
    await delay(300);
    const result = this.assignEmployee(projectId, empId);
    if (result) this.bus.emit("project:assigned", { projectId, empId });
    return result;
  }

  async getOverdueAsync() {
    await delay(300);
    const overdue = this.getOverdue();
    this.bus.emit("project:overdue-check", { count: overdue.length });
    return overdue;
  }
}

// --- Main ---

async function main() {
  console.log("=== Assignment 4: Async Operations & EventBus ===\n");

  const { deptRepo } = buildServices();

  // Rebuild services with EventBus wired in
  const { empRepo, projectRepo } = (() => {
    const { employeeService, projectService } = buildServices();
    // extract repos via casting for demo purposes
    const es = employeeService as unknown as { repo: Repository<Employee> };
    const ps = projectService as unknown as { repo: Repository<import("./assignment1").Project> };
    return { empRepo: es.repo, projectRepo: ps.repo };
  })();

  const bus = new EventBus();
  const empService  = new AsyncEmployeeService(empRepo, bus);
  const projService = new AsyncProjectService(projectRepo, bus);

  // Subscribe to all events
  const events = [
    "employee:added", "employee:promoted", "employee:removed",
    "project:assigned", "project:overdue-check",
  ];
  events.forEach(ev =>
    bus.on(ev, payload =>
      console.log(`  [EVENT] ${ev} →`, JSON.stringify(payload))
    )
  );

  try {
    // 1. Add a new employee
    console.log("1. Adding new employee Grace...");
    await empService.addAsync({
      id: 7, name: "Grace", role: "engineer",
      salary: 72000, status: "active", departmentId: 1,
    });

    // 2. Assign Grace to Payroll Automation project
    console.log("\n2. Assigning Grace to Payroll Automation...");
    await projService.assignEmployeeAsync(1, 7);

    // 3. Promote Grace to manager
    console.log("\n3. Promoting Grace to manager...");
    await empService.promoteAsync(7, "manager");

    // 4. Run salary report
    console.log("\n4. Salary report:");
    const report = await empService.getSalaryReportAsync();
    console.log(`   Total: ${report.total} | Average: ${report.average} | Highest earner: ${report.highest.name}`);

    // 5. Check overdue projects
    console.log("\n5. Checking overdue projects...");
    const overdue = await projService.getOverdueAsync();
    console.log(`   Overdue: ${overdue.map(p => p.title).join(", ") || "none"}`);

    // 6. Remove an employee
    console.log("\n6. Removing Eva (id: 5)...");
    await empService.removeAsync(5);

  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Error:", err.message);
    } else {
      console.error("Unknown error:", err);
    }
  }
}

main();
