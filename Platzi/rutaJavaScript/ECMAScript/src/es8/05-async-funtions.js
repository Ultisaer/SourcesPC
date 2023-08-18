const fnAsyng = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("AsynC!!"), 500 )
        : reject(new Error("Error!"));
    })
}

const anotherFn = async() => {
    const something = await fnAsyng();
    console.log(something)
    console.log("Hola")
}

console.log("Before")
anotherFn()
console.log("After")