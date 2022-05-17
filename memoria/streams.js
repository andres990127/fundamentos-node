// Importamos el modulo de fileSystem para trabajar con documentos
const fs = require('fs');

// Importamos el modulo Stream
const stream = require('stream');

// Importamos el modulo Util
const util = require('util');


// Declaramos una variable para almacenar datos
let data = '';

// Creamos un objeto de tipo readableStream el cual va a obtener datos de un archivo
let readableStream = fs.createReadStream(__dirname + '/input.txt');

// Asignamos la codificación para que al momento de leer los datos no salga hexadecimal
readableStream.setEncoding('utf-8');

// Leemos los datos del archivo, puede ser un proceso lento dependiendo el tamaño del archivo
readableStream.on('data', (chunk)=>{
    data += chunk; // Vamos recolectando los datos obtenidos en la variable 'data'
});

// Cuando se finalice de leer el archivo imprimimos los datos recolectados
readableStream.on('end', ()=>{
    console.log(data);
});

// Escribe directamente en el buffer
// process.stdout.write('Hola');
// process.stdout.write('que');
// process.stdout.write('tal');

// Creación de Stream de transformación que puede leer y escribir
const Transform = stream.Transform;

function Mayus(){
    Transform.call(this);
};
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb){
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
};

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);