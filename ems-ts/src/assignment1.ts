// ============================================================
// Assignment 1 — Types, interfaces & data modelling
// ============================================================

// --- Types ---

export type Role = "engineer" | "manager" | "hr" | "intern";
export type Status = "active" | "inactive" | "on-leave";

// --- Interfaces ---

export interface Department {
  id: number;
  name: string;
  location: string;
}

export interface Employee {
  id: number;
  name: string;
  role: Role;
  salary: number;
  status: Status;
  departmentId: number;
  email?: string;
}

export interface Project {
  id: number;
  title: string;
  budget: number;
  employeeIds: number[];
  deadline: Date;
}

// --- Utility functions ---

export function getFullLabel(e: Employee): string {
  return `${e.name} — ${e.role}`;
}

export function isActive(e: Employee): boolean {
  return e.status === "active";
}

export function daysUntilDeadline(p: Project): number {
  const now = new Date();
  const diff = p.deadline.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

// --- Mock data ---

export const departments: Department[] = [
  { id: 1, name: "Engineering", location: "Bangalore" },
  { id: 2, name: "HR",          location: "Mumbai" },
  { id: 3, name: "Operations",  location: "Chennai" },
];

export const employees: Employee[] = [
  { id: 1, name: "Alice",   role: "manager",  salary: 90000, status: "active",    departmentId: 1, email: "alice@ems.com" },
  { id: 2, name: "Bob",     role: "engineer", salary: 70000, status: "active",    departmentId: 1 },
  { id: 3, name: "Carol",   role: "engineer", salary: 68000, status: "on-leave",  departmentId: 1 },
  { id: 4, name: "David",   role: "hr",       salary: 55000, status: "active",    departmentId: 2, email: "david@ems.com" },
  { id: 5, name: "Eva",     role: "intern",   salary: 20000, status: "active",    departmentId: 3 },
  { id: 6, name: "Frank",   role: "manager",  salary: 95000, status: "inactive",  departmentId: 3 },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Payroll Automation",
    budget: 500000,
    employeeIds: [1, 2, 3],
    deadline: new Date("2025-12-31"),
  },
  {
    id: 2,
    title: "Employee Portal",
    budget: 300000,
    employeeIds: [1, 4, 5],
    deadline: new Date("2024-06-30"),        // intentionally in the past (overdue)
  },
];

// --- Demo ---

console.log("=== Assignment 1: Types, Interfaces & Data Modelling ===\n");

console.log("Departments:");
departments.forEach(d => console.log(`  [${d.id}] ${d.name} — ${d.location}`));

console.log("\nEmployees:");
employees.forEach(e => {
  console.log(`  ${getFullLabel(e)} | salary: ${e.salary} | active: ${isActive(e)}`);
});

console.log("\nProjects:");
projects.forEach(p => {
  const days = daysUntilDeadline(p);
  console.log(`  ${p.title} | budget: ${p.budget} | days until deadline: ${days}`);
});
