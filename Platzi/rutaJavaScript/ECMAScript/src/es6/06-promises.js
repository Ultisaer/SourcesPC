const anotherFunction = () => {
    return new Promise((resolve, reject)=>
    {
        if (false){
            resolve("Funciono")
        }else{
            reject("Ho Funciono")
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))

    const promise1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'uno');
      });
      
      const promise2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 200, 'dos');
      });
      
      promise1
        .then(result => {
          console.log(result); // 'uno'
          return promise2;
        })
        .then(result => {
          console.log(result); // 'dos'
        });
      