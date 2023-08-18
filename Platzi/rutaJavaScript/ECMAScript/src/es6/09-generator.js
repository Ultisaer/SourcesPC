function* iterate(array)  {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(["Oscar", "Alexa", "David", "Gerlis"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); 

const foo = function*() {
    yield 'a';
    yield 'b';
    yield 'c';
  };
  
  let str = '';
  for (const val of foo()) {
    str = str + val;
  }
  
  console.log(str);
  console.log(str);
  console.log(str);
  // Expected output: "abc"
  
//  Por ejemplo, si tienes un generador que incluye la línea yield function(), cada vez que llames a .next() en ese generador, ejecutará la función y te devolverá su resultado.

function* generator() {
  yield function() { return "Hello, world!"; };
}

const gen = generator();
console.log(gen.next().value());  // Imprime "Hello, world!"
//Del mismo modo, si tienes un generador que incluye la línea yield ++index, cada vez que llames a .next() en ese generador, incrementará index en 1 y te devolverá el nuevo valor.

function* generator() {
  let index = 0;
  while (true) {
    yield ++index;
  }
}

const ge2n = generator();
console.log(gen2.next().value);  // Imprime 1
console.log(gen2.next().value);  // Imprime 2
// Finalmente, si tienes un generador que produce los elementos de un array, puedes usar .next() para recorrer esos elementos uno por uno. javascript

function* generator() {
  const array = [1, 2, 3, 4, 5];
  for (let value of array) {
    yield value;
  }
}

const gen3 = generator();
console.log(gen3.next().value);  // Imprime 1
console.log(gen3.next().value);  // Imprime 2

//Así que sí, tu entendimiento de los generadores y de cómo se utiliza yield es correcto!