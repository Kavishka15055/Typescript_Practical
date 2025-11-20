class SystemUser {

    constructor(private name:string, private age:number, private city:string, private username:string, private password:string){}

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
    register() {
        console.log('User register',this.name);
    }
}

const userOne = new SystemUser("Kamal", 23, "Mathara", "Kamal", "kamal");
console.log(userOne);
userOne.setName("Nimal");   
console.log("updated Userone",userOne)
console.log("Updated name: ",userOne.getName());





