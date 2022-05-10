const http = require('http');

http.createServer(router).listen(3000);// Escuchamos desde el puerto 3000 del localhost

function router(req, res){
    console.log('Nueva petición!'); // Registramos nueva petición
    console.log(req.url); // Imprimimos la URL

    // Respondemos dependiendo de lo que nos envien en la URL
    switch(req.url){
        case '/hola':
            res.write('Hola, que tal'); // Respondemos al cliente
            res.end(); // Terminamos la respuesta
            break; // Salimos del switch
        
        default:
            res.write('Error 404: No se lo que quieres'); // Respondemos al cliente
            res.end(); // Terminamos la respuesta
    };

    // res.writeHead(201, {'Content-type': 'text/plain'}) // Respondemos al cliente
    
};

console.log('Escuchando http en el puerto 3000');