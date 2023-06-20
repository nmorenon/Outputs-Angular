import { Component, EventEmitter, Output } from '@angular/core';
import { PersonajeInt } from '../interfaces/model';

@Component({
  selector: 'app-nuevo-personaje',
  templateUrl: './nuevo-personaje.component.html',
  styleUrls: ['./nuevo-personaje.component.css']
})
export class NuevoPersonajeComponent {
@Output () nuevoPersonaje= new EventEmitter ();
crearPersonaje=(newPersonaje:PersonajeInt)=>{
this.nuevoPersonaje.emit(newPersonaje)
}
}
