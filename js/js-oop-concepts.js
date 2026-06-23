// OOP in JS 

// // class in JS 
// class Animal {
//     name;
//     color;
// }
// const animal1 = new Animal();
// animal1.name = 'Tommy';
// animal1.color = 'Gold';
// console.log(animal1);


// class in JS 
class Animal {
    name;
    color;
    food;

    // constructor() { }
    // A class may only have one constructor

    constructor(name, color, food) {
        this.name = name;
        this.color = color;
        this.food = food;
    };

    toPrint() {
        return `{name: '${this.name}', color: '${this.color}, food: '${this.food}'}`;
    };

}
// const animal1 = new Animal();
// animal1.name = 'Tommy';
// animal1.color = 'Gold';
// console.log(animal1.toPrint());

// const animal2 = new Animal('Bob', 'Black');
// console.log(animal2.toPrint());

const animal3 = new Animal('Moti', 'White', 'Bread');
console.log(animal3.toPrint());

class Alive {

}

// inheritance 
// class Dog extends Animal , Alive  { // not working 
class Dog extends Animal {

}

const animal4 = new Dog('Anny', 'Grey');
console.log(animal4.toPrint());
const animal5 = new Dog('Soni', 'Pink', 'Biscuits');
console.log(animal5.toPrint());