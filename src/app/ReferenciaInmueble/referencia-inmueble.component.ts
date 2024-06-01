import { Component } from '@angular/core';
import { Inmueble } from '../inmueble';
import { InmuebleService } from '../Servicio/inmueble.service';
@Component({
  selector: 'app-referencia-inmueble',
  templateUrl: './referencia-inmueble.component.html',
  styleUrls: ['./referencia-inmueble.component.css']
})
export class ReferenciaInmuebleComponent {
  inmueble!: Inmueble;
  referencia!: string;

  constructor(private inmuebleService: InmuebleService) { }

  getInmueble(): void {
    this.inmuebleService.getInmueble(this.referencia).subscribe(response => {
      this.inmueble = response
      console.log(this.inmueble); 
    })
  }
}
