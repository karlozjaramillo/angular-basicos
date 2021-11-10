import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzservice: DbzService) {}

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000,
  };

  agregarNuevoPersonaje(event: Personaje): void {
    console.log(event);
    this.personajes.push(event);
  }
  // cambiarNombre(event: any): void {
  //   console.log(event);
  // }
}
