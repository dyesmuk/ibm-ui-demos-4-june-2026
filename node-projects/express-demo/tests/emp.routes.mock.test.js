// emp.routes.mock.test.js

// tests/emp.routes.test.js

import { jest } from '@jest/globals';
import express from 'express';
import request from 'supertest';

jest.unstable_mockModule('../src/models/Employee.js', () => {

    const Employee = jest.fn();

    Employee.find = jest.fn();
    Employee.findById = jest.fn();
    Employee.findByIdAndUpdate = jest.fn();
    Employee.findByIdAndDelete = jest.fn();

    Employee.prototype.save = jest.fn();

    return {
        default: Employee
    };
});

const { default: Employee } = await import('../src/models/Employee.js');
const { default: empRoutes } = await import('../src/routes/empRoutes.js');

const app = express();

app.use(express.json());
app.use('/employees', empRoutes);

describe('Employee Routes', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should return all employees', async () => {

        Employee.find.mockResolvedValue([
            { _id: '1', name: 'Sonu', salary: 90000 },
            { _id: '2', name: 'Monu', salary: 95000 }
        ]);

        const res = await request(app).get('/employees');

        expect(res.status).toBe(200);
        expect(res.body).toHaveLength(2);
    });

    test('should return employees by name', async () => {

        Employee.find.mockResolvedValue([
            { _id: '1', name: 'Sonu', salary: 90000 }
        ]);

        const res = await request(app)
            .get('/employees?name=Sonu');

        expect(res.status).toBe(200);
        expect(res.body[0].name).toBe('Sonu');
    });

    test('should return employee by id', async () => {

        Employee.findById.mockResolvedValue({
            _id: '1',
            name: 'Sonu',
            salary: 90000
        });

        const res = await request(app)
            .get('/employees/1');

        expect(res.status).toBe(200);
        expect(res.body.name).toBe('Sonu');
    });

    test('should return 404 if employee not found', async () => {

        Employee.findById.mockResolvedValue(null);

        const res = await request(app)
            .get('/employees/999');

        expect(res.status).toBe(404);
    });

    test('should create employee', async () => {

        Employee.prototype.save.mockResolvedValue({
            _id: '3',
            name: 'Tonu',
            salary: 85000
        });

        const res = await request(app)
            .post('/employees')
            .send({
                name: 'Tonu',
                salary: 85000
            });

        expect(res.status).toBe(201);
        expect(res.body.employee.name).toBe('Tonu');
    });

    test('should update employee', async () => {

        Employee.findByIdAndUpdate.mockResolvedValue({
            _id: '1',
            name: 'Sonu',
            salary: 99000
        });

        const res = await request(app)
            .put('/employees/1')
            .send({
                name: 'Sonu',
                salary: 99000
            });

        expect(res.status).toBe(200);
        expect(res.body.employee.salary).toBe(99000);
    });

    test('should return 404 while updating unknown employee', async () => {

        Employee.findByIdAndUpdate.mockResolvedValue(null);

        const res = await request(app)
            .put('/employees/999')
            .send({
                name: 'ABC',
                salary: 10000
            });

        expect(res.status).toBe(404);
    });

    test('should delete employee', async () => {

        Employee.findByIdAndDelete.mockResolvedValue({
            _id: '1',
            name: 'Sonu'
        });

        const res = await request(app)
            .delete('/employees/1');

        expect(res.status).toBe(200);
    });

    test('should return 404 while deleting unknown employee', async () => {

        Employee.findByIdAndDelete.mockResolvedValue(null);

        const res = await request(app)
            .delete('/employees/999');

        expect(res.status).toBe(404);
    });

});