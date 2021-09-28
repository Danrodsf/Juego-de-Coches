let Meta = 1000;

class Coche {
    constructor(name,maxspeed){
        this.name = name,
        this.maxspeed = maxspeed
    }
    Advance(){
        Meta -= this.maxspeed; 
    }
}

let subaru = new Coche("Subaru",200);

subaru.Advance();

console.log(Meta)


while(meta > 0){
    
}