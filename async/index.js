const api = 'some api';
const data = fetch(api);
// this will retun a promise with nothing in it mening that it will be an empty object with value undefined first//
// but after the api is fteched, the data variable will have an object with data//
console.log(data);

// the promise here will be in pending state and when we see inside the state will be fulfilled//
//because js is single threaded, it will console log first and then change the state//