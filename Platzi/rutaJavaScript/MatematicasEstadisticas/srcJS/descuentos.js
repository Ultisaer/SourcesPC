const inputPrice = document.querySelector("#price");
const inputDiscount = document.querySelector("#discount");
const btn = document.querySelector("#calc");
const pResult = document.querySelector("#result");


btn.addEventListener("click", calcularPrecioConDescuento);

const cuponesDescuento = {
    ASWIHAS : 50,
    JULASJK : 10,
    LIKAYSQ : 20,
    DASDWEL : 30,
    LJUISAS : 15,
}
function calcularPrecioConDescuento() {
    const price = Number(inputPrice.value);
    const discount = inputDiscount.value;

    if (!price) {
        pResult.innerText = "Por favor ingrese el precio del producto";
        return;
    }
    if (discount === "") {
        pResult.innerText = `El precio del producto seleccionado es : $${price}`
    } else {
        let cuponValido = false;  // Añadir una variable para rastrear si se ha encontrado un cupón válido
        for (let cupon in cuponesDescuento) {
            if (cupon == discount) {
                cuponValido = true;  // Marcar que se ha encontrado un cupón válido
                const newPrice = (price * (100 - cuponesDescuento[cupon])) / 100;
                pResult.innerText = `El precio del producto seleccionado con el descuento es : $${newPrice}`
                break;  // Salir del bucle tan pronto como se encuentre una coincidencia
            }
        }
        // Verificar después del bucle si se ha encontrado un cupón válido
        if (!cuponValido) {
            pResult.innerText = `El cupón ingresado no es válido, el precio se mantiene en : $${price}`;
        }
    }
}
