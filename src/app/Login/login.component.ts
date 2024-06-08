import { Component } from '@angular/core';
import { UsuarioService } from '../Servicio/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario = {
    correo: '',
    contrasena: ''
  }

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  onSubmit(): void {
    this.usuarioService.login(this.usuario.correo, this.usuario.contrasena)
    .subscribe(
      () => {
        this.router.navigate(['/nuevo']);
      },
      error => {
        console.log(error);  
      }
    );
  }
}
