class SystemUser {

    constructor(private name:string, private age:number, private city:string, private username:string, private password:string){
        // this.register();
    }

     // Getter for name
    getName() {
        return this.name;
    }

    // Setter for name
    setName(value: string) {
        this.name = value;
    }

    login() {
        console.log('User login', this.name);
        console.log('User login', this.age);
    }
    private register() {
        console.log('User register',this.name);
    }
    logout(){
        console.log('user logout');
    }
    printOneToTen(){
        let i = 1;
        while(i<=10){
            console.log(i);
            i=i+1;
        }
        console.log("End While loop.");
    }
}

const userOne = new SystemUser("Kamal", 23, "Mathara", "Kamal", "kamal");
// console.log(userOne);
// userOne.setName("Nimal");   
// console.log("updated Userone",userOne)
// console.log("Updated name: ",userOne.getName());
// userOne.logout();
// userOne.printOneToTen();


//duck type

interface User {
    name: string;
    age: number;
}

let person = {
    name: "Nimal",
    age: 30,
    city: "Kandy"
};

let u: User = person;
console.log(u);

//union type 
function showLength(value: string | number){
    if (typeof value === "string"){
        console.log("String length:", value.length);
    } else {
        console.log("Number doubled:", value * 2);
    }
}

showLength("TypeScript");
showLength(25);


let isStudent: boolean =true;
let message: string = isStudent ? "Welcome, Student!" : "Welcome, Guest!";
console.log(message);

// Object with typed properties
// let person: { 
//   name: string; 
//   age: number; 
//   isStudent: boolean;
// } = {
//   name: "John",
//   age: 25,
//   isStudent: true
// };



//Index Signatures
interface Dictionary {
    [key: string]: string;
}

const translations: Dictionary = {
    hello: "Hola",
    world: "World",
};
console.log(translations["hello"]);
console.log(translations["world"]);

//Numaric Index Signatures
interface NumericIndex {
    [index: number]: boolean;
}
const flags: NumericIndex = {
    0:true,
    1:false,
    2:true
}
console.log(flags[0]);
console.log(flags[1]);







