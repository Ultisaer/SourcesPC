
function eleccion(jugada){
    let  resultado = "";
    if(jugada == 1){	
        resultado = "Piedra" 
    } else if(jugada == 2) {
        resultado = "Papel" 
    } else if(jugada == 3) {
        resultado = "Tijera"
    } else {
        resultado = "¡???!"
    }
    return resultado
}

// 1 piedra, 2 papel, 3 tijera

let player = 0;
let pc = 0
let triunfos = 0;
let perdidas = 0;
let mensaje = "";
while (triunfos < 3 && perdidas < 3) {

    pc = Math.floor(((Math.random()/4)*10)+1);
    player = prompt("Elige: 1 Piedra, 2 Papel, 3 Tijera");

    // COMBATE

    alert("PC elige: " + eleccion(pc))
    alert("TU eliges: " + eleccion(player))

    if (pc == player) {
        alert("Empate")
    } else if (player == 1 & pc == 3 || player == 2 & pc == 1 || player == 3 & pc == 2) {
        alert("Ganaste mi bro")
        triunfos =  (triunfos + 1);
    } else {
        alert("Che perdiste mi bro")
        perdidas = (perdidas + 1);
    }

}
if (triunfos > perdidas){
    mensaje = "felicidades mi bro ganaste";
    } else {
        mensaje = "f mi bro perdiste";
    }

alert("Che " + mensaje + " con " + triunfos + " triunfos y " + perdidas + " perdidas")

