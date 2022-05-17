// Un buffer es un espacio de memoria (en la memoria ram), en el que se almacenan datos de manera temporal. 
// Es la forma mas cruda en la que se pueden almacenar los datos. (Se guardan en bytes y no se especifica el tipo de dato).

// Se crean espacios en memoria
//let buffer = Buffer.alloc(4); 

// Se guarda información en el buffer
// let buffer = Buffer.from([1,2,5]);

// Se guarda información en el buffer
//let buffer = Buffer.from('Hola');

// Se imprime la forma en como se guarda en el buffer
//console.log(buffer);

// Se imprime de forma legible
//console.log(buffer.toString());

//..

// Procedemos a crear 26 espacios en memoria para las letras del abecedario
let abc = Buffer.alloc(26); 

// Asignamos a cada posición del buffer una letra del abecedario
for (let i = 0; i < 26; i++){
    abc[i] = i + 97;
}

// Se imprime la forma en como se guarda en el buffer
console.log(abc);

// Se imprime de forma legible
console.log(abc.toString());
