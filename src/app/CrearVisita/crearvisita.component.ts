import { Component } from '@angular/core';
import { Visita } from '../inmueble';
import { InmuebleService } from '../Servicio/inmueble.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crearvisita',
  templateUrl: './crearvisita.component.html',
  styleUrls: ['./crearvisita.component.css']
})
export class CrearvisitaComponent {

  inmueble!: string;
  referencia!: string
  visita: Visita = {
    clienteNombre: '',
    clienteTelefono: '',
    fecha: '',
    comentario: ''
  };
  errores: string[]=[]

constructor(private inmuebleService: InmuebleService, private router:Router, private activatedRouter: ActivatedRoute){ 
  
}

create(): void {
  
  this.inmuebleService.createVisita(this.visita, this.inmueble).subscribe({
    next: (visita: Visita) =>{
      this.router.navigate(["/"])
    },
    error: (err)=>{
      this.errores = err.error.errors as string [];
      console.log(err.error.errors);
    }
  })
}
}
