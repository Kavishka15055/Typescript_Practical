import type { test, userType } from "./our-type";


let fname: string = 'Kavishka';
const lname: string = 'Piyumal';
let fullname: string = `Kavishka piyumal`;

const myArray:number[]=[1,2,3,4,5,6,7,8,9,10];
const nameArray:string[]=['Nimal','Kamal','Sunil'];
const tempArray:(string | number)[]=['ddd',333,'AAA'];
const tempArr2:(number | boolean)[] | (string | number)[]=[2];

tempArr2[1]=4;
tempArr2[2]=false;
tempArr2[3]="Nimal";
tempArr2[5]=true;

const myObj ={
    name1: 'Kamal',
    name2: 'Nimal',
    name3: 'Sunil',
}

let userRole: userType;
let testVar: test;

userRole = 'Editor';  // OK
testVar = 'User';     // OK
testVar = 10;         // OK
testVar = true;       // OK

console.log(userRole);
console.log(testVar);

console.log(fname, lname, fullname);
console.log(tempArr2);
console.log(myObj.name2)
