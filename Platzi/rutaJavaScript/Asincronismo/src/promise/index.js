// Promise Pendiente Cumplido Rechazada
const promise = new Promise((resolve, reject) => {
    resolve('Hey!')
})

const cows = 9;
function element (cowsCount){
    const countCows = new Promise ((resolve, reject) => {
        if (cowsCount > 10)
        {
            resolve(`We have ${cowsCount} cows on the farm`)
        } else {
            reject('There is no cows on the farm')
        }
    })
    
    countCows.then((result) => { 
        console.log(result)
    }).catch((error)=> {
        console.log(error)
    }).finally(() => console.log('Finally'))
}
element(11)

export function delay(time, message) {
    return new Promise((resolve, reject) => {
      if (time != null) {
        window.setTimeout(() => {
          resolve(message);
        }, time);
      } else {
        reject("Elemento no encontrado");
      }
    });
  }

  delay(2000, "Hola Mundo")
  .then((result) => {
    console.log(result);  // Esto imprimirá "Hola Mundo" después de 2 segundos.
  })
  .catch((error) => {
    console.error(error);  // Esto imprimirá "Elemento no encontrado" si time es null.
  });

  