// Instalamos el modulo bcrypt con "npm i bcrypt"

// Importamos el modulo bcrypt
const bcrypt = require('bcrypt');

// Definimos una constraseña a encriptar
const password = '1234Segura!';

// Con bcrypt.hash podemos enviar la contraseña, el numero de iteraciones y nos devuelve un callback con la contraseña ya encriptada
bcrypt.hash(password, 5, (err, hash)=>{
    console.log(hash); // Imprimimos la contraseña encriptada

    bcrypt.compare(password, hash, (err, res)=>{ // Comparamos si la contraseña encriptada coincide con la contraseña antes de ser encriptada
        console.log(res); // Imprimimos la respuesta de la comparación
    });
});