let googleURL = "https://google.com";
// let ventana = window.open(googleURL); // Abre una ventana, la guarda en la variable
// ventana.close();
// alert("Hola!");
// print("Print"); // Abre la ventada de impresón
// prompt("Dame un dato"); // Input que devuelve un String siempre
// res = window.confirm("¿Estás seguro?"); // Pide confirmación, guarda True o False

const screen = window.screen;
const screenLeft = window.screenLeft; // Distancia horizontal entre el borde izq de la ventana y el borde izq de la pantalla
const screenTop = window.screenTop; // Distancia vertical entre el borde superior de la ventana y el borde superior de la pantalla

const scrollX = window.scrollX; // Devuelve el número de píxeles que el documento se desplazó horizontalmente en el momento
const scrollY = window.scrollY; // Devuelve el número de píxeles que el documento se desplazó verticalmente en el momento
window.scroll(10, 10); // Desplaza la ventana a un lugar particular del documento

console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.pathname);
console.log(window.location.protocol);
console.log(window.location.assign); // Carga otro documento

