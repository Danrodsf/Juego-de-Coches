//Clase
class Coche {

    constructor(nombre, aceleracion, control) {

        this.nombre = nombre,
            this.aceleracion = aceleracion,
            this.control = control,
            this.distanciaRecorrida = 0

    }

}

// Variables 
let c1 = new Coche("Incendio", 1.9, 6);
let c2 = new Coche("Trueno", 1.8, 7, 8);
let c3 = new Coche("Terremoto", 1.95, 5);
let c4 = new Coche("Tsunami", 1.85, 7);
let c5 = new Coche("Tormenta", 1.75, 8);
let c6 = new Coche("Helada", 1.92, 6);
let c7 = new Coche("Maremoto", 1.60, 10);
let c8 = new Coche("Avalancha", 1.65, 9);

const meta = 1000;

let coche1 = "";
let coche2 = "";

let ganador = document.getElementById("winner");
let champion = document.getElementById("champ");
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
    let gif = "img/" + arg_O + ".gif"
    let select = traductor[arg_O]
    let descripcion = document.getElementById(fasewant)

    arrFases = arrFases.filter(val => !fasewant.includes(val));

    descripcion.style.display = "block";
    descripcion.innerHTML = `<div>Nombre: ${select.nombre}</br>Velocidad: ${select.aceleracion}</br>Manejo: ${select.control}</div><img src="${gif}">`

    for (let _f of arrFases) {

        document.getElementById(_f).style.display = "none";
    }

}

//Función para Selecionar Coche
const selectCar = (car) => {

    let btn = "btn" + car;
    let cocheElegido = document.getElementById(car);
    const lockCoche = () => {

        cocheElegido.classList.add("greyscale");
        document.getElementById(btn).disabled = 'true';
    }
    const unLockCoche = () => {

        cocheElegido.classList.remove("greyscale");
        document.getElementById(btn).disabled = 'false';
    }

    if (coche1 != "") {

        coche2 = traductor[car];
        console.log("el coche2 es", coche2)
        lockCoche();

        setTimeout(() => {

            organizer("3")
            unLockCoche();

        }, 1000)

    } else {

        coche1 = traductor[car];
        console.log("el coche1 es", coche1)
        lockCoche();

        setTimeout(() => {

            unLockCoche();

        }, 10000)

    }
    players();
}


// Funciones para mostrar visualmente la carrera
const players = () => {
    document.getElementById("racer1").innerHTML =
        `<div id="p1_car">
        <img src="img/${coche1.nombre}.png" alt="">
    </div>
    <div id="p1_data">
        <p>${coche1.nombre}</p>
        <p>${coche1.aceleracion}</p>
        <p>${coche1.control}</p>
        <p id="dist_recorrida1">${coche1.distanciaRecorrida}</p>
    </div >`
    document.getElementById("racer2").innerHTML =
        `<div id="p2_car">
        <img src="img/${coche2.nombre}.png" alt="">
    </div>
    <div id="p2_data">
        <p>${coche2.nombre}</p>
        <p>${coche2.aceleracion}</p>
        <p>${coche2.control}</p>
        <p id="dist_recorrida2">${coche2.distanciaRecorrida}</p>
    </div >`;
}

//Función para Acelerar coche1
const AcelerarCoche1 = () => {

    let random = Math.floor(Math.random() * (150 - 50) + 50);

    coche1.distanciaRecorrida += parseInt(random * coche1.aceleracion);

    console.log(coche1.distanciaRecorrida);
    document.getElementById("dist_recorrida1").innerHTML = coche1.distanciaRecorrida

}

//Función para Acelerar coche2
const AcelerarCoche2 = () => {

    let random = Math.floor(Math.random() * (150 - 50) + 50);

    coche2.distanciaRecorrida += parseInt(random * coche2.aceleracion);

    console.log(coche2.distanciaRecorrida);
    document.getElementById("dist_recorrida2").innerHTML = coche2.distanciaRecorrida

}

//Función para verificar si la distancia de alguno ha pasado de la meta, y luego compara ambas distancias y declarar ganador al coche con mas distancia.
const winner = () => {

    if (coche1.distanciaRecorrida < meta && coche2.distanciaRecorrida < meta) {

        console.log("la carrera continua");

    } else {

        if (coche1.distanciaRecorrida > coche2.distanciaRecorrida && coche2.distanciaRecorrida < coche1.distanciaRecorrida) {

            console.log(`El ganador es ${coche1.nombre}`);
            setTimeout(() => {

                organizer("4");

            }, 1000);

            ganador.innerHTML = `El ganador es ${coche1.nombre}!!!`;
            champion.innerHTML = `<img src="img/${coche1.nombre}.png"></img>`

        } else {

            console.log(`El ganador es ${coche2.nombre}`);
            setTimeout(() => {

                organizer("4");

            }, 1000);

            ganador.innerHTML = `El ganador es ${coche2.nombre}!!!`;
            champion.innerHTML = `<img src="img/${coche2.nombre}.png"></img>`

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
    coche1.distanciaRecorrida = 0;
    coche2.distanciaRecorrida = 0;
    coche1 = "";
    coche2 = "";
    organizer(1);

}