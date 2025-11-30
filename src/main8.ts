import type {TTestArry} from "./type";
//Array looping methods & for-of loop

const testArr:TTestArry = [1,2,3];
testArr.forEach((value: number|string):void => console.log(value));

const t = testArr.map((v:string|number):string => `hi ${v}`);
console.log(t); 


const a = testArr.filter((v:string|number):boolean => {
    if(typeof v === 'number'){
        return v > 1;
    }
    return false;
});
console.log(a);

const b = testArr.find((v:string|number):boolean => {
    if(typeof v === 'number'){
        return v > 1;
    }
    return false;
})
console.log(b);


