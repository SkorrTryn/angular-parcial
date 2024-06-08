import { Component } from '@angular/core';
import { UsuarioService } from '../Servicio/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  isAuthenticated(): boolean {
    return this.usuarioService.isLoggedIn();
  }

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['/login']);
  }
}
