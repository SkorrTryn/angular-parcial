import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent,HttpHeaders } from '@angular/common/http';
import { environment } from '../enviroment'
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlApi: string ="";
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) {
    this.urlApi = environment.apiUrl+'/api';
   }

   login(correo: string, contrasena: string) {
    return this.http.post<any>(`${this.urlApi}/auth/login`, { correo, contrasena })
      .pipe(
        tap(response => {
          localStorage.setItem(this.tokenKey, response.token);
        })
      );
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}
