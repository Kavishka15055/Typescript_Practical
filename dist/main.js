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
}
const userOne = new SystemUser("Kamal", 23, "Mathara", "Kamal", "kamal");
console.log(userOne);
userOne.setName("Nimal");
console.log("updated Userone", userOne);
console.log("Updated name: ", userOne.getName());
//# sourceMappingURL=main.js.map