let Meta = 1000;

class Coche {
    constructor(name, speed, distanceToGoal) {
        this.name = name,
            this.speed = speed,
            this.distanceToGoal = distanceToGoal
    }

    Advance() {         //Funcion Avanzar
        this.distanceToGoal += random;
    }
}

let subaru = new Coche("Subaru", 200, 0);
let toyota = new Coche("Toyota", 185, 0);


function Acelerar(car) {           //Boton de acelerar
    car.Advance();
    console.log(car.distanceToGoal);
}

function Acelerar2(car) {           //Boton de acelerar
    car.Advance();
    console.log(car.distanceToGoal);
}

let random = Math.floor(Math.random() * (200 - 100) + 100) // Numero Azar entre 100 y 200

Acelerar(subaru);
Acelerar2(toyota);

organizer = (arg_O) => {

    let fasewant = "fase" + arg_O;
    let arrFases = ["fase1", "fase2", "fase3", "fase4", "fase5"];

    arrFases = arrFases.filter(val => !fasewant.includes(val));

    document.getElementById(fasewant).style.display = "block";

    for (let _f of arrFases) {
        document.getElementById(_f).style.display = "none";
    }
}