"use strict";
const user1 = {
    id: 1,
    name: 'Sonu',
    email: 'a@b.c',
    phone: 123
};
console.log(user1);
// user1.id = 2;// error 
user1.name = 'Monu';
console.log(user1);
const adminUser = {
    role: 'admin',
    name: 'Tonu',
    email: 'a',
    id: 3,
    permissions: []
};
console.log(adminUser);
