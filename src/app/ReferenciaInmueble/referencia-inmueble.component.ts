import { Component } from '@angular/core';
import { Inmueble } from '../inmueble';
import { InmuebleService } from '../Servicio/inmueble.service';
@Component({
  selector: 'app-referencia-inmueble',
  templateUrl: './referencia-inmueble.component.html',
  styleUrls: ['./referencia-inmueble.component.css']
})
export class ReferenciaInmuebleComponent {
  inmueble: Inmueble | null = null;;
  referencia!: string;

  constructor(private inmuebleService: InmuebleService) { }

  getInmueble(): void {
    this.inmueble=null;
    this.inmuebleService.getInmueble(this.referencia).subscribe((data: any) => {
      this.inmueble = data.inmueble;
    });
  }
}
