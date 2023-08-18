const promise1 = new Promise((resolve, reject) => {reject("Rechazar elemento")})
const promise2 = new Promise((resolve, reject) => {resolve("Resolver elemento 1")})
const promise3 = new Promise((resolve, reject) => {resolve("Resolver elemento 2")})


Promise.any([promise1, promise3, promise2]) // Responder la primera que se resuelve de forma satisfactoria
    .then(response => console.log(response))


Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))
