/* Twilight Racing
Version: 1.0
Autor: Daniel Rodriguez
*/

//Clase
class Coche {

    constructor(nombre, aceleracion, control) {

        this.nombre = nombre,
            this.aceleracion = aceleracion,
            this.control = control,
            this.distanciaRecorrida = 0,
            this.partidasGanadas = 0

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

let coche1 = ""; //jugador 1
let coche2 = ""; //jugador 2

let ganador = document.getElementById("ganador");
let campeon = document.getElementById("campeon");

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

//------------------------ Función para cambiar fases de juego ------------------------//
const capas = (num) => {

    let faseSolicitada = "fase" + num;
    let arrayFases = ["fase1", "fase2", "fase3", "fase4"];

    arrayFases = arrayFases.filter(val => !faseSolicitada.includes(val));

    document.getElementById(faseSolicitada).style.display = "block";

    for (let _f of arrayFases) {

        document.getElementById(_f).style.display = "none";
    }

}

//------------------------ Función para descripción de coches ------------------------//
const descripcion = (num) => {

    let faseSolicitada = "desc" + num;
    let arrayFases = ["desc1", "desc2", "desc3", "desc4", "desc5", "desc6", "desc7", "desc8"];
    let gif = "img/" + num + ".gif";
    let seleccion = traductor[num];
    let descripcion = document.getElementById(faseSolicitada);

    arrayFases = arrayFases.filter(val => !faseSolicitada.includes(val));

    descripcion.style.display = "block";
    descripcion.innerHTML = `<p>Nombre: ${seleccion.nombre}</br>Velocidad: ${seleccion.aceleracion}</br>Manejo: ${seleccion.control}</p><img class="gif" src="${gif}">`;

    for (let _f of arrayFases) {

        document.getElementById(_f).style.display = "none";
    }

}

//------------------------Función para seleccionar Coche ------------------------//
const selectCar = (car) => {

    let btn = "btn" + car;
    let cocheElegido = document.getElementById(car);
    const bloqCoche = () => {

        cocheElegido.classList.add("greyscale");
        document.getElementById(btn).disabled = 'true';
    }
    const desbloqCoche = () => {

        cocheElegido.classList.remove("greyscale");
        document.getElementById(btn).disabled = 'false';
    }

    if (coche1 != "") {

        coche2 = traductor[car];
        console.log("el coche2 es", coche2);
        bloqCoche();

        setTimeout(() => {

            capas("3");
            desbloqCoche();
            jugadores();
        }, 1000);

    } else {

        coche1 = traductor[car];
        console.log("el coche1 es", coche1);
        bloqCoche();

        setTimeout(() => {

            desbloqCoche();

        }, 10000);

    }

}

//------------------------ Funciones para mostrar visualmente la carrera ------------------------//
const jugadores = () => {
    document.getElementById("race_cont").innerHTML =
        `
        <div id="racer1">
            <div id="p1_car">
                <img src="img/${coche1.nombre}.png" alt="">
            </div>
            <div id="p1_data">
                <p>Coche: ${coche1.nombre}</p>
                <p>Aceleracion: ${coche1.aceleracion}</p>
                <p>Control: ${coche1.control}</p>
                <p id="dist_recorrida1">Distancia Recorrida: ${coche1.distanciaRecorrida}</p>
                <p id="partidas1">Partidas Ganadas: ${coche1.partidasGanadas}
            </div >
        </div>
        <div id="race">
            <img id="car1" src="img/${coche1.nombre}_r.png" alt="">
            <img id="car2" src="img/${coche2.nombre}_r.png" alt="">
        </div>
        <div id="racer2">
            <div id="p2_car">
                <img src="img/${coche2.nombre}.png" alt="">
            </div>
            <div id="p2_data">
                <p>Coche: ${coche2.nombre}</p>
                <p>Aceleracion: ${coche2.aceleracion}</p>
                <p>Control: ${coche2.control}</p>
                <p id="dist_recorrida2">Distancia Recorrida: ${coche2.distanciaRecorrida}</p>
                <p id="partidas2">Partidas Ganadas: ${coche2.partidasGanadas}
            </div >
        </div>
        `;
}

//------------------------ Función para acelerar coche1 ------------------------//
const AcelerarCoche1 = () => {

    let random = Math.floor(Math.random() * (25 - 10) + 10);

    coche1.distanciaRecorrida += parseInt((random * coche1.aceleracion) + (random * coche1.control));

    console.log(coche1.distanciaRecorrida);
    document.getElementById("dist_recorrida1").innerHTML = `Distancia Recorrida: ${coche1.distanciaRecorrida}`;
    document.getElementById("car1").style.bottom = coche1.distanciaRecorrida / 1.3 + -900 + "px";

}

//------------------------ Función para acelerar coche2 ------------------------//
const AcelerarCoche2 = () => {

    let random = Math.floor(Math.random() * (25 - 10) + 10);

    coche2.distanciaRecorrida += parseInt((random * coche1.aceleracion) + (random * coche1.control));

    console.log(coche2.distanciaRecorrida);
    document.getElementById("dist_recorrida2").innerHTML = `Distancia Recorrida: ${coche2.distanciaRecorrida}`;
    document.getElementById("car2").style.bottom = coche2.distanciaRecorrida / 1.3 + -900 + "px";

}
//------------------------ Función para aplicar siguiente partida ------------------------//
// (Básicamente Reinicia los valores sin pasar a la siguiente Fase del juego) //
const siguientePartida = () => {
    coche1.distanciaRecorrida = 0;
    coche2.distanciaRecorrida = 0;
    document.getElementById("car1").style.bottom = "-850px";
    document.getElementById("car2").style.bottom = "-850px";
    document.getElementById("partidas1").innerHTML = `Partidas Ganadas: ${coche1.partidasGanadas}`;
    document.getElementById("partidas2").innerHTML = `Partidas Ganadas: ${coche2.partidasGanadas}`;
}

//------------------------ Función para verificar el ganador ------------------------//
//Verifica si la distancia de alguno ha pasado de la meta, y luego compara ambas distancias y declarar 
//ganador al coche con más distancia. //
// Adicionalmente verifica si el ganador ya tiene más de 3 partidas ganadas para así pasar a la siguiente
// fase, de lo contrario, le aumenta en 1 las partidas ganadas. // 

const comparar = () => {

    if (coche1.distanciaRecorrida < meta && coche2.distanciaRecorrida < meta) {

        console.log("la carrera continua");

    } else {

        if (coche1.distanciaRecorrida > coche2.distanciaRecorrida && coche2.distanciaRecorrida < coche1.distanciaRecorrida) {

            console.log(`El ganador es ${coche1.nombre}`);
            coche1.partidasGanadas++;

            if (coche1.partidasGanadas < 3) {

                setTimeout(() => {

                    siguientePartida();

                }, 500);

            } else {

                setTimeout(() => {

                    capas("4");

                }, 1000);

                ganador.innerHTML = `El ganador es ${coche1.nombre}!!!`;
                campeon.innerHTML = `<img src="img/${coche1.nombre}.png"></img>`;
            }

        } else {

            console.log(`El ganador es ${coche2.nombre}`);
            coche2.partidasGanadas++;

            if (coche2.partidasGanadas < 3) {

                setTimeout(() => {

                    siguientePartida();

                }, 500);

            } else {
                setTimeout(() => {

                    capas("4");

                }, 1000);

                ganador.innerHTML = `El ganador es ${coche2.nombre}!!!`;
                campeon.innerHTML = `<img src="img/${coche2.nombre}.png"></img>`;
            }
        }
    }
}

//------------------------ Función para Acelerar ambos coches a la vez. ------------------------//
const Acelerar = () => {

    AcelerarCoche1();

    AcelerarCoche2();

    comparar();

}

//------------------------ Función que Reinicia las variables y el Juego. ------------------------//
const reset = () => {
    coche1.distanciaRecorrida = 0;
    coche2.distanciaRecorrida = 0;
    coche1.partidasGanadas = 0;
    coche2.partidasGanadas = 0;
    document.getElementById("car1").style.bottom = "-850px";
    document.getElementById("car2").style.bottom = "-850px";
    coche1 = "";
    coche2 = "";
    capas(1);

}