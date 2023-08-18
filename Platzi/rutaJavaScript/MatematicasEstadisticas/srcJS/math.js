console.group('Cuadrado')


const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado ** 2

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
})

function calcularTriangulo(lado1, lado2, base, altura){
    return {perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2}
}

console.groupEnd('Cuadrado')

console.group('Triangulo')

const ladoTrianguloLado1 = 12;
const ladoTrianguloLado2 = 12;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTrianguloLado1 + ladoTrianguloLado2 + ladoTrianguloBase
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2

console.log({
    ladoTrianguloLado1,
    ladoTrianguloLado2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
})

function calcularCuadrado(lado){
    return {
        perimetro: lado * 4,
        area: lado ** 2
    }
}

console.groupEnd('Triangulo')

console.group('Circulo')

    const radioCirculo = 3;
    const diametroCirculo = radioCirculo * 2;
    const pi = Math.PI;

    const circunferenciaCirculo = diametroCirculo * pi;
    const areaCirculo = (radioCirculo ** 2) * pi;

    console.log({
        radioCirculo,
        diametroCirculo,
        pi,
        circunferenciaCirculo,
        areaCirculo
        
    }
    )

    function calcularCirculo(radio){
        const diametro = radio * 2;
        const radioAlCuadrado = Math.pow(radio, 2);
        return {
            circunferencia: diametro * pi,
            area: radioAlCuadrado * pi
        }
    }

    console.log(Math.PI.toFixed(3))

console.groupEnd('Circulo')

console.group('Triangulo Isosceles')

    function calculatAlturaTrianguloIsosceles(lado, base){
        if (lado == base){
            console.warn('No es un triangulo isosceles') ;
        } else {
            return Math.sqrt( (lado ** 2) - ((base ** 2) / 4));
        }    
    }

console.groupEnd('Triangulo Isosceles')

console.group('Triangulo Escaleno')

function calcularTriangulo(lado1, lado2, lado3){
    // Verificación de que los valores pueden formar un triángulo
    if (lado1 >= (lado2 + lado3) || lado2 >= (lado1 + lado3) || lado3 >= (lado1 + lado2)) {
        console.log("Los valores proporcionados no pueden formar un triángulo.");
        return;
    }

    const semiperimetro = (lado1 + lado2 + lado3) / 2;
    const S = semiperimetro;
    if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3)  // Validación de triángulo escaleno
    {
        const perimetroEscaleno = lado1 + lado2 + lado3;
        const area = parseInt(Math.sqrt(S * (S - lado1) * (S - lado2) * (S - lado3)));
        const altura = parseInt((2 * area) / lado1);

        console.log({
            perimetroEscaleno,
            area,
            altura,
        })
    } 
}
    
console.groupEnd('Triangulo Escaleno')