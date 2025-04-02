//using object literals: kay-value pairs//

let obj1 ={
    name:"Hello",
    age: 25,
    isLoggedIn: true
}

// function constructor - base blueprint before classes//
//uses pascalCasing//
function User(name, age, isLoggedIn){
  this.name = name;
  this.age = age;
  this.isLoggedIn = isLoggedIn
}
const person1 = new User('Dora', 4, true)

//classes in js//

class Person{
    // this initializes the blueprint and these values are necessary in every object//
    constructor(name, age, isLoggedIn){
        this.name = name;
        this.age = age;
        this.isLoggedIn = isLoggedIn
    }
    //this is secodary ie for some of the objects//
    getName = function(){
        console.log(`Hello ${this.name}`)
    }
}

const person = new Person('shin', 5, false);

/* 
POINTS TO NOTE:
new keyword initializes the constructor()
classes are typically functions and are sort of syntactic sugar but have more to offer
*/