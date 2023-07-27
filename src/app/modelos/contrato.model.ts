export class Contrato {
    id: number;
    nombre: string;
    autor: string;
    contenido: string;
    
    constructor(id: number, nombre: string, autor: string, contenido: string){
        this.id= id,
        this.nombre= nombre,
        this.autor= autor,
        this.contenido= contenido
    }
}