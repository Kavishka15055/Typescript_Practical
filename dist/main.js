"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Object generic
const obj = {
    name: true,
    age: 2
};
console.log(obj);
const arr = ['ddd', 2];
console.log(arr);
const tuple = ['add', 2, {
        name: 'sunil',
        age: 23,
    }, 2];
console.log(tuple);
//function generic
const myFunc = (a, b) => {
    return a;
};
myFunc(1, 4);
function abc(a, b) {
    return 'abc';
}
//# sourceMappingURL=main.js.map