// ============================================================
// Assignment 2 — Generic Repository class
// ============================================================
// Imports everything from Assignment 1

import {
  Department, Employee, Project,
  departments, employees, projects,
  getFullLabel,
} from "./assignment1";

// --- Identifiable interface ---

export interface Identifiable {
  id: number;
}

// --- Generic Repository ---

export class Repository<T extends Identifiable> {
  private store: Map<number, T> = new Map();

  add(item: T): void {
    if (this.store.has(item.id)) {
      throw new Error(`Item with id ${item.id} already exists.`);
    }
    this.store.set(item.id, item);
  }

  findById(id: number): T | undefined {
    return this.store.get(id);
  }

  getAll(): T[] {
    return Array.from(this.store.values());
  }

  update(id: number, changes: Partial<T>): boolean {
    const existing = this.store.get(id);
    if (!existing) return false;
    this.store.set(id, { ...existing, ...changes });
    return true;
  }

  remove(id: number): boolean {
    return this.store.delete(id);
  }

  query(predicate: (item: T) => boolean): T[] {
    return this.getAll().filter(predicate);
  }
}

// --- Seed repositories ---

export function seedRepositories() {
  const empRepo = new Repository<Employee>();
  const deptRepo = new Repository<Department>();
  const projectRepo = new Repository<Project>();

  departments.forEach(d => deptRepo.add(d));
  employees.forEach(e => empRepo.add(e));
  projects.forEach(p => projectRepo.add(p));

  return { empRepo, deptRepo, projectRepo };
}

// --- Demo ---

console.log("=== Assignment 2: Generic Repository ===\n");

const { empRepo, deptRepo, projectRepo } = seedRepositories();

// Find all active engineers
const activeEngineers = empRepo.query(
  e => e.status === "active" && e.role === "engineer"
);
console.log("Active engineers:");
activeEngineers.forEach(e => console.log(`  ${getFullLabel(e)}`));

// Update salary
empRepo.update(2, { salary: 75000 });
const bob = empRepo.findById(2);
console.log(`\nBob's updated salary: ${bob?.salary}`);

// Remove a project
projectRepo.remove(2);
console.log(`\nProjects after removal: ${projectRepo.getAll().map(p => p.title).join(", ")}`);

// Query employees in Engineering (departmentId: 1)
const engTeam = empRepo.query(e => e.departmentId === 1);
console.log(`\nEngineering team (${engTeam.length} members):`);
engTeam.forEach(e => console.log(`  ${getFullLabel(e)}`));
