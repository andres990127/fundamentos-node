const { exec, spawn } = require('child_process');

// Podemos ejecutar comandos windows
exec('dir',(err, stdout, sterr) => {
    if(err){
        console.error(err);
        return false;
    }
    console.log(stdout);
})

// Podemos ejecutar otros scripts
exec('node modulos/consola.js',(err, stdout, sterr) => {
    if(err){
        console.error(err);
        return false;
    }
    console.log(stdout);
})

//let proceso = spawn('dir');