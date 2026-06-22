
// console.log("Hello world!");

// ECMAScript ES

// variable declaration, data types, operators, control structure, functions, etc

// java
// int num = 10;

// // JS
// num = 10; // don't use this
// var num2 = 20; // don't use this too
// const num3 = 30; // use this as preferred choice
// let num4 = 40; // use this when needed
// console.log(num);
// console.log(num2);
// console.log(num3);
// console.log(num4);


// const num1 = 10;
// console.log(num1);
// num1 = 20;
// console.log(num1);


// let num;
// console.log(typeof num);
// console.log(num);
// num = 10;
// console.log(typeof num);
// console.log(num);
// num = 20;
// console.log(typeof num);
// console.log(num);
// num = 20.35;
// console.log(typeof num);
// console.log(num);
// num = 'abc';
// console.log(typeof num);
// console.log(num);
// num = false;
// console.log(typeof num);
// console.log(num);

// let firstName = 'Sonu';
// let lastName = "Rao";
// let fullName = firstName + " " + lastName;
// let fullName2 = `${firstName} ${lastName}`;
// console.log(fullName);
// console.log(fullName2);
// console.log('Hello')

// let num;
// let num2 = 20;
// console.log(num + num2);
// console.log(num - num2);

// nan
// let num;
// let num2 = 20;
// console.log(num + num2);
// console.log(num - num2);

// let num1 = 10;
// let num2 = '20';
// console.log(num1 + num2);
// console.log(num1 - num2);

// let num3 = 30;
// let num4 = 'abc';
// console.log(num3 + num4);
// console.log(num3 - num4);

// let num1 = 10;
// let num2 = '10';
// console.log(num1 == num2);
// console.log(num1 === num2);
// console.log(num1 != num2);
// console.log(num1 !== num2);

// truthy, falsy values

// falsy -> false, 0, '', undefined, null, NaN
// truthy -> everything else 

// let input = 'Sonu';

// if (input)
//     console.log('Yes');



// // arrays in js 
// const arr = [10, 20.5, 'abc', false, null, ['a', 3, true], 'sonu', 'monu', {}];
// // console.log(arr);


// object in js 

const employee = {
    firstName: 'Sonu',
    lastName: 'Joshi',
    salary: 10.25,
    address: { pin: 500001, city: 'Pune' },
    isIndian: true,
    phones: [9876543210, 6789012345],
    print: () => { }
};

// console.log(employee);
console.log(employee.firstName);
console.log(employee.address.city);
console.log(employee.phones[1]);