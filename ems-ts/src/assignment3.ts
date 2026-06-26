// ============================================================
// Assignment 3 — Service layer with abstract classes & decorators
// ============================================================
// Imports Repository from Assignment 2, types from Assignment 1

import { Repository, Identifiable, seedRepositories } from "./assignment2";
import { Employee, Project, Role, daysUntilDeadline } from "./assignment1";

// --- Decorator ---

export function LogCall(
  _target: object,
  key: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const original = descriptor.value;
  descriptor.value = function (...args: unknown[]) {
    const result = original.apply(this, args);
    console.log(`[LogCall] ${key}(${JSON.stringify(args)}) => ${JSON.stringify(result)}`);
    return result;
  };
  return descriptor;
}

// --- Abstract base service ---

export abstract class BaseService<T extends Identifiable> {
  constructor(protected repo: Repository<T>) {}

  add(item: T): void           { this.repo.add(item); }
  findById(id: number)         { return this.repo.findById(id); }
  getAll(): T[]                { return this.repo.getAll(); }
  update(id: number, changes: Partial<T>): boolean { return this.repo.update(id, changes); }
  remove(id: number): boolean  { return this.repo.remove(id); }
}

// --- EmployeeService ---

export class EmployeeService extends BaseService<Employee> {
  getByDepartment(deptId: number): Employee[] {
    return this.repo.query(e => e.departmentId === deptId);
  }

  @LogCall
  promote(id: number, newRole: Role): boolean {
    return this.repo.update(id, { role: newRole });
  }

  @LogCall
  getSalaryReport(): { total: number; average: number; highest: Employee } {
    const all = this.repo.getAll();
    const total = all.reduce((sum, e) => sum + e.salary, 0);
    const average = Math.round(total / all.length);
    const highest = all.reduce((top, e) => (e.salary > top.salary ? e : top), all[0]);
    return { total, average, highest };
  }
}

// --- ProjectService ---

export class ProjectService extends BaseService<Project> {
  @LogCall
  assignEmployee(projectId: number, empId: number): boolean {
    const project = this.repo.findById(projectId);
    if (!project) return false;
    if (project.employeeIds.includes(empId)) return false;
    return this.repo.update(projectId, {
      employeeIds: [...project.employeeIds, empId],
    });
  }

  getOverdue(): Project[] {
    return this.repo.query(p => daysUntilDeadline(p) < 0);
  }
}

// --- Build services from seeded repos ---

export function buildServices() {
  const { empRepo, deptRepo, projectRepo } = seedRepositories();
  const employeeService = new EmployeeService(empRepo);
  const projectService  = new ProjectService(projectRepo);
  return { employeeService, projectService, deptRepo };
}

// --- Demo ---

console.log("=== Assignment 3: Service Layer, Abstract Classes & Decorators ===\n");

const { employeeService, projectService } = buildServices();

// Promote Bob (id: 2) to manager
console.log("Promoting Bob to manager:");
employeeService.promote(2, "manager");

// Salary report
console.log("\nSalary report:");
employeeService.getSalaryReport();

// Assign Eva (id: 5) to Payroll Automation (id: 1)
console.log("\nAssigning Eva to Payroll Automation project:");
projectService.assignEmployee(1, 5);

// Overdue projects
const overdue = projectService.getOverdue();
console.log(`\nOverdue projects: ${overdue.map(p => p.title).join(", ") || "none"}`);
