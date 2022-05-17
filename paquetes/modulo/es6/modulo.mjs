// Creamos nuestro modulo dummy [con estandar ECMASCRIPT 6] recreando uno que instalariamos con "npm install"

// Creamos una función
function saludar(){
    console.log('Hola mundo');
};

// Exportamos la función para que index.js lo pueda usar
// Adicionalmente exportamos un string 'prop1' para que index.js lo pueda usar
export default {
    saludar,
    prop1: 'Soy un modulo experimental'
};