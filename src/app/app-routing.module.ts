import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferenciaInmuebleComponent } from './ReferenciaInmueble/referencia-inmueble.component';

const routes: Routes = [
  {path: 'inmueble', component: ReferenciaInmuebleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
