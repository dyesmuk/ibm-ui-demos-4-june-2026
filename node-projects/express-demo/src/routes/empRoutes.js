// empRoutes.js
import express from "express";

const router = express.Router();

const employees = [
    { id: 1, name: 'Sonu', salary: 90000 },
    { id: 2, name: 'Monu', salary: 95000 },
    { id: 3, name: 'Tonu', salary: 98000 },
    { id: 4, name: 'Ponu', salary: 92000 },
];

router.get('/', (req, res) => {
    console.log('employees');
    res.status(200).json(employees);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const emp = employees.find(e => e.id === id);
    if (!emp) {
        return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(emp);
});

router.post('/', (req, res) => {
    console.log(req.body);
    employees.push(req.body);
    res.status(201).json({ message: 'Employee added successfully!', employee: req.body });
});

router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const emp = employees.find(e => e.id === id);
    if (!emp) {
        return res.status(404).json({ message: 'Employee not found' });
    }
    emp.name = req.body.name;
    emp.salary = req.body.salary;
    res.status(200).json({ message: 'Employee updated successfully!', employee: emp });
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = employees.findIndex(e => e.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Employee not found' });
    }
    const deletedEmployee = employees.splice(index, 1);
    res.status(200).json({ message: 'Employee deleted', employee: deletedEmployee[0] });
});

export default router;