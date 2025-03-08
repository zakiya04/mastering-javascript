// using await with async//
//this method is used to hanlde promises//

let promise = new Promise ((resolve, reject) =>{
    setTimeout(()=>{
        return "This is a promise!"
    },5000)
})

// before await//

function getData(){
    // the second console wont wait for the rpomise to get resolved and would just execute//
    promise.then(res => console.log (res))
    console.log('this is a function')
}

// after await//

async function getDataa(){
    // this val wont be a promise but will give the value of resolve//
    const val = await promise;
    // js will first wait for the promise to be resolved and then it work go to the next line//
    console.log('this is a function');
    console.log(val);

    // FIRST THE VAL WILL GET CONSOLED AND THEN THE SIMPLE CONSOLE//
    // JS ENGINE WAITS FOR THE ASYNC TO GET RESOLVED//
}