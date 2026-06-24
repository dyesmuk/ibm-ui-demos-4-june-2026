// emp-stuff.js 

const employees = [
    { id: 1, name: 'Sonu', salary: 50000 },
    { id: 2, name: 'Monu', salary: 60000 },
    { id: 3, name: 'Tonu', salary: 70000 }
];

export const calculateBonus = salary => salary * 0.10;

export const getEmployees = () => employees.map(emp => emp.name);

export const findEmployee = id => employees.find(emp => emp.id === id);

export const addNums = (a, b) => a + b;


// // emp-stuff.js

// const employees = [
//     { id: 1, name: 'Sonu', salary: 50000 },
//     { id: 2, name: 'Monu', salary: 60000 },
//     { id: 3, name: 'Tonu', salary: 70000 }
// ];

// export const calculateBonus = (salary) => {
//     return salary * 0.10;
// }

// export const getEmployees = () => {
//     return employees.map(emp => emp.name);
// }

// export const findEmployee = (id) => {
//     return employees.find(emp => emp.id === id);
// }

// export const addNums = (a, b) => {
//     return a + b;
// }; 
