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

    // constructor() { }
    // A class may only have one constructor

    constructor(name, color) {
        this.name = name;
        this.color = color
    };

    toPrint() {
        return `{name: '${this.name}', color: '${this.color}'}`;
    };

}
const animal1 = new Animal();
animal1.name = 'Tommy';
animal1.color = 'Gold';
console.log(animal1.toPrint());

const animal2 = new Animal('Bob', 'Black');
console.log(animal2.toPrint());

const animal3 = new Animal('Moti');
console.log(animal3.toPrint());

// inheritance 
class Dog extends Animal {

}

// const animal4 = new Dog