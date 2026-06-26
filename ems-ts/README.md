# Employee Management System — TypeScript Assignments

**IBM Full Stack Developer Program**  
Progressive TypeScript assignments on a single EMS theme.  
Each assignment builds on the previous one.

---

## Setup

```bash
npm install
```

## Run assignments

```bash
npm run a1   # Assignment 1 — Types, interfaces & data modelling
npm run a2   # Assignment 2 — Generic Repository<T>
npm run a3   # Assignment 3 — Service layer, abstract classes & decorators
npm run a4   # Assignment 4 — Async operations & EventBus
npm run a5   # Assignment 5 — Persistence, reporting & CLI runner
```

Or directly:
```bash
npx ts-node src/assignment1.ts
```

---

## Project structure

```
ems-ts/
├── src/
│   ├── assignment1.ts   ← types, interfaces, mock data
│   ├── assignment2.ts   ← Repository<T>              (imports assignment1)
│   ├── assignment3.ts   ← BaseService, decorators     (imports assignment2)
│   ├── assignment4.ts   ← async wrappers, EventBus    (imports assignment3)
│   └── assignment5.ts   ← persistence, reports, CLI   (imports all)
├── data/                ← created at runtime by assignment5
├── tsconfig.json
├── package.json
└── README.md
```

---

## TS concepts by assignment

| # | Assignment | Key concepts |
|---|---|---|
| 1 | Types & interfaces | `interface`, optional fields, union/literal types, utility functions |
| 2 | Generic repository | `Repository<T>`, generic constraints, `Partial<T>`, `private` |
| 3 | Service layer | Abstract classes, method decorators, `protected`, typed return shapes |
| 4 | Async & events | `async/await`, `Promise<T>`, `EventBus`, `Parameters<T>`, `unknown` |
| 5 | Persistence & reports | `fs.promises`, JSON round-trip, `console.table`, snapshot type |

---

> **Note:** Running a later assignment (e.g. `assignment3.ts`) will also print
> the output of earlier files since they contain top-level demo code and are
> executed when imported. This is intentional — it shows the full progressive build.
