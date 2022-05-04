// Modulo de "Console"

// Recibe cualquier tipo y lo muestra en el consola.
console.log('Algo');

// Es equivalente a log pero es usado para informar.
console.info('Info');

// Es equivalente a log pero es usado para errores.
console.error('Error');

// Es equivalente a log pero es usado para warning.
console.warn('Advertencia');

var tabla = [{
    a: 1,
    b: 'Z'
},{
    a: 2,
    b: 'Otra',
    c: '21'
}]

// Muestra una tabla a partir de un objeto.
console.table(tabla);

// Permite agrupar errores mediante identación.
console.group('Conversación');
console.log('Hola');
console.log('BlaBlaBla');
console.log('BlaBlaBla');
console.log('Adios');
console.groupEnd('Conversación'); // Finaliza la agrupación.

// Inicia un contador autoincremental.
console.count('Veces');
console.count('Veces');
console.count('Veces');
console.countReset('Veces'); // Reinicia el contador a 0.
console.count('Veces');
