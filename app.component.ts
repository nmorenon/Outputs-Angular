import { Component } from '@angular/core';
import { PersonajeInt } from './interfaces/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'output';
  personajes: PersonajeInt [] = [
    {
      nombre: "Goku",
      descripcion: "Goku es el protagonista del manga y anime Dragon Ball. Es un guerrero Saiyan que lucha para proteger la Tierra de amenazas extraterrestres.",
            img: "https://i.pinimg.com/564x/75/6e/c2/756ec289275fc6a8a932f8773bea86c2.jpg"
    },
    {
      nombre: "Luffy",
      descripcion: "Luffy es el capitán de los Piratas del Sombrero de Paja en el manga y anime One Piece. Tiene habilidades de estiramiento gracias a comer la Fruta del Diablo.",
        img: "https://i.pinimg.com/564x/5a/2f/c5/5a2fc562e3a9494cbaff0641531d3a63.jpg"
    },
    {
      nombre: "Naruto Uzumaki",
      descripcion: "Naruto es el protagonista del manga y anime Naruto. Es un ninja adolescente con el sueño de convertirse en el Hokage, el líder de su aldea.",
        img:"https://i.pinimg.com/564x/e6/22/28/e6222886fdc2dc2b847284232e03ba74.jpg"
    },
    {
      nombre: "Ichigo Kurosaki",
      descripcion: "Ichigo Kurosaki es el protagonista del manga y anime Bleach. Es un joven que se convierte en Shinigami, un dios de la muerte, y protege a los vivos de los espíritus malignos.",
        img: "https://i.pinimg.com/564x/c6/eb/aa/c6ebaa0cefc079108c642a16a3116ede.jpg"
    }
  ]

addNewPersonaje = (personaje:PersonajeInt) => {
  this.personajes.push(personaje)

}

}
