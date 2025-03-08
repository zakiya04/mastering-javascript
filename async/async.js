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