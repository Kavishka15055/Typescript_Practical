"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Array looping methods & for-of loop
const testArr = [1, 2, 3];
testArr.forEach((value) => console.log(value));
const t = testArr.map((v) => `hi ${v}`);
console.log(t);
const a = testArr.filter((v) => {
    if (typeof v === 'number') {
        return v > 1;
    }
    return false;
});
console.log(a);
const b = testArr.find((v) => {
    if (typeof v === 'number') {
        return v > 1;
    }
    return false;
});
console.log(b);
//# sourceMappingURL=main.js.map