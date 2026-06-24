// emp-tests.js

import { calculateBonus, getEmployees, findEmployee, addNums } from './emp-stuff.js';

describe('ems tests suite', () => {

    it('test addNums', () => {
        const sum = addNums(10, 20);
        expect(sum).toBe(30);
    });

    it('test addNums negative', () => {
        const sum = addNums(10, 20);
        expect(sum).not.toBe(35);
    });
});



// describe(arg1, arg2);
// describe('', () => { });
// describe('ems tests suite', () => { });

// describe('ems tests suite', () => {
//     it();
//     test();
//  });

// describe('ems tests suite', () => {
//     it('test addNums', () => { });
// });


