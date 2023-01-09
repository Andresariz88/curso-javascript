//alert("hola");
/* Lenguaje de tipado débil */
variable = "Andrés";
console.log(variable);
variable = 14;
console.log(variable);

/* var let const */
// var scope global
var nombre = "Andrés";
// let limita el scope al bloque de código donde se creó
let apellido;
apellido = "Ariza";
// const es una constante
const pi = 3;

let numero0 = 14, numero1 = 15;

console.log(nombre*apellido); //NaN (Not a Number)

/* Ingresar valores con el prompt */
let input = prompt("Ingresa un valor:");
console.log("Ingresaste: " + input);

/* Backticks */
let oracion = `Hola soy ${nombre}.`;
document.write(oracion);