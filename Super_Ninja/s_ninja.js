class Ninja {
    constructor (nombre, salud, velocidad, fuerza){
        this.nombre = nombre;
        this.salud = salud||50;
        this.velocidad = velocidad || 3;
        this.fuerza = fuerza || 3;
    }
    sayName(){
        console.log(this.nombre);
    }
    showStats(){
        console.log('Nombre: '+ this.nombre,'Salud: '+  this.salud,'Velocidad: '+  this.velocidad,'fuerza: '+  this.fuerza);
    }
    drinkSake(){
        this.salud += 10;
    }
}

class Sensei extends Ninja {
    constructor(nombre, salud, velocidad, fuerza, sabiduria){
        super(nombre, salud, velocidad, fuerza, sabiduria);
        this.sabiduria = sabiduria ||10;
        this.salud = salud ||200;
        this.velocidad = velocidad||10;
        this.fuerza = fuerza||10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log('Lo que un programador puede hacer en un mes, dos pueden hacer en dos meses');
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();