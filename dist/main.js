"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Looping Arrays & Objects
const numArray = [1, 2, 3, 4, 5, 'A', 6, 7, 8, 9];
for (let i = 0; i < numArray.length; i += 1) {
    console.log(numArray[i]);
}
//Create object
const user1 = {
    name: 'Kavishka',
    age: 23,
    city: 'Horana',
    username: 'Kavishka',
    password: "AAA",
    address1: 'no 150/2',
    address2: 'Mawathgama',
    address3: 'Bandaragama',
};
//get the object keys in to array
const userKeys = Object.keys(user1);
console.log(userKeys);
//# sourceMappingURL=main.js.map