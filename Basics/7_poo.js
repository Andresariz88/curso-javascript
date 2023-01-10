class Perro {
    constructor(edad, color, nombre) {
        this.edad = edad;
        this.color = color;
        this.nombre = nombre;
    }

    static ladrar() {
        document.write("guau");
    }

    get getEdad() {
        return this.edad;
    }
    
    set setEdad(edad) {
        this.edad = edad;
    }
}

const otto = new Perro(8, "negro", "Otto");
document.write(otto.nombre + "<br>");
Perro.ladrar();

// /////////////////////////////////////////////////////////

class Beagle extends Perro {
    constructor(edad, color, nombre, enfermedad) {
        super(edad, color, nombre);
        this.enfermedad = enfermedad;
    }
}

const mariposa = new Beagle(10, "café", "Mariposa", "artritis");
document.write(mariposa.enfermedad + "<br>");

