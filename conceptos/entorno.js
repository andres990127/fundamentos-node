// --------------------------------------------------------------------------------------------------------------------
// Instalamos Nodemon para ejecutar el archivo al guardar: https://nodemon.io/  ----- Solo para entornos de desarrollo
//              ----> Instalación: npm install -g nodemon 
//              ----> Correr nodemon: npx nodemon .\conceptos\entorno.js
// --------------------------------------------------------------------------------------------------------------------
// Instalamos PM2 para ejecutar el archivo al guardar: https://pm2.keymetrics.io/ ---- Solo para entornos de producción
//              ----> Instalación: npm install -g pm2
//              ----> Correr nodemon: pm2 start .\conceptos\entorno.js
// --------------------------------------------------------------------------------------------------------------------

let nombre = process.env.NOMBRE || 'Nombre_defecto'; // Para definir nuestra variable de entorno "NOMBRE" [powershell] se ejecuta: $env:NOMBRE="Andrés"
let web = process.env.WEB || 'No tengo web'; // Para definir nuestra variable de entorno "WEB" [powershell] se ejecuta: $env:WEB="loquesea.com"

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);