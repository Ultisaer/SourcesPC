// enahced object literals

function newUser (user, age, country,uId = 87 ) {
    return {
        user: user, //forma antigua
        age,        //forma nueva
        country,    // cuando el objeto regresado es el mismo que se llama no es necesario nombrarlo
        id: uId     //Cuando el objeto nombrado es diferente al llamado si se aplica la logica antigua
    }
}
console.log(newUser('XXXX', 30, 'CO'))