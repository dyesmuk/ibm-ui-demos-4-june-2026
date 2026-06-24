// emp-tests.js

import { calculateBonus, applyHike, getEmployees, findEmployee, addNums } from './ems/emp-stuff.js';


describe('Sample suite', () => {
    test('Sample test', () => {
        const sum = addNums(10, 20);
        expect(sum).toBe(30);
    });
});