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
//# sourceMappingURL=main.js.map