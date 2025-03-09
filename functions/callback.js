// the function that recieves a function as argument is higher order function but the function that is being passed to the function is the callback function//

// show us the world of async js in synchronous world//

function x(y){
 // now it is upto x when it wants to call y//
}
x(function y(){

})
// example is setTimeout//
setTimeout(
    /* takes a callback and calls whenever it wants and the call is done after the amout of seconds we mention*/
   function hello(){

   },
   5000
   // this function executes afer sometime thereby giving it a characteristic of asynchronous js//
)