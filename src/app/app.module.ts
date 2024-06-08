import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReferenciaInmuebleComponent } from './ReferenciaInmueble/referencia-inmueble.component';
import { CabeceraComponent } from './Cabecera/cabecera.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearvisitaComponent } from './CrearVisita/crearvisita.component';
import { OfertainmuebleComponent } from './OfertaInmueble/ofertainmueble.component';
import { CrearinmuebleComponent } from './CrearInmueble/crearinmueble.component';
import { LoginComponent } from './Login/login.component';
import { AuthInterceptor } from './auth';
import { MainComponent } from './Main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ReferenciaInmuebleComponent,
    CabeceraComponent,
    CrearvisitaComponent,
    OfertainmuebleComponent,
    CrearinmuebleComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
