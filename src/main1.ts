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

const myObj:{
    name1:string;
    name2:string;
    name3?:string;
} ={
    name1: 'Kamal',
    name2: 'Nimal',
    // name3: 'Sunil',//? dala thiyena nisa optional wenawa noda inn puluwan
    // name1: 'AAAa',//Meka waradi
}
myObj.name1= 'BBBB';


//Type alias
type TMyObj2 ={
    name:string;
    phone?:string;//optional
    city?:string;//optional
}

const myObj2:TMyObj2 ={
    name:'Sunimal',
    phone:'0761234567',
}
//object type alias{object walta type deddi interface use karanawa}
interface IMyObj {
    name:string;
    phone?:string;
    city?:string;
}
const myObj3:IMyObj ={
    name:'Saman',
    city:'Colombo',
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
console.log(myObj.name1)
console.log(myObj2.phone);
console.log(myObj3.city);
