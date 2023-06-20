import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { SerieComponent } from './serie/serie.component';
import { NuevoPersonajeComponent } from './nuevo-personaje/nuevo-personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    SerieComponent,
    NuevoPersonajeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
