const os = require('os');

// Imprime arquitectura
console.log(os.arch());

// Imprime plataforma
console.log(os.platform());

// Información de las CPU
console.log(os.cpus());

// Cuantos cores tengo: [Cuantos procesos de node puedo tener corriendo:]
console.log(os.cpus().length);

// Errores y prioridades
console.log(os.constants);

// Memoria libre en bytes
console.log(os.freemem());

// Total de memoria
console.log(os.totalmem());

// Directorio raíz
console.log(os.homedir());

// Directorio de archivos temporales
console.log(os.tmpdir());

// Nombre del host de la maquina
console.log(os.hostname());

// Interfaces de red
console.log(os.networkInterfaces());