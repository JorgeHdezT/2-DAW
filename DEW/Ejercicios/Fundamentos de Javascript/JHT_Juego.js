// Clase para un Personaje
const razas = ['Pyxis', 'Musca', 'Lyris'];

class Personaje {
    constructor(nombre) {
        this.nombre = nombre;
        this.nivel_experiencia = 0;
        this.vida = 100; // Porcentaje de vida por defecto
        this.vida_max = 100;
        this.ataque = 5;
        this.defensa = 10;
        this.distancia_min = 0;
        this.distancia_max = 100;
        this.velocidad = 5;
        this._raza = null; // Raza se almacena en una propiedad privada
        this.equipamiento = [];
        this.fecha_nac = new Date();
        this.fecha_deceso = null;
    }

    // Setter para la propiedad raza
    setRaza(raza) {
        if (razas.includes(raza)) {
            this._raza = raza;
        } else {
            this._raza = "Undefined";
            //console.log("Raza no valida");
        }
    }

    // Getter para la propiedad raza
    getRaza() {
        return this._raza;
    }
}

// Clase para un Mago
class Mago extends Personaje {
    constructor(nombre) {
        super(nombre);
        this.setRaza("Pyxis");
        this.vida_max = 80;
        this.ataque = 20;
        this.defensa = 10;
        this.distancia_max = 10;
        this.velocidad = 5;
    }
}

// Clase para un Guerrero
class Guerrero extends Personaje {
    constructor(nombre) {
        super(nombre);
        this.setRaza("Penguin");
        this.vida_max = 100;
        this.ataque = 30;
        this.defensa = 20;
        this.distancia_max = 5;
        this.velocidad = 10;
    }
}

// Clase para un Arquero
class Arquero extends Personaje {
    constructor(nombre) {
        super(nombre);
        this.setRaza("Pyxis");
        this.vida_max = 80;
        this.ataque = 10;
        this.defensa = 10;
        this.distancia_min = 5;
        this.distancia_max = 20;
        this.velocidad = 5;
    }
}

// Crear instancias de personajes para la raza Pyxis
const merlin = new Mago("Merlin el mago");
const rufus = new Guerrero("Rufus el guerrero");
const antares = new Arquero("Antares la arquera");
const hache = new Guerrero("Hache el pingüino");

// Exportar las instancias de personajes
const personajes = [merlin, rufus, antares, hache];
