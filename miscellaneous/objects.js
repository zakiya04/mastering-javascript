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