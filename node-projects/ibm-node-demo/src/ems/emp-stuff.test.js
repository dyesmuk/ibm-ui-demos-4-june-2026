// emp-tests.js
// documentation of matchers - 
// https://jestjs.io/docs/using-matchers

import { calculateBonus, getEmployees, findEmployee, addNums } from './emp-stuff.js';

describe('ems tests suite', () => {

    describe('find employee by id tests', () => {

        it('given id 1, name shoule be Sonu', () => {
            expect(findEmployee(1).name).toBe('Sonu');
        });

        it('given id 1, name shoule NOT be Monu', () => {
            expect(findEmployee(1).name).not.toBe('Monu');
        });
        it('given id 100, should return undefined', () => {
            expect(findEmployee(100)).toBeUndefined();
        });

    });



    describe('demo tests', () => {

        it('test addNums', () => {
            const sum = addNums(10, 20);
            expect(sum).toBe(30);
        });

        it('test addNums negative', () => {
            const sum = addNums(10, 20);
            expect(sum).not.toBe(35);
        });
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


