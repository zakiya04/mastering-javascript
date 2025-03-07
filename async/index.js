//now we will create our own promise//

const cart = ['pants', 'shirt', 'jacket'];
const promise = createCart(cart);

promise.then(function(orderId){
  console.log('Promise is working', orderId);
  return orderId
})
.then(function(orderId){
  return  proceedtoPayment(orderId) //returns a promise//
})
.then(function(paymentInfo){
  console.log(paymentInfo)
})
//this part handles the rejection part and gives a callback regarding that//
.catch(function(err){
    console.log(err.message)
 })


//creation of promise//
function createCart(cart){
    const pr = new Promise(function(resolve,reject){
        
        function validateCart(cart){
            return true
        }
        if(!validateCart(cart)){
            const err = new Error ('cart not valid')
            reject(err)
        }
        const orderId ='123445'
        //for the purpose of delay//
        // till then the promise will be pending//
        if(orderId){
            setTimeout(function(){
                resolve(orderId)
            },5000)
        }
    })

   // the promise then gets returned to the corresponding variable//
   return pr
}

function proceedtoPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve('Payment Successful!')
    })
}
