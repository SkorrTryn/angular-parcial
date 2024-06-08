import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './Servicio/usuario.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private usuarioService: UsuarioService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.usuarioService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          "x-token": `${token}`
        }
      });
    }
    return next.handle(request);
  }
}
