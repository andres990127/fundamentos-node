// Creamos una función asincrona que estalle en el proceso de ejecución
function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z; // Insertamos error
      callback(null, a);
    } catch (e) {
      callback(e, null);
    }
  }, 1000);
}

// Al llamar a la funcion asincrona procuramos atrapar cualquier error con un condicional al inicio como en el siguiente ejemplo:
asincrona((err, data) => {
    if (err) {
        console.error("Tenemos un error");
        console.error(err);
        return false;
        //throw err; // No funciona con funciones asincronas
    }
    console.log("Todo ha ido bien");
});
