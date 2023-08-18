(() => {
  const prices = [1,2,3,4,5,6, 'hola', true];

  //lo que no puedo hacer
  // prices.push('jkgdsakjgd');
  // prices.push(true);
  // prices.push({});

  prices.push(12313131);
  let products = ['hola', true];
  products.push(false);

  //para escribir booleans, numbers y strings hay que hacerlo de forma explicita
  //se puede usar | objecta y acepta arrays y objetos pero para eso hay un modulo más adelante
  const mixed: (number | string | boolean)[] = ['hola', true];
  //ahora si me deja ingresar números
  mixed.push(12);

  let numbers = [1,2,3,4,5,6,7,8];
  numbers.map(item => item * 2);
  console.log(numbers);
})();
