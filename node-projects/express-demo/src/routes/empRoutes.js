// empRoutes.js

import express from "express";
import Employee from "../models/Employee.js";

const router = express.Router();

router.get("/", async (req, res) => {
    console.log(req.query);
    try {
        const { name } = req.query;
        let employees;
        if (name) {
            employees = await Employee.find({ name });
        } else {
            employees = await Employee.find();
        }
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json(employee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const employee = new Employee({ name: req.body.name, salary: req.body.salary });
        const savedEmployee = await employee.save();

        res.status(201).json({
            message: "Employee added successfully!",
            employee: savedEmployee
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            { name: req.body.name, salary: req.body.salary },
            { new: true, runValidators: true }
        );

        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json({
            message: "Employee updated successfully!",
            employee
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);

        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json({
            message: "Employee deleted successfully!",
            employee
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;


// // empRoutes.js
// import express from "express";

// const router = express.Router();

// const employees = [
//     { id: 1, name: 'Sonu', salary: 90000 },
//     { id: 2, name: 'Monu', salary: 95000 },
//     { id: 3, name: 'Tonu', salary: 98000 },
//     { id: 4, name: 'Ponu', salary: 92000 },
// ];

// router.get('/', (req, res) => {
//     console.log('employees');
//     res.status(200).json(employees);
// });

// router.get('/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const emp = employees.find(e => e.id === id);
//     if (!emp) {
//         return res.status(404).json({ message: 'Employee not found' });
//     }
//     res.status(200).json(emp);
// });

// router.post('/', (req, res) => {
//     console.log(req.body);
//     employees.push(req.body);
//     res.status(201).json({ message: 'Employee added successfully!', employee: req.body });
// });

// router.put('/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const emp = employees.find(e => e.id === id);
//     if (!emp) {
//         return res.status(404).json({ message: 'Employee not found' });
//     }
//     emp.name = req.body.name;
//     emp.salary = req.body.salary;
//     res.status(200).json({ message: 'Employee updated successfully!', employee: emp });
// });

// router.delete('/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const index = employees.findIndex(e => e.id === id);
//     if (index === -1) {
//         return res.status(404).json({ message: 'Employee not found' });
//     }
//     const deletedEmployee = employees.splice(index, 1);
//     res.status(200).json({ message: 'Employee deleted', employee: deletedEmployee[0] });
// });

// export default router;
