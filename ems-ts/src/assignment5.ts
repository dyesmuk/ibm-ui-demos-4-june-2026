// ============================================================
// Assignment 5 — Persistence, reporting & CLI runner
// ============================================================
// Imports everything from Assignments 1–4

import * as fs from "fs";
import * as path from "path";
import {
  Employee, Department, Project,
  departments as mockDepts,
  employees  as mockEmps,
  projects   as mockProjects,
  daysUntilDeadline,
} from "./assignment1";
import { Repository, Identifiable } from "./assignment2";
import { buildServices } from "./assignment3";
import {
  AsyncEmployeeService,
  AsyncProjectService,
  EventBus,
  delay,
} from "./assignment4";

const DATA_DIR = path.join(__dirname, "../data");

// --- Snapshot type ---

type EMSSnapshot = {
  employees: Employee[];
  departments: Department[];
  projects: Project[];
  savedAt: string;
};

// --- Persistence helpers ---

async function saveAll<T>(filePath: string, items: T[]): Promise<void> {
  await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
  await fs.promises.writeFile(filePath, JSON.stringify(items, null, 2), "utf-8");
}

async function loadAll<T>(filePath: string): Promise<T[]> {
  try {
    const raw = await fs.promises.readFile(filePath, "utf-8");
    return JSON.parse(raw) as T[];
  } catch {
    return [];
  }
}

function seedRepo<T extends Identifiable>(items: T[]): Repository<T> {
  const repo = new Repository<T>();
  items.forEach(item => repo.add(item));
  return repo;
}

// --- ReportService ---

class ReportService {
  constructor(
    private empRepo: Repository<Employee>,
    private deptRepo: Repository<Department>,
    private projectRepo: Repository<Project>
  ) {}

  departmentSummary(): { dept: string; headcount: number; avgSalary: number }[] {
    return this.deptRepo.getAll().map(dept => {
      const members = this.empRepo.query(e => e.departmentId === dept.id);
      const avgSalary =
        members.length === 0
          ? 0
          : Math.round(members.reduce((s, e) => s + e.salary, 0) / members.length);
      return { dept: dept.name, headcount: members.length, avgSalary };
    });
  }

  projectStatus(): { title: string; teamSize: number; daysLeft: number; overdue: boolean }[] {
    return this.projectRepo.getAll().map(p => {
      const daysLeft = daysUntilDeadline(p);
      return {
        title: p.title,
        teamSize: p.employeeIds.length,
        daysLeft,
        overdue: daysLeft < 0,
      };
    });
  }
}

// --- Main ---

async function main() {
  console.log("=== Assignment 5: Persistence, Reporting & CLI Runner ===\n");

  // 1. Load or seed data
  const empFile   = path.join(DATA_DIR, "employees.json");
  const deptFile  = path.join(DATA_DIR, "departments.json");
  const projFile  = path.join(DATA_DIR, "projects.json");

  let loadedEmps   = await loadAll<Employee>(empFile);
  let loadedDepts  = await loadAll<Department>(deptFile);
  let loadedProjs  = await loadAll<Project>(projFile);

  // Restore Date objects for projects (JSON serialises them as strings)
  loadedProjs = loadedProjs.map(p => ({ ...p, deadline: new Date(p.deadline) }));

  const emps   = loadedEmps.length   ? loadedEmps   : mockEmps;
  const depts  = loadedDepts.length  ? loadedDepts  : mockDepts;
  const projs  = loadedProjs.length  ? loadedProjs  : mockProjects;

  const source = loadedEmps.length ? "saved files" : "mock data (first run)";
  console.log(`Data loaded from: ${source}\n`);

  const empRepo   = seedRepo<Employee>(emps);
  const deptRepo  = seedRepo<Department>(depts);
  const projRepo  = seedRepo<Project>(projs);

  // 2. Wire up services
  const bus         = new EventBus();
  const empService  = new AsyncEmployeeService(empRepo, bus);
  const projService = new AsyncProjectService(projRepo, bus);
  const reporter    = new ReportService(empRepo, deptRepo, projRepo);

  // Subscribe to events
  ["employee:added","employee:promoted","employee:removed","project:assigned","project:overdue-check"]
    .forEach(ev => bus.on(ev, p => console.log(`  [EVENT] ${ev} →`, JSON.stringify(p))));

  // 3. Perform operations
  try {
    console.log("--- Operations ---");

    await empService.addAsync({
      id: 8, name: "Helen", role: "engineer",
      salary: 74000, status: "active", departmentId: 1,
    });

    await projService.assignEmployeeAsync(1, 8);
    await empService.promoteAsync(8, "manager");
    await empService.removeAsync(6);   // remove inactive Frank

    console.log();
  } catch (err: unknown) {
    console.error("Operation failed:", err instanceof Error ? err.message : err);
  }

  // 4. Print reports
  console.log("--- Department Summary ---");
  console.table(reporter.departmentSummary());

  console.log("--- Project Status ---");
  console.table(reporter.projectStatus());

  // 5. Save updated state
  await saveAll(empFile,  empRepo.getAll());
  await saveAll(deptFile, deptRepo.getAll());
  await saveAll(projFile, projRepo.getAll());
  console.log(`\nState saved to: ${DATA_DIR}`);

  // Bonus: save full snapshot
  const snapshot: EMSSnapshot = {
    employees:   empRepo.getAll(),
    departments: deptRepo.getAll(),
    projects:    projRepo.getAll(),
    savedAt:     new Date().toISOString(),
  };
  const snapshotFile = path.join(DATA_DIR, "ems-snapshot.json");
  await fs.promises.writeFile(snapshotFile, JSON.stringify(snapshot, null, 2), "utf-8");
  console.log(`Snapshot saved to: ${snapshotFile}`);
}

main();
