import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent,HttpHeaders } from '@angular/common/http';
import { environment } from '../enviroment'
import { Observable, catchError, map, throwError } from 'rxjs';
import { Inmueble } from '../inmueble';
import { Visita } from '../inmueble';
@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  private urlApi: string ="";

  constructor(private http: HttpClient) {
    this.urlApi = environment.apiUrl+'/api';
   }

   getInmueble(referencia: string): Observable<Inmueble> {
    return this.http.get<Inmueble>(this.urlApi + '/inmuebles/' + referencia)
   }

   getInmueblePorOferta(tipo: string, modoOferta: string): Observable<Inmueble> {
    return this.http.get<Inmueble>(this.urlApi + '/inmuebles/' + '?tipo=' + tipo + '&modoOferta=' + modoOferta)
   }

   createInmueble(inmueble: Inmueble): Observable<Inmueble> {
    return this.http.post<Inmueble>(`${this.urlApi}/inmuebles/crear`, inmueble).pipe(
      map((response: any )=> response.inmueble as Inmueble),
      catchError(e => {
        if (e.status === 400) {
          return throwError(() => new Error('Bad Request'));
        }
        if (e.error?.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e.message));
      })
    );
  }

   createVisita(visita: Visita, inmueble: string): Observable<Visita> {
    return this.http.post<Visita>(`${this.urlApi}/inmuebles/visitas/${inmueble}`, visita).pipe(
      map((response: any )=> response.visita as Visita),
      catchError(e => {
        if (e.status === 400) {
          return throwError(() => new Error('Bad Request'));
        }
        if (e.error?.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e.message));
      })
    );
  }

}
