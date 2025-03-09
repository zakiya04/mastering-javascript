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
console.log(CalculateCircumference(radis))