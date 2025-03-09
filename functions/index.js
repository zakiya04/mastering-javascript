//anonymous functions are uesd as a value to a varibale//
// first class functions : ability to use fuctions as value is fcf//
// functions are first class citezins - to use them as values//

/*
Higher Order functions - a function which takes another function as an 
argument or return a functions as value
*/
// example//

let radis = [2,4,5,6]
const CalculateArea = function(radius){
  let output =[];
  for (let i = 0; i ++ ; i< radius.length){
    let area = (Math.PI * radius[i] * radius[i]);
    output.push(area)
  }
  return output
}
console.log(CalculateArea(radis));

const CalculateCircumference = function(radius){
    let output =[];
  for (let i = 0; i ++ ; i< radius.length){
    let area = ( 2 * Math.PI * radius[i]);
    output.push(area)
  }
  return output
}
console.log(CalculateCircumference(radis));
// the problem with this is the repetition of similar type of code DRY PRICIPLE VIOLATION//

const area = function(radius){
    return Math.PI * radius * radius
}
const CalculateAreaa = function(radius,logic){
    let output =[];
    for (let i = 0; i ++ ; i< radius.length){
      output.push(logic(radius[i]))
    }
    return output
}
console.log(CalculateAreaa(radis,area));
// this becomes a more generic code and optimzes the code as well//