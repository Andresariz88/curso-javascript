const button = document.querySelector(".button");
const container = document.querySelector(".container");
const greenContainer = document.querySelector(".greenContainer");
const input = document.querySelector(".input");

// button.addEventListener("click", saludar); // Los listener no sirven con funciones flecha

/* Mouse */

button.addEventListener("click", (e) => {
    console.log(e);
    alert("click");
})

container.addEventListener("dblclick", () => {
    alert("Doble click");
})

greenContainer.addEventListener("mouseover", () => {
    alert("Mouse over");
})

container.addEventListener("mouseout", () => {
    alert("Mouse out");
})

greenContainer.addEventListener("contextmenu", () => {
    alert("Context menu");
})

input.addEventListener("keypress", () => {
    console.log("Se presionó una tecla");
}) // keydown (solo presionar), keypress (presionar y soltar), keyup (soltar)



function saludar() {
    alert("hola");
}