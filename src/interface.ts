// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
//   name: 'Ujwal',
//   age: 23,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   }
// };

// user1.greet('Hi there - I am');

interface Person {
  name:string;
  age:number;
  greet(phrase: string):void;

  //we don't add method just define how it should look like
}

let user1 :Person;

user1 = {
  name:'Ujwal',
  age:23,

  greet(phrase: string){
    console.log(phrase + ' ' + this.name);
  }
};


user1.greet('Hi there - I am :');