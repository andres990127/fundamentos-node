// Uso de las funcionaes Try-Catch 

function seRompe(){
    return 3 + z;
};

// Para funciones asincronas hacer el Try-Catch dentro de ellas, debido a que se ejecutan en un hilo difrente un Try-Catch fuera de la 
// función asincrona no detecta el error.
function seRompeAsync(callback){ 
    setTimeout(() =>{
        try{
            return 3 + z;
        } catch{
            console.log('Se ha roto en la función asincrona!');
            callback();
        }
        
    }, 1000);
}

try{
    //seRompe();
    seRompeAsync(()=>{
        console.log('Fin función asincrona');
    });
} catch(err){
    console.error('Vaya! Algo se ha roto :(');
    console.error(err.message);
    console.log('Pero no pasa nada, el error se ha capturado');
};

console.log('Esto de aquí esta al final');