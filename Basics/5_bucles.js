let i = 0;
while (i < 5) {
    // ...
    i++;
}

// primero se ejecuta el código y despúes pregunta
i = 0;
do {
    // ...
    i++;
} while (i < 5);

// for
let arreglo = ["Andrés", 20, "Colombia"];
for (let j = 0; j < arreglo.length; j++) {
    const element = arreglo[j];  
    document.write(element);
}
document.write(`<br>`);

// for in (devuelve el indice)
let animales = ["gato", "perro", "ardilla"]
for (const animal in animales) {
    document.write(animales[animal]);
}
document.write(`<br>`);

// for of (devuelve el valor)
for (const animal of animales) {
    document.write(animal);
}