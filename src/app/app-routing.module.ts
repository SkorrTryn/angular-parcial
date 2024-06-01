import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferenciaInmuebleComponent } from './ReferenciaInmueble/referencia-inmueble.component';
import { CrearvisitaComponent } from './CrearVisita/crearvisita.component';

const routes: Routes = [
  {path: 'inmueble', component: ReferenciaInmuebleComponent},
  {path: 'visita', component: CrearvisitaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
