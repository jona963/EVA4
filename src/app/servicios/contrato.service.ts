import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor(private servContrato: HttpClient) { }

  guardarContrato(data:any): Observable<any>{
    return this.servContrato.post('http://localhost:3000/contratos', data)
  }

  actualizarContrato(id:number, data:any): Observable<any>{
    return this.servContrato.put(`http://localhost:3000/contratos/${id}`, data)
  }

  listaContrato(): Observable <any>{
    return this.servContrato.get('http://localhost:3000/contratos')
  }
  eliminarContrato(id: number): Observable<any>{
    return this.servContrato.delete(`http://localhost:3000/contratos/${id}`);
  }
/*************************************************************************** */
  guardarSolicitud(data:any): Observable<any>{
    return this.servContrato.post('http://localhost:3000/solicitudes', data)
  }

  actualizarSolicitud(id:number, data:any): Observable<any>{
    return this.servContrato.put(`http://localhost:3000/solicitudes/${id}`, data)
  }

  listaSolicitud(): Observable <any>{
    return this.servContrato.get('http://localhost:3000/solicitudes')
  }
  eliminarSolicitud(id: number): Observable<any>{
    return this.servContrato.delete(`http://localhost:3000/solicitudes/${id}`);
  }
 
}
