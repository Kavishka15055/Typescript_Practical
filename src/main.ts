import type {TUserData} from './our-type';

const systemUsers:TUserData[] = [
    {
        name:'Kamal',
        age:23,
        city:'Mathara',
        username:'Kamal',
        password:"ABC"
    },
    {
        name:'Nimal',
        age:23,
        city:'Mathara',
        username:'Nimal',
        password:"DEF"
    },
    {
        name:'Supun',
        age:25,
        city:'Colombo',
        username:'Supun',
        password:"HIJ"
    },
];

// const userInputUsername = 'Kamal A';
// const userInputPassword = "ABC";

function loginUser(username:string,password:string){
    if(systemUsers[0]?.username == username){
        console.log('Index 0');
        if(systemUsers[0]?.password == password){
            console.log('Login success');
        }else{
            console.log('Login failed');
        }
    }else if (systemUsers[1]?.name == username){
        console.log('Index 1');
        if(systemUsers[1]?.password == password){
            console.log('Login success');
        }else{
            console.log('Login failed');
        }
    }else if (systemUsers[2]?.name == username){
        console.log('Index 2');
        if(systemUsers[2]?.password == password){
            console.log('Login success');
        }else{
            console.log('Login failed');
        }
    }else {
        console.log('Login failed');
    }
    console.log('End');
    
}

//Arrow functions
const numberCheck =(num1:number,num2:number):number =>{
    if(num1 > num2){
        return num1;
    }
    return num2;
}

loginUser("Supun","HIJ");
loginUser("Amila","XYZ");

console.log(numberCheck(1,2));