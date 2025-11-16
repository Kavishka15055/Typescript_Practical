import type { test, userType } from "./our-type";


let fname: string = 'Kavishka';
const lname: string = 'Piyumal';
let fullname: string = `Kavishka piyumal`;

let userRole: userType;
let testVar: test;

userRole = 'Editor';  // OK
testVar = 'User';     // OK
testVar = 10;         // OK
testVar = true;       // OK

console.log(userRole);
console.log(testVar);

console.log(fname, lname, fullname);
