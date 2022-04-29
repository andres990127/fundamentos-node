function hola(nombre, miCallback){
    setTimeout(() =>{
        console.log('Hola '+nombre);
        miCallback();
    }, 1500)
}

function hablar(callbackHablar){
    setTimeout(() =>{
        console.log('Bla bla bla bla');
        callbackHablar();
    }, 1000)
}

function adios(nombre, otroCallback){
    setTimeout(() =>{
        console.log('Adios '+nombre);
        otroCallback();
    }, 1000)
}

// Callback Hell!!!
// console.log('Iniciando proceso...')
// hola('Andres',()=>{
//     hablar(()=>{
//         hablar(()=>{
//             hablar(()=>{
//                 adios('Andres',()=>{
//                     console.log('Terminando proceso')
//                 });
//             });
//         });
//     });
// });

// Resolución callback hell
function conversacion(nombre, veces, callback){
    if(veces > 0){
        hablar(()=>{
            conversacion(nombre, veces-1, ()=>{});
        })
    } else{
        adios(nombre, callback);
    }
};

hola('Andres',()=>{
    conversacion('Andres',3,()=>{
        console.log('Proceso terminado'); 
    });
});


