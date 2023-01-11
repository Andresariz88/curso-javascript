let nombres = ["pedro", "maria", "jorge"];

/* Transformadores */
document.write(nombres.pop() + "<br>"); // Remueve el último del array y lo retorna
document.write(nombres.shift() + "<br>"); // Remueve el primero del array y lo retorna
document.write(nombres.push("andrés") + " - " + nombres + "<br>"); // Agrega un elemento al final del array y retorna la nueva longitud del arreglo
document.write(nombres + " - " + nombres.reverse() + "<br>"); // Invierte el orden y retorna
document.write(nombres.unshift("felipe", "jose") + " - " + nombres + "<br>"); // Agrega elementos al inicio del arreglo y retorna la nueva longitud
document.write(nombres.sort() + "<br>");
document.write(nombres.splice(1, 1) + "<br>"); // Remueve la cantidad de elementos especificada (B) a partir del inicio (A) dado, si se especifican (C, D...), agrega los elementos en la posición de inicio. Remueve los elementos removidos.

/* Accesores */
document.write("-----------------------------------" + "<br>");
document.write(nombres.join(", ") + "<br>"); // Retorna el arreglo como string separando los elementos con el separador especificado
document.write(nombres.slice(1, 3) + "<br>"); // Retorna el pedazo de arreglo especificado
// toString, indexOF, lastIndexOF, includes...

/* De repetición */
let numeros = [1, 2, 11, 15, 10, 4, 3]
document.write("-----------------------------------" + "<br>");
numeros.forEach((numero) => {
    document.write(numero + "<br>");
}); // Ejecutra la función para cada elemento (numero) del array
