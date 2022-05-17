// Benchmark => prueba de rendimiento o comparativa en inglés

// Declaramos una variable para acumular información
let suma = 0;

// Inicializamos el cronometro
console.time('Bucle');

// Hacemos una suma 'n' veces
for(let i = 0; i < (10); i++){
    suma += 1;
    console.log('Vuelta:' + i);
};

// Paramos el cronometro y visualizamos el tiempo tardado
console.timeEnd('Bucle');

//...

// Inicializamos el cronometro
console.time('Asincrono');

asincrona()
    .then(()=>{
        console.timeEnd('Asincrono');// Paramos el cronometro y visualizamos el tiempo tardado
    })


function asincrona(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log('Termina el proceso asíncrono');
            res();
        });
    });
};

