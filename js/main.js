//Clase
class Coche {

    constructor(name, speed,) {

        this.name = name,
            this.speed = speed,
            this.distanciaInicial = 0

    }

}

// Variables 
const meta = 1000;

let c1 = new Coche("Incendio", 1.9);
let c2 = new Coche("Trueno", 1.8);
let c3 = new Coche("Terremoto", 1.95);
let c4 = new Coche("Tsunami", 1.85);
let c5 = new Coche("Tormenta", 1.75);
let c6 = new Coche("Helada", 1.92);
let c7 = new Coche("Maremoto", 1.60);
let c8 = new Coche("Avalancha", 1.65);

let coche1 = "";
let coche2 = "";

let ganador = document.getElementById("winner");

//traductor
let traductor = {

    "1": c1,
    "2": c2,
    "3": c3,
    "4": c4,
    "5": c5,
    "6": c6,
    "7": c7,
    "8": c8

}

//Función para Cambiar fases de juego
const organizer = (arg_O) => {

    let fasewant = "fase" + arg_O;
    let arrFases = ["fase1", "fase2", "fase3", "fase4"];

    arrFases = arrFases.filter(val => !fasewant.includes(val));

    document.getElementById(fasewant).style.display = "block";

    for (let _f of arrFases) {

        document.getElementById(_f).style.display = "none";
    }

}
//Función para Descripcion de coches
const descripcion = (arg_O) => {

    let fasewant = "desc" + arg_O;
    let arrFases = ["desc1", "desc2", "desc3", "desc4", "desc5", "desc6", "desc7", "desc8"];

    arrFases = arrFases.filter(val => !fasewant.includes(val));

    document.getElementById(fasewant).style.display = "block";

    for (let _f of arrFases) {

        document.getElementById(_f).style.display = "none";
    }

}

//Función para Selecionar Coche
const selectCar = (car) => {

    if (coche1 != "") {

        coche2 = traductor[car];
        console.log("el coche2 es", coche2)

        setTimeout(() => {

            organizer("3")
        }, 500)

    } else {

        coche1 = traductor[car];
        console.log("el coche1 es", coche1)

    }
}

//Función para Acelerar coche1
const AcelerarCoche1 = () => {
    let random = Math.floor(Math.random() * (150 - 50) + 50);
    coche1.distanciaInicial += parseInt(random * coche1.speed);
    console.log(coche1.distanciaInicial);
}

//Función para Acelerar coche2
const AcelerarCoche2 = () => {
    let random = Math.floor(Math.random() * (150 - 50) + 50);
    coche2.distanciaInicial += parseInt(random * coche2.speed);
    console.log(coche2.distanciaInicial);
}

//Función para verificar si la distancia de alguno ha pasado de 1000, y luego compara ambas distancias y declarar ganador al coche con mas distancia.
const winner = () => {

    if (coche1.distanciaInicial < 1000 && coche2.distanciaInicial < 1000) {

        console.log("la carrera continua");

    } else {

        if (coche1.distanciaInicial > coche2.distanciaInicial && coche2.distanciaInicial < coche1.distanciaInicial) {

            console.log(`El ganador es ${coche1.name}`);
            setTimeout(() => {

                organizer("4");
            }, 500);
            ganador.innerHTML = `El ganador es ${coche1.name}`;

        } else {

            console.log(`El ganador es ${coche2.name}`);
            setTimeout(() => {

                organizer("4");
            }, 500);
            ganador.innerHTML = `El ganador es ${coche2.name}`;

        }
    }
}

//Función para Acelerar ambos coches a la vez.
const Acelerar = () => {

    AcelerarCoche1();

    AcelerarCoche2();

    winner();

}

//Función que Reinicia las variables y el Juego.
const reset = () => {
    coche1.distanciaInicial = 0;
    coche2.distanciaInicial = 0;
    coche1 = "";
    coche2 = "";
    organizer(1);

}