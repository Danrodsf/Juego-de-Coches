let Meta = 1000;

class Coche {
    constructor(name, maxspeed) {
        this.name = name,
            this.maxspeed = maxspeed
    }

    Advance() {         //Funcion Avanzar
        Meta -= Avanza;
    }
}

let subaru = new Coche("Subaru", 200);
let Toyota = new Coche("Toyota", 185);


function Acelerar(eleccion) {           //Boton de acelerar
    document.getElementById(eleccion)
    subaru.Advance();
    console.log(Meta)
}

let Avanza = Math.floor(Math.random() * (200 - 100) + 100) // Numero Azar entre 100 y 200