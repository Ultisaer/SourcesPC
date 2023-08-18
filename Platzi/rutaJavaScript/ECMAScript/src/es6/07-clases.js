
class User {} // declarar
// const newUser = new User(); // Instancia de una clase

class user {
    // metodos
    greeting(){
        return "hello"
    }
    constructor()
    {
        console.log("Constructor")
    }
}
const Juana =  new user()

const gndx = new user()
console.log(gndx.greeting())
const beloper = new user()
console.log(gndx.greeting())

// constructo
class user {
    //constructo
    constructor(){
        console.log("New User")
    }
    greeting(){
        return "hello"
    }
}

const Pedro = new user()

// this / Elemento padre que lo contiene
class user {
    constructor (name){
        this.name = name
    }
    // metodos
    speak(){
        return "Hello"
    }
    greeting(){
        return `${this.speak()} ${this.name} `
    }
}

const ana = new user("Ana")
console.log(ana.greeting())

// setters getters

class user {
    // constructo
    constructor(name, age){
        this.name = name
        this.age = age
    }
    // metodos
    speak(){
        return "Helo"
    }
    greeting(){
        return `${this.speak()} ${this.name} `
    }
    
    get uAge(){
        return this.age
    }
    set uAge(n) {
        this.age = n
    }
}

const raul = new user("Raul", 32)
console.log(raul.uAge)
console.log(raul.uAge = 26)
