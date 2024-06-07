import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferenciaInmuebleComponent } from './ReferenciaInmueble/referencia-inmueble.component';
import { CrearvisitaComponent } from './CrearVisita/crearvisita.component';
import { OfertainmuebleComponent } from './OfertaInmueble/ofertainmueble.component';
import { CrearinmuebleComponent } from './CrearInmueble/crearinmueble.component';

const routes: Routes = [
  {path: 'nuevo', component: CrearinmuebleComponent},
  {path: 'inmueble', component: ReferenciaInmuebleComponent},
  {path: 'visita', component: CrearvisitaComponent},
  {path: 'oferta', component: OfertainmuebleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
