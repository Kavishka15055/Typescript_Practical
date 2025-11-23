"use strict";
// // Define separate types for Cat and Dog
// type Cat = {
//   type: "cat";
//   name: string;
//   livesLeft: number;
//   favoriteActivity: "sleeping" | "napping" | "ignoring";
// };
Object.defineProperty(exports, "__esModule", { value: true });
// type Dog = {
//   type: "dog";  
//   name: string;
//   breed: string;
//   favoriteActivity: "fetch" | "walking" | "eating";
// };
// // Union type - can be either Cat OR Dog
// type Pet = Cat | Dog;
// // Create some pets
// const myCat: Pet = {
//   type: "cat",
//   name: "Whiskers",
//   livesLeft: 7,
//   favoriteActivity: "ignoring"  // Only cats can ignore you!
// };
// const myDog: Pet = {
//   type: "dog",
//   name: "Buddy", 
//   breed: "Golden Retriever",
//   favoriteActivity: "fetch"  // Only dogs play fetch!
// };
// // Function that handles both cats and dogs
// function playWithPet(pet: Pet) {
//   console.log(`Playing with ${pet.name}`);
//   // TypeScript knows which type it is based on the 'type' property
//   if (pet.type === "cat") {
//     console.log(`${pet.name} is ${pet.favoriteActivity}`);
//     console.log(`Has ${pet.livesLeft} lives left`);
//     // TypeScript knows pet is a Cat here, so we can use livesLeft
//   } else {
//     console.log(`${pet.name} the ${pet.breed} loves ${pet.favoriteActivity}`);
//     // TypeScript knows pet is a Dog here, so we can use breed
//   }
// }
// // Test it out
// playWithPet(myCat);
// playWithPet(myDog);  
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Alice"));
// function add(a:number, b:number): number {
//     return a+b;
// }
// console.log("Sum:", add(10, 20));
function introduce(name, age) {
    if (age !== undefined) {
        return `${name} is ${age} years old.`;
    }
    return `${name} chose not to share their age.`;
}
console.log(introduce("Bob", 25));
console.log(introduce("Charlie"));
//defualt parameters
// function multiply(a:number, b:number = 2):number {
//     return a*b;
// }
console.log("Multiply with default:", multiply(5));
console.log("Multiply custom:", multiply(5, 4));
//arrow parametars
const square = (x) => x * x;
console.log("Square:", square(6));
//function type annotation
let operation;
//Assigning the 'add' function
function add(a, b) {
    return a + b;
}
operation = add;
console.log("Operation (Add)", operation(15, 25));
//Assigning the "multiply" function
function multiply(a, b = 2) {
    return a * b;
}
operation = multiply;
console.log("Operation (multiply):", operation(3, 7));
//Basic void Usage
// Function that performs action but returns nothing
function logMessage(message) {
    console.log(message);
    // No return statement, or return without value
}
function displayWarning() {
    alert("Warning: Something went wrong!");
    return; // Optional explicit return without value
}
// Usage
logMessage("Hello, World!"); // Just logs, no return value
//# sourceMappingURL=main.js.map