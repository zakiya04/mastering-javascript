let p1 = new Promise((reject,resolve)=>{
    setTimeout(()=>{
      console.log('This is the 1st promise!')
    },5000)
})

let p2 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        console.log('This is the 2nd promise')
    },10000)
})

async function getData(){
    console.log('Hello World');

    const val1 = await p1;
    console.log('Hello 1');
    console.log(val1);

    const val2 = await p2;
    console.log("Hello 2");
    console.log(val2)
}
getData()

/*
in call stack, first the getData will go and conole Hello World, then the getData gets 
suspended from call stack and waits for 5 sec to resolve then gives Hello 1 and val1 , then
it sees another await but 5 sec have been already done, so for 5 sec, after suspension, it will 
console Hello 2 and then val2
*/

// async with fetch//

const api ='some api';

async function getFn(){

    const data = await fetch(api);
    const value = await data.json();

    /* 
    the fetch actually returns a response object and when .json is applied to it, it again
    becomes a promise and then the await then resolves it
     */
}
// instead of .catch, here in async we have try catch method//