class Coche {
    constructor(name, speed, distanceToGoal) {
        this.name = name,
            this.speed = speed,
            this.distanceToGoal = distanceToGoal
    }
}

let random = Math.floor(Math.random() * (150 - 100) + 100); // Numero Azar entre 100 y 200
let random2 = Math.floor(Math.random() * (150 - 100) + 100);
let random3 = Math.floor(Math.random() * (150 - 100) + 100);
let random4 = Math.floor(Math.random() * (150 - 100) + 100);

let subaru = new Coche("Subaru", 200, 1000);
let toyota = new Coche("Toyota", 185, 1000);
let bmw = new Coche("Bmw", 200, 1000);
let mercedes = new Coche("Mercedes", 185, 1000);

let coche1 = "";
let coche2 = "";
let coche3 = "";
let coche4 = "";

let traductor = {
    "subaru": subaru,
    "toyota": toyota,
    "Bmw": bmw,
    "Mercedes": mercedes
}

const Acelerar1 = () => {
    subaru.distanceToGoal -= random;
    if (subaru.distanceToGoal >= 0) {
        console.log(subaru.distanceToGoal);
    } else {
        console.log("el coche subaru ha ganado")
    }
}

const Acelerar2 = () => {
    toyota.distanceToGoal -= random2;
    if (toyota.distanceToGoal >= 0) {
        console.log(toyota.distanceToGoal);
    } else {
        console.log("el coche toyota ha ganado")
    }
}

const Acelerar3 = () => {
    bmw.distanceToGoal -= random3;
    if (bmw.distanceToGoal >= 0) {
        console.log(bmw.distanceToGoal);
    } else {
        console.log("el coche Bmw ha ganado")
    }
}

const Acelerar4 = () => {
    mercedes.distanceToGoal -= random4;
    if (mercedes.distanceToGoal >= 0) {
        console.log(mercedes.distanceToGoal);
    } else {
        console.log("el coche Mercedes ha ganado")
    }
}

const Acelerar = () => {                           //Boton de acelerar
    Acelerar1();
    Acelerar2();
    Acelerar3();
    Acelerar4();
}

// const Acelerar = () => {           //Boton de acelerar
//     subaru.distanceToGoal -= random;
//     console.log(subaru.distanceToGoal);

//     toyota.distanceToGoal -= random2;
//     console.log(toyota.distanceToGoal);

//     bmw.distanceToGoal -= random3;
//     console.log(bmw.distanceToGoal);

//     mercedes.distanceToGoal -= random4;
//     console.log(mercedes.distanceToGoal);

//     if (subaru.distanceToGoal <= 0) {
//         console.log("El coche subaru ha ganado");

//     } else if (toyota.distanceToGoal <= 0) {
//         console.log("El coche toyota ha ganado");

//     } else if (bmw.distanceToGoal <= 0) {
//         console.log("El coche Bmw ha ganado");

//     } else if (mercedes.distanceToGoal <= 0) {
//         console.log("El coche Mercedes ha ganado");

//     } else {
//         console.log("continua la carrera");
//     }

// }

const organizer = (arg_O) => {

    let fasewant = "fase" + arg_O;
    let arrFases = ["fase1", "fase2", "fase3", "fase4", "fase5"];

    arrFases = arrFases.filter(val => !fasewant.includes(val));

    document.getElementById(fasewant).style.display = "block";

    for (let _f of arrFases) {
        document.getElementById(_f).style.display = "none";
    }
}

const selectCar = (car) => {

    if (coche1 != "") {
        coche2 = traductor[car]

        setTimeout(() => {
            organizer(3);
        }, 500)

    } else {
        coche1 = traductor[car]
    }
    console.log("el coche1 es", coche1)
}