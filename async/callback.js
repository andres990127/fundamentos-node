function hola(nombre, miCallback){
    setTimeout(() =>{
        console.log('Hola '+nombre);
        miCallback();
    }, 1500)
}

function adios(nombre, otroCallback){
    setTimeout(() =>{
        console.log('Adios '+nombre);
        otroCallback();
    }, 1000)
}

// console.log('Iniciando proceso...')
// hola('Andres',()=>{
//     adios('Andres',()=>{
//         console.log('Terminando proceso')
//     });
// });
// console.log('Terminando proceso...')

// Aquí hay un problema, porque hola se demora más y por ende en la consola aparece que primero se despide.
hola('Carlos', () =>{})
adios('Carlos', () =>{})

// Para arreglar esto enviamos la función "adios" en el callback de la función "hola" para asegurarnos de que solo se ejecute cuando "hola" halla finalizado
hola('Carlos', () =>{adios('Carlos', () =>{})})
