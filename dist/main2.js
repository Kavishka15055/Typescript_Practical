"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color;
(function (Color) {
    Color["red"] = "red";
    Color["green"] = "green";
    Color["blue"] = "blue";
})(Color || (Color = {}));
let userInput;
userInput = Color.red;
console.log('in', userInput);
if (userInput == Color.red) {
    console.log('red');
}
console.log('Out');
const myTuple = ['kumara', 123, true];
myTuple[0] = 'Sumudu';
myTuple.push('Naveen');
console.log(myTuple);
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
})(gender || (gender = {}));
let userGender = gender.male;
const userAge = 14;
if (userGender == gender.male) {
    if (userAge >= 18) {
        console.log('You can eat');
    }
    else {
        console.log('Plz go out');
    }
}
else {
    if (userAge >= 16) {
        console.log('You can eat');
    }
    else {
        console.log('Plz go out');
    }
}
//# sourceMappingURL=main2.js.map