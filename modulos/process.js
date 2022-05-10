//const p = require('process'); // <-- Ya se encuentra en el módulo global y no es necesario importarlo

// Ejecuta todo antes de que termine el proceso
process.on('beforeExit',()=>{
    console.log('El proceso va a terminar');
});

// Ejecuta todo antes de que se acabe el proceso entero de node [Ya se ha desconectado del eventLoop]
process.on('exit',()=>{
    console.log('El proceso acabó');
    setTimeout(()=>{
        console.log('No se ve porque ya salimos del eventLoop');
    },0);
});

// Para capturar un error que se produzca fuera de un try-catch [Al colocar este código no estalla la ejecución]
process.on('uncaughtException',(err, origen)=>{
    console.error('Se nos olvidó capturar un error');
});
funcionQueNoExiste(); // Error programado





