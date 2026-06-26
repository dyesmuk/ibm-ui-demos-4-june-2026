class Animal {
    readonly id: number;
    public name: string;
    protected species: string;
    // #sound: string;     // true private (ES2022 field)
    // private sound: string;     // true private (ES2022 field)
    #hashField: string;

    constructor(name: string, species: string, hf: string) {
        this.id = Math.random();
        this.name = name;
        this.species = species;
        this.#hashField = hf;
        // this.sound = 'generic';
    }
}
const anml1 = new Animal('dog', 'dog specie', 'hashvalue');
// anml1.sound = 'another value';
// anml1.#hashField = 'abc';
console.log(anml1);


// class Animal {
//     readonly id: number;
//     public name: string;
//     protected species: string;
//     #sound: string;     // true private (ES2022 field)

//     constructor(name: string, species: string) {
//         this.id = Math.random();
//         this.name = name;
//         this.species = species;
//         this.#sound = 'generic';
//     }

//     speak(): string {
//         return `${this.name} says ${this.#sound}`;
//     }

//     get info(): string { return `${this.name} (${this.species})`; }
//     set sound(value: string) { this.#sound = value; }

//     static create(name: string, species: string): Animal {
//         return new Animal(name, species);
//     }
// }

// // // Parameter properties shorthand
// // class Dog extends Animal {
// //     constructor(
// //         name: string,
// //         public breed: string,       // declares + assigns in one step
// //         private readonly age: number
// //     ) {
// //         super(name, 'dog');
// //     }

// //     speak(): string {
// //         return `${this.name} barks!`;
// //     }
// // }

// // // Implementing an interface
// // interface Serializable {
// //     toJSON(): object;
// //     toString(): string;
// // }

// // class User implements Serializable {
// //     constructor(public name: string, public email: string) { }
// //     toJSON() { return { name: this.name, email: this.email }; }
// //     toString() { return `${this.name} <${this.email}>`; }
// // }

// // // Abstract class
// // abstract class Shape {
// //     abstract area(): number;      // must be implemented by subclasses
// //     abstract perimeter(): number;

// //     describe(): string {
// //         return `Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
// //     }
// // }

// // class Circle extends Shape {
// //     constructor(private radius: number) { super(); }
// //     area(): number { return Math.PI * this.radius ** 2; }
// //     perimeter(): number { return 2 * Math.PI * this.radius; }
// // }















// class Animal {
//     id;
//     name;
//     species;
//     #sound;

//     constructor(id, name, species, sound) {
//         this.id = id;
//         this.name = name;
//         this.species = species;
//         this.#sound = sound;
//     }

//     printData() { console.log(this.#sound); };
// }

// const anml1 = new Animal(1, 'sona', 'abc', 'bark');
// console.log(anml1);
// console.log(anml1.#sound);

