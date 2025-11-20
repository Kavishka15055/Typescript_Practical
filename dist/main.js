"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SystemUser {
    name;
    age;
    city;
    username;
    password;
    login() {
        console.log('User login', this.name);
    }
    register() {
        console.log('User register', this.name);
    }
}
const userOne = new SystemUser();
userOne.name = 'Kamal';
userOne.age = 23;
userOne.city = "Mathara";
userOne.username = "Kamal";
userOne.password = "kamal";
console.log(userOne);
userOne.login();
const userTwo = new SystemUser();
userTwo.name = 'Nimal';
userTwo.age = 27;
userTwo.city = "Kandy";
userTwo.username = "Nimal";
userTwo.password = "nimal";
console.log(userTwo);
userTwo.register();
let code = 123;
let employeeCode = code;
console.log(typeof (employeeCode));
console.log(employeeCode);
let employee = {};
employee.name = 'John';
employee.code = 123;
console.log(employee.name);
console.log(employee.code);
// let someValue: unknown ="this is a string";
// let strLength: number =(<string>someValue).length;
// console.log(strLength);
//# sourceMappingURL=main.js.map