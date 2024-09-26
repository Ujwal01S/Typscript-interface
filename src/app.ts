interface Manchey {
    firstName : string;
    lastName: string;
    age:number;
    eyeColor: string;
}



const person:Manchey = {
    firstName:"John",
    lastName:"Doe",
    age:50, 
    eyeColor:"blue"
}


const x = {...person};
const y = person;

y.age = 19;

x.age = 200;

console.log(x);
console.log(y);