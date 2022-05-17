// Podemos buscar paquetes en https://www.npmjs.com/
// Los instalamos con "npm install is-odd" por ejemplo
// Al instalar el paquete nos crea en el "package.json" una dependencia a este paquete

const isOdd = require('is-odd');

// Verificamos si es impar
console.log(isOdd(3));