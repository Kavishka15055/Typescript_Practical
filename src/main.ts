enum Color {
    red='red',
    green='green',
    blue='blue'
}

let userInput;
userInput = Color.red;

console.log('in',userInput);
if(userInput==Color.red){
    console.log('red')
}
console.log('Out');

const myTuple: [string, number, boolean] = ['kumara',123,true];
myTuple[0]='Sumudu'

myTuple.push('Naveen');
console.log(myTuple);


enum gender {
    male = 0,
    female = 1,
}

let userGender: gender =gender.male;
const userAge:number = 14;

if(userGender == gender.male){
    if(userAge >= 18){
        console.log('You can eat');
    }else{
        console.log('Plz go out');       
    }
}else{
    if(userAge >=16){
        console.log('You can eat');
    }else{
        console.log('Plz go out');
    }
}