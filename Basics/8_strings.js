let cadena = "andres";
let compra = "manzana, pera, arroz";

document.write(cadena.concat(" me llamo") + "<br>");
document.write(cadena.startsWith("a") + "<br>");
document.write(cadena.includes("nd") + "<br>");
document.write(cadena.indexOf("n") + "<br>");

document.write(compra.split(", ") + "<br>"); // splitea el string como le pidamos y devuelve un arreglo
document.write(cadena.substring(0, 3) + "<br>");
document.write(cadena.toLowerCase() + "<br>");
document.write(cadena.toUpperCase() + "<br>");
document.write(cadena.toString() + "<br>");
// cadena.trim();
// cadena.trimStart();
// cadena.trimEnd();