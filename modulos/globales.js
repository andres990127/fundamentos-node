// Documentación servicios "Globals" que se pueden llamar https://nodejs.org/dist/latest-v16.x/docs/api/globals.html

let i = 0;

// Servicio global "setInterval"
let intervalo = setInterval(()=>{
    console.log('Hola');
    if( i === 3){
        clearInterval(intervalo);
    };
    i++;
},1000);

// Servicio global "setImmediate"
setImmediate(()=>{
    console.log('Hola1')
});

// Variables globales
global.miVariable = 'elValor';
console.log(miVariable);