export class Solicitud {
    id: number;
    tipo: string;
    titulo: string;
    descripcion: string;
    
  
    constructor(id: number, tipo: string, titulo: string, descripcion: string) {
      this.id = id;
      this.tipo = tipo;
      this.titulo = titulo;
      this.descripcion = descripcion;
      
    }
  }
  