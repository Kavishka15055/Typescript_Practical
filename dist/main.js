"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fname = 'Kavishka';
const lname = 'Piyumal';
let fullname = `Kavishka piyumal`;
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nameArray = ['Nimal', 'Kamal', 'Sunil'];
const tempArray = ['ddd', 333, 'AAA'];
const tempArr2 = [2];
tempArr2[1] = 4;
tempArr2[2] = false;
tempArr2[3] = "Nimal";
tempArr2[5] = true;
const myObj = {
    name1: 'Kamal',
    name2: 'Nimal',
    // name3: 'Sunil',//? dala thiyena nisa optional wenawa noda inn puluwan
    // name1: 'AAAa',//Meka waradi
};
myObj.name1 = 'BBBB';
const myObj2 = {
    name: 'Sunimal',
    phone: '0761234567',
};
const myObj3 = {
    name: 'Saman',
    city: 'Colombo',
};
let userRole;
let testVar;
userRole = 'Editor'; // OK
testVar = 'User'; // OK
testVar = 10; // OK
testVar = true; // OK
console.log(userRole);
console.log(testVar);
console.log(fname, lname, fullname);
console.log(tempArr2);
console.log(myObj.name1);
console.log(myObj2.phone);
console.log(myObj3.city);
//# sourceMappingURL=main.js.map