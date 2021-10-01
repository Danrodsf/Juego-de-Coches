//Clase
class Coche {
    
    constructor(name, speed, distanceToGoal) {

        this.name = name,
            this.speed = speed,
            this.distanceToGoal = distanceToGoal
    }
}

// Variables 
let subaru = new Coche("subaru", 1.9, 1000);
let toyota = new Coche("toyota", 1.8, 1000);
let bmw = new Coche("bmw", 1.95, 1000);
let mercedes = new Coche("mercedes", 1.85, 1000);

let coche1 = "";
let coche2 = "";

let ganador = document.getElementById("winner");

//traductor
let traductor = {

    "subaru": subaru,
    "toyota": toyota,
    "bmw": bmw,
    "mercedes": mercedes

}

// Cambiar fases de juego
const organizer = (arg_O) => {

    let fasewant = "fase" + arg_O;
    let arrFases = ["fase1", "fase2", "fase3", "fase4"];

    arrFases = arrFases.filter(val => !fasewant.includes(val));

    document.getElementById(fasewant).style.display = "block";

    for (let _f of arrFases) {

        document.getElementById(_f).style.display = "none";
    }

}

//Selecionar Coche
const selectCar = (car) => {
    
    if (coche1 != "") {

        coche2 = traductor[car];
        console.log("el coche2 es", coche2)

        setTimeout(() => {

            organizer("3")
        },500)

    } else {

        coche1 = traductor[car];
        console.log("el coche1 es", coche1)

    }
}

//Acelerar coche1
const AcelerarCoche1 = () => {

    let random = Math.floor(Math.random() * (150 - 50) + 50);
    coche1.distanceToGoal -= parseInt(random * coche1.speed);

    if (coche1.distanceToGoal > 0) {

        console.log(coche1.distanceToGoal);

    } else {

        console.log(`El coche ${coche1} ha ganado`)
        setTimeout(() => {

            organizer("4")
        },500)

        ganador.innerHTML = `el Ganador es el ${coche1}`

    }
}

//Acelerar coche2
const AcelerarCoche2 = () => {

    let random = Math.floor(Math.random() * (150 - 50) + 50);
    coche2.distanceToGoal -= parseInt(random * coche2.speed);

    if (coche2.distanceToGoal > 0) {

        console.log(coche2.distanceToGoal);

    } else {

        console.log(`El coche ${coche2} ha ganado`)
        setTimeout(() => {
            
            organizer("4")
        },500)

        ganador.innerHTML =`el Ganador es el ${coche2}`

    }

}

//Boton de acelerar
const Acelerar = () => {     

    AcelerarCoche1();
    AcelerarCoche2();
}

const reset = () => {

    coche1 = "";
    coche2 = "";
    subaru.distanceToGoal = 1000;
    toyota.distanceToGoal = 1000;
    bmw.distanceToGoal = 1000;
    mercedes.distanceToGoal = 1000;
    organizer(1);

}