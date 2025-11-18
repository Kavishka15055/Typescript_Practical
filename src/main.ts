class SystemUser {
    name!: string;
    age!: number;
    city!: string;
    username!: string;
    password!: string;

    login() {
        console.log('User login');
    }
    register() {
        console.log('User register');
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