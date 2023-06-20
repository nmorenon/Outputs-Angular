import { Component, Input } from '@angular/core';
import { PersonajeInt } from '../interfaces/model';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  @Input () personajes!:PersonajeInt[]

}
