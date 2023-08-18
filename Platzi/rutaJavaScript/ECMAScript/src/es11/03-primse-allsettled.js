const promise1 = new Promise((resolve, reject) => {reject("Rechazar elemento")})
const promise2 = new Promise((resolve, reject) => {resolve("Resolver elemento 1")})
const promise3 = new Promise((resolve, reject) => {resolve("Resolver elemento 2")})

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))
