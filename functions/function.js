// this is just like .map function//

const arr = [2, 4, 5, 6]

const area = function(radius){
    return Math.PI * radius * radius
}
// this array method lets you have this function in all the arrays in your code//
Array.prototype.CalculateAreaa = function(logic){
    let output =[];
    for (let i = 0; i ++ ; i< this.length){
      output.push(logic(this[i]))
    }
    return output
}
console.log(arr.CalculateAreaa(area));
// how do we know what the arr is - the this in the function points out to the main array//
