//document.getElementById("parrafo"); // Obtener un elemento HTML por ID
//document.querySelector("#parrafo"); //Obtener un elemento HTML por el selector CSS especificado
//document.querySelectorAll(".parrafo"); //Obtener un elementos HTML por el selector CSS especificado

const parrafo = document.querySelector(".rango");
parrafo.setAttribute("type", "range"); // modifica un atributo del elemento HTML
//parrafo.getAttribute("type");
parrafo.removeAttribute("type");

document.write("<br>");
document.write(parrafo.className + "<br>");
document.write(parrafo.value + "<br>");
document.write(parrafo.type + "<br>"); // Se pueden modificar desde el objeto mismo (parrafo.type = "range")

let resultado = parrafo.textContent; // texto dentro de la etiqueta

const contenedor = document.querySelector(".contenedor");
const lista = document.createElement("LI");
const item = document.createTextNode("Soy un item");
lista.appendChild(item);
contenedor.appendChild(lista);


