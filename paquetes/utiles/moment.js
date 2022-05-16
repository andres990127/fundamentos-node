// Instalamos el modulo moment con "npm i moment" para trabajar con todo lo que tenga que ver con fechas

// Importamos el modulo moment
const moment = require('moment');

// Instanciamos un objeto del tipo moment
let ahora = moment();

// Imprimimos la fecha actual
console.log(ahora.toString());

// Ajustamos al formato que deseemos ver la fecha
console.log(ahora.format('YYYY/MM/DD - HH:mm'));

// Ajustamos al formato que deseemos ver la fecha
console.log(ahora.format('YYYY/MM/DD - HH:mm'));