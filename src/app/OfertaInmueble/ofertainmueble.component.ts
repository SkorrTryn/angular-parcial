import { Component } from '@angular/core';
import { Inmueble } from '../inmueble';
import { InmuebleService } from '../Servicio/inmueble.service';

@Component({
  selector: 'app-ofertainmueble',
  templateUrl: './ofertainmueble.component.html',
  styleUrls: ['./ofertainmueble.component.css']
})
export class OfertainmuebleComponent {
  filtros = {
    tipo: '',
    modoOferta: ''
  };
  inmuebles: Inmueble[]=[]

  constructor(private inmuebleService: InmuebleService) { }

  getInmueblesFiltrados(): void {
    this.inmuebles = []
    this.inmuebleService.getInmueblePorOferta(this.filtros.tipo, this.filtros.modoOferta).subscribe((data: any) => {
      this.inmuebles = data.inmuebles;
    });
  }
}
