"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SystemUser {
    name;
    age;
    city;
    username;
    password;
    constructor(name, age, city, username, password) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.username = username;
        this.password = password;
        // this.register();
    }
    // Getter for name
    getName() {
        return this.name;
    }
    // Setter for name
    setName(value) {
        this.name = value;
    }
    login() {
        console.log('User login', this.name);
        console.log('User login', this.age);
    }
    register() {
        console.log('User register', this.name);
    }
    logout() {
        console.log('user logout');
    }
    printOneToTen() {
        let i = 1;
        while (i <= 10) {
            console.log(i);
            i = i + 1;
        }
        console.log("End While loop.");
    }
}
const userOne = new SystemUser("Kamal", 23, "Mathara", "Kamal", "kamal");
let person = {
    name: "Nimal",
    age: 30,
    city: "Kandy"
};
let u = person;
console.log(u);
//union type 
function showLength(value) {
    if (typeof value === "string") {
        console.log("String length:", value.length);
    }
    else {
        console.log("Number doubled:", value * 2);
    }
}
showLength("TypeScript");
showLength(25);
let isStudent = true;
let message = isStudent ? "Welcome, Student!" : "Welcome, Guest!";
console.log(message);
const translations = {
    hello: "Hola",
    world: "World",
};
console.log(translations["hello"]);
console.log(translations["world"]);
const flags = {
    0: true,
    1: false,
    2: true
};
console.log(flags[0]);
console.log(flags[1]);
//# sourceMappingURL=main.js.map