const state = {
  loading: false,
  data: null,
  error: null
}

function retryFetchFunction(url, options = {}, retries = 3) {
  return new Promise((resolve, reject) => {
    function attempt(remaining) {
      fetch(url, options)
        .then((res) => {
          if (!res.ok) throw new Error("Could not get URl!");
          return res.json()
        })
        .then(resolve)
        .catch((err) => {
          if (remaining == 0) reject(err);
          else attempt(remaining - 1);
        });
    }
    attempt(retries)
  });
}

// same in async await 
/*
async function retryFetch(url, options = {}, retries = 3){
   try {
    const res = await fetch(url,options)
    if(!res.ok) throw new Error ('Could not get Url!')
    return res.json()

   } catch (err) {
    if(retries == 0) throw err

    return retryFetch(url, options, retries - 1)
   }
}
*/

// this will treat api call as failed if not done in the required given time//

function apiCallTimeout(promise, ms){
    const timeOutPromise = new Promise ((_, reject)=>{
        setTimeout(()=>{
            reject(new Error("Took too much time to load!"))
        }, ms)
    })

    return Promise.race([promise,timeOutPromise])
}

function createAPI(controller,userName){
    const options = {signal: controller.signal}

    function getAge(){
        return apiCallTimeout(retryFetchFunction(`https://api.agify.io/?name=${userName}`,options), 5000)
    }
    function getGender(){
        return apiCallTimeout(retryFetchFunction(`https://api.genderize.io/?name=${userName}`, options), 5000)
    }
    function getIPAdd(){
        return apiCallTimeout(retryFetchFunction("https://api.ipify.org/?format=json", options), 5000)
    }
    function getJoke(){
        return apiCallTimeout(retryFetchFunction("https://official-joke-api.appspot.com/random_joke", options), 5000)
    }

    return {getAge, getGender, getIPAdd, getJoke}
}

class Dashboard {
  constructor(render) {
    this.render = render;
    this.controller = null;
  }

  async load (userName){
    
    if(!userName) {
      state.error = 'name not specified'
      this.render()
      return
    }
    state.loading = true
    state.error = null
    this.render()

    //this doesnt work if the fetch is already successfull
    this.controller = new AbortController()
    const api = createAPI(this.controller, userName)

    try {
        const results = await Promise.allSettled([api.getAge(), api.getJoke(), api.getGender(), api.getIPAdd(),])
        state.data = results;

    } catch (error) {
        state.error = error
    }
    finally{
        state.loading = false
        this.render()
    }
  }

  cancel(){
    if (this.controller){
    this.controller.abort()
    state.loading = false
    state.error = "Request Cancelled"
    this.render()
    }
  }
}

function render(){
  if(state.loading){
    app.innerHTML = "<p>Loading...</p>"
    return
  }

  if(state.error){
    app.innerHTML = `<p>Error: ${state.error}</p>`
    return
  }

  if(state.data){
    const ageValue = state.data[0].value.age
    const jokeval = `${state.data[1].value.setup} - ${state.data[1].value.punchline}` 
    const genderval = state.data[2].value.gender
    const addval = state.data[3].value.ip


    age.innerHTML = ageValue
    joke.innerHTML = jokeval
    gender.innerHTML = genderval
    address.innerHTML = addval
  }
}

const dashboard = new Dashboard(render)
// ui part

const app = document.getElementById("app")
const input = document.getElementById("userName")
const getButton = document.getElementById('startBtn')
const cancelBtn = document.getElementById("cancelBtn")
const age = document.getElementById("age")
const joke = document.getElementById("joke")
const address = document.getElementById("address")
const gender = document.getElementById("gender")


getButton.addEventListener("click",(event)=>{
  event.preventDefault(); 
  console.log("button clicked")
  const name = input.value.trim()
  dashboard.load(name)
})

cancelBtn.addEventListener("click",(event)=>{
  event.preventDefault(); 
  dashboard.cancel()
})



