import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  private handleError(error: any): Observable<never> {
    // Aquí puedes implementar el manejo de errores común para todas las peticiones
    console.error('Ha ocurrido un error:', error);
    return throwError('Error en la petición. Por favor, intenta nuevamente más tarde.');
  }

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(this.apiUrl + endpoint).pipe(
      catchError(this.handleError)
    );
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<T>(this.apiUrl + endpoint, data, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // Puedes agregar otros métodos como put, delete, etc., si los necesitas
}
