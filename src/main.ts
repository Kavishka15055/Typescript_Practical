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




