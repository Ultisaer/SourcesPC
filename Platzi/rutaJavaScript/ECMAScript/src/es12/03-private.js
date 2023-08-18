class user {
    // constructo
    constructor(name, age){
        this.name = name
        this.age = age
    }
    // metodos
    #speak(){
        return "Hello"
    }
    greeting(){
        return `${this.speak()} ${this.name} `
    }
    
    get #uAge(){
        return this.age
    }
    set #uAge(n) {
        this.age = n
    }
}

const raul = new user("Raul", 32)
console.log(raul.uAge)
console.log(raul.uAge = 26)

/*///////////////////*/
class  Car {
	milesDriven  =  0;

	drive(distance) {
		console.log(this); // Car { milesDriven: 0 } -> you can see the milesDriven variable in the this object
		this.milesDriven  +=  distance;
	}

	getMilesDriven() {
		console.log(this); // Car { milesDriven: 15 } -> you can see the milesDriven variable in the this object
		return  this.milesDriven;
	}
}
 
const  tesla  =  new  Car();
tesla.drive(15);
console.log(tesla.milesDriven); // 15 -> you can access directly to milesDriven variable
console.log(tesla.getMilesDriven()); // 15
/*///////////////////////////*/
class  Car {
	#milesDriven =  0;
	
	drive(distance) {
		console.log(this); // Car {} -> because milesDriven is a private variable
		this.#milesDriven +=  distance;
	}
	
	getMilesDriven() {
		console.log(this); // Car {} -> because milesDriven is a private variable
		return  this.#milesDriven;
	}
}

const  tesla2  =  new  Car();
tesla2.drive(15);
// console.log(tesla2.#milesDriven); // Error, Private field '#milesDriven'
console.log(tesla2.getMilesDriven()); // 15