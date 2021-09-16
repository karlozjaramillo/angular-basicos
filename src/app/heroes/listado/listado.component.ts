import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Thor',
    'Hulk',
    'Capitán América',
  ];
  heroeBorrado: string;

  borrarHeroe(): string {
    this.heroeBorrado = this.heroes.shift();
    return this.heroeBorrado;
  }
}
