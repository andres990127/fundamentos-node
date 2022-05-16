// Instalamos el modulo sharp con "npm i sharp" para trabajar con todo lo que tenga que ver con imagenes

// Importamos el modulo sharp
const sharp = require('sharp');

// Ubicamos la imagen a trabajar
sharp('./original.png')
    .resize(80) // Le hacemos una ajuste de tamaño a 80px
    .grayscale() // Le asignamos colores blanco y negro
    .toFile('resized.png'); // Le asignamos el nombre del nuevo archivo después de las modificaciones