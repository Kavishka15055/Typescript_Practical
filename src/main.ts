// // Define separate types for Cat and Dog
// type Cat = {
//   type: "cat";
//   name: string;
//   livesLeft: number;
//   favoriteActivity: "sleeping" | "napping" | "ignoring";
// };

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

function greet(name: string): string {
    return `Hello, ${name}`;
}
console.log(greet("Alice"));

