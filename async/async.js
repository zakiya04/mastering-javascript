// async is a keyword put before function to make it async//


async function getData(){
    // this async function always retutns a promise//
    //either you rteun a made promise yourself or it just automatically converts//
    return "Hello"
}

const dataPromise = getData(); // this is a promise//

dataPromise.then((res)=> console.log(res)) // this is the value of the promise//