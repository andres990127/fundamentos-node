// Creamos nuestro modulo dummy recreando uno que instalariamos con "npm install"

// Creamos una función
function saludar(){
    console.log('Hola mundo');
};

// Exportamos la función para que index.js lo pueda usar
// Adicionalmente exportamos un string 'prop1' para que index.js lo pueda usar
module.exports = {
    saludar,
    prop1: 'Hola que tal'
};