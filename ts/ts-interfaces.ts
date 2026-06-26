interface User {
    readonly id: number;         // readonly: can't reassign
    name: string;
    email: string;
    age?: number;                // optional
    address?: {
        city: string;
        country: string;
    };
}

const user1: User = {
    id: 1,
    name: 'Sonu',
    email: 'a@b.c'
};

console.log(user1);
// user1.id = 2;// error 
user1.name = 'Monu';
console.log(user1);


// Extending interfaces
interface AdminUser extends User {
    role: 'admin';
    permissions: string[];
}

const adminUser: AdminUser = {
    role: 'admin',
    name: 'Tonu',
    email: 'a',
    id: 3,
    permissions: []

}
console.log(adminUser);