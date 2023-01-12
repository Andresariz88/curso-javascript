const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre, modelo, precio) {
    img = "<img class='llave-img' src='img/llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img, nombre, modelo, precio];
}

let documentFragment = document.createDocumentFragment();

for (let i = 0; i < 20; i++) {
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`Llave ${i}`, `Modelo ${modeloRandom}`, precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click", ()=>{
        document.querySelector(".key-data").value = modeloRandom; // Cambia el valor del input escondido del HTML dependiendo de la llave seleccionada
    });
    div.tabIndex = i;
    div.classList.add(`item-${i}`, 'flex-item');
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);