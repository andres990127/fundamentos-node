async function hola(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            console.log('Hola '+nombre);
            resolve(nombre);
            reject('Hay un error');
        }, 1500);
    });
}

async function hablar(nombre){
    return new Promise( (resolve, reject)=>{
        setTimeout(() =>{
            console.log('Bla bla bla bla');
            resolve(nombre);
        }, 1000);
    });
}

async function adios(nombre){
    return new Promise( (resolve,reject)=>{
        setTimeout(() =>{
            console.log('Adios '+nombre);
            resolve();
        }, 1000);
    });
}

async function main(){
    let nombre = await hola('Andrés');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso');
};

console.log('Empezamos el proceso');
main();
console.log('Va a ser la segunda instrucción');


