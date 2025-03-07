//now we will create our own promise//

const cart = ['pants', 'shirt', 'jacket'];
const promise = createCart(cart);

promise.then(function(orderId){
  console.log('Promise is working', orderId)
})


//creation of promise//
function createCart(cart){
    const pr = new Promise(function(resolve,reject){
        
        function validateCart(){
            console.log("cart is validated")
        }
        if(!validateCart){
            const err = new Error ('cart not valid')
            reject(err)
        }
        const orderId ='123445'
        if(orderId){
            resolve(orderId)
        }
    })

   // the promise then gets returned to the corresponding variable//
   return pr
}
 
