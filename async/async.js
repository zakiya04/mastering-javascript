// async is a keyword put before function to make it async//


async function getData(){
    // this async function always retutns a promise//
    //either you rteun a made promise yourself or it just automatically converts//
    return pr
}

const dataPromise = getData(); // this is a promise//

dataPromise.then((res)=> console.log(res)) // this is the value of the promise//


//your own promise//

let pr = new Promise ((resolve,reject)=> {
    resolve('hello')
})
// this will return a promise and wont be further wrapped in another promise//