// arrays destructuring

let fruits = ["Apple", "Banana", "Orange"];
let [a, , c] = fruits
console.log(a,c, fruits[1]);

//object destructuring

let user = { 
    username : "Oscar",
    age : 32,
}
let { username, age} = user
console.log(username, user.age);

// spread operator

let person = { name: "Oscar", age: 32}
let country = "MX"

let dara  = { id:1,...person, country}
console.log(dara);

// rest

function sum(num, ...values) {
    console.log(values)
    console.log(num + values[0])
    return num + values[0]
}
sum(1,2,3,4,5,6,7,8,9,10)
// el rest operator se usa para pasar un numero indefinido de argumentos a una funcion
// el valor num nace del primer elemento de la desesctruturacion por tanto ...values toma los demas

