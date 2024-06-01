import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent,HttpHeaders } from '@angular/common/http';
import { environment } from '../enviroment'
import { Observable, catchError, map, throwError } from 'rxjs';
import { Inmueble } from '../inmueble';

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

}
