// Seleccionar coche

const selectCar = (car) => {
    
    if (coche1 != "") {
        coche2 = traductor[car];
        console.log("el coche2 es", coche2)
    } else if (coche2 != "") {
        coche3 = traductor[car];
        console.log("el coche3 es", coche3)
    } else if (coche3 != "") {
        coche4 = traductor[car];
        console.log("el coche4 es", coche4)
    } else {
        coche1 = traductor[car];
        console.log("el coche1 es", coche1)
    }
    console.log(coche1,coche2,coche3,coche4);
}

// boton acelerar UNICO

const Acelerar = () => {           //Boton de acelerar
    subaru.distanceToGoal -= random;
    console.log(subaru.distanceToGoal);

    toyota.distanceToGoal -= random2;
    console.log(toyota.distanceToGoal);

    bmw.distanceToGoal -= random3;
    console.log(bmw.distanceToGoal);

    mercedes.distanceToGoal -= random4;
    console.log(mercedes.distanceToGoal);

    if (subaru.distanceToGoal <= 0) {
        console.log("El coche subaru ha ganado");

    } else if (toyota.distanceToGoal <= 0) {
        console.log("El coche toyota ha ganado");

    } else if (bmw.distanceToGoal <= 0) {
        console.log("El coche Bmw ha ganado");

    } else if (mercedes.distanceToGoal <= 0) {
        console.log("El coche Mercedes ha ganado");

    } else {
        console.log("continua la carrera");
    }

}

// BOTON ACELERAR CON FUNCIONES INDIVIDUALES

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