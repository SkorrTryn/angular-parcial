import { Component } from '@angular/core';
import { Inmueble } from '../inmueble';
import { InmuebleService } from '../Servicio/inmueble.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crearinmueble',
  templateUrl: './crearinmueble.component.html',
  styleUrls: ['./crearinmueble.component.css']
})
export class CrearinmuebleComponent {
  inmueble: Inmueble = {
    numeroReferencia: '',
    superficie: 0,
    direccionCompleta: '',
    tipo: '',
    precioVenta: 0,
    precioAlquiler: 0,
    modoOferta: '',
    nombrePropietario: '',
    telefonoPropietario: '',
    oficinaNombre: '',
  };
  errores: string[]=[]

  constructor(private inmuebleService: InmuebleService, private router:Router, private activatedRouter: ActivatedRoute){ 
  
  }

onSubmit(): void {
  console.log(this.inmueble);
  this.inmuebleService.createInmueble(this.inmueble).subscribe({
    next: (inmueble: Inmueble) =>{
      this.router.navigate(["/nuevo"])
    },
    error: (err)=>{
      this.errores = err.error.errors as string [];
      console.log(err.error.errors);
    }
  })
}
}
