interface Funciones {
    servir(): void;
    preparar(): void;
}

export class Ingredientes {
    nombre: string;
    tipo: string;
    constructor(nombre: string, tipo: string) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
}

export class Comida implements Funciones {
    ingredientes: string[] = [];
    constructor() {
    }
    añadirIngredientes(value: string[]): void {
        this.ingredientes = value;
    }
    servir(): void {
    }
    preparar(): void {
    }
}