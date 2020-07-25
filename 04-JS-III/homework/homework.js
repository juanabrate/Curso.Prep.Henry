// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
    return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
    return array.slice(-1)[0];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
    return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
    for (var i = 0; i < array.length; i++) {
        array[i] += 1;
    }
    return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
    array.push(elemento);
    return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
    array.unshift(elemento);
    return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
    var str = ""
    for (var i = 0; i < (palabras.length - 1); i++) {
        str = str + palabras[i] + " ";
    }
    str = str + palabras[palabras.length - 1];
    return str;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
    for (var i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return true;
        }
    } return false;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
    todos_los_enteros = 0;
    for (var i = 0; i < numeros.length; i++) {
        todos_los_enteros += numeros[i];
    } return todos_los_enteros;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
    sumadenotas = 0;
    cantidad = 0;
    promedio = 0;
    for (var i = 0; i < resultadosTest.length; i++) {
        sumadenotas += resultadosTest[i];
        cantidad += 1;
    } promedio = sumadenotas / cantidad;
    return promedio;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
    var mayor = numeros[0];
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    } return mayor;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
    var cantidad = arguments.length;
    if (cantidad === 0) {
        return 0;
    }
    var producto = 1;
    for (var i = 0; i < arguments.length; i++) {
        producto *= arguments[i];
    }
    return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
