// Servicios ofrecidos por el modulo "File System", entre ellas estan la lectura, escritura y eliminación de archivos

const fs = require('fs'); // Se importa el modulo de "File System"

function leer(ruta, callBack){
    fs.readFile(ruta,  (err, data)=>{
        callBack(data.toString());
    });
};

function escribir(ruta, contenido, callBack){
    fs.writeFile(ruta, contenido, (err)=>{
        if(err){
            console.error('No he podido escribirlo', err);
        }
        else{
            console.log('Se ha escrito correctamente');
        }
    })
}

function eliminar(ruta, callBack){
    fs.unlink(ruta, (err)=>{
        if(err){
            console.error('No he podido borrar', err);
        }
        else{
            console.log('Se ha borrado correctamente');
        }
    })
}

eliminar(__dirname + '/archivo1.txt', console.log)
//escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
//leer(__dirname + '/archivo.txt', console.log);