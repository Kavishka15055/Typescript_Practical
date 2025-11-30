type TObj<T> = {
    name:T;
    age:number;
}

//Object generic

const obj:TObj<boolean | number[]> ={
    name:true,
    age:2
};
console.log(obj);

//Array generic

type TArry<K> = K[];
const arr:TArry<string | number > = ['ddd', 2]
console.log(arr);

//Tuple generic

type TTuple<T,S,E,I> = [T,S,E,I]

const tuple:TTuple<string, number, {
    name:string;
    age:number;
},number> = ['add', 2, {
    name:'sunil',
    age:23,
},2];

console.log(tuple);

//function generic

const myFunc = <T, R>(a: T, b: R): T => {
  return a;
};

myFunc<number, number>(1, 4);

function abc<T, C>(a:T, b:C):string {
    return 'abc';
}





