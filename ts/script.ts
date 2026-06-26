// // // // // console.log('TS Hello world!');

// // // // // // // java
// // // // // // // int num = 10;

// // // // let salary = 90000.25;
// // // // console.log(salary);

// // // // // salary = 'abc';
// // // // // console.log(salary);

// // // // salary = 98000.50;
// // // // console.log(salary);

// // // // Type notation in TS 
// // // // =================== 

// // // // let salary; //   Variable 'salary' implicitly has an 'any' type
// // // // // let salary = 10.25; // type inference  
// // // // salary = 'abc'; // Type 'string' is not assignable to type 'number'.ts(2322)
// // // // console.log(salary);


// // // // Type notation in TS 
// // // // =================== 

// // // // // java
// // // // // int num = 10;

// // // // let salary : number = 10.25; 
// // // // salary = 'abc'; // Type 'string' is not assignable to type 'number'.ts(2322)
// // // // console.log(salary);

// // // let salary: number = 10.25;
// // // // salary = 'abc'; // Type 'string' is not assignable to type 'number'.ts(2322)
// // // salary = 12.50; // works
// // // console.log(salary);

// // // const addNums = (a: number, b: number): number => {
// // //     return a + b;
// // // };

// // // console.log(addNums(2, 3));
// // // // console.log(addNums('abc', 'def')); // error 

// // // const addNumsPrint = (a: number, b: number): void => {
// // //     console.log(a + b);
// // // };

// // // // console.log(addNumsPrint(2, 3));
// // // addNumsPrint(2, 3);

// // // // Types in TS 

// // let myData: string | number;

// // myData = 'abc';
// // console.log(myData);

// // myData = 10.25;
// // console.log(myData);

// // // myData = false; // Error 
// // console.log(myData);

// // let myData2: any;

// // myData2 = 'abc';
// // console.log(myData2);

// // myData2 = 10.25;
// // console.log(myData2);

// // myData2 = false;
// // console.log(myData2);

// // let myData3: unknown;

// // myData3 = 'abc';
// // console.log(myData3);

// // myData3 = 10.25;
// // console.log(myData3);

// // myData3 = false;
// // console.log(myData3);


// // Primitive types
// let name: string = 'Alice';
// let age: number = 30;
// let isAdmin: boolean = true;
// let score: number | undefined = undefined;

// // Arrays
// let numbers: number[] = [1, 2, 3];
// let names: Array<string> = ['Alice', 'Bob'];

// // Tuple: fixed-length, fixed-type array
// let point: [number, number] = [10, 20];
// let user: [string, number, boolean] = ['Alice', 30, true];
// const [username, userAge] = user;   // destructuring

// // Enums
// enum Direction { Up, Down, Left, Right }
// enum Status { Active = 'ACTIVE', Inactive = 'INACTIVE', Pending = 'PENDING' }
// const dir: Direction = Direction.Up;   // 0
// const status: Status = Status.Active;  // 'ACTIVE'

// // const enum (inlined at compile time — no JS enum object)
// const enum HttpMethod { GET = 'GET', POST = 'POST', PUT = 'PUT', DELETE = 'DELETE' }

// // any: opt-out of type checking (avoid!)
// let data: any = JSON.parse(jsonString);

// // unknown: safe version of any — must narrow before use
// let raw: unknown = fetchData();
// if (typeof raw === 'string') raw.toUpperCase();  // ✅ narrowed to string

// // never: function that never returns (throws or infinite loop)
// function fail(msg: string): never {
//     throw new Error(msg);
// }

// // void: function that returns nothing meaningful
// function log(msg: string): void {
//     console.log(msg);
// }

// // Type assertions
// const input = document.getElementById('email') as HTMLInputElement;
// const len = (someValue as string).length;



