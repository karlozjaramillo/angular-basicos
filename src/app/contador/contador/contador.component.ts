import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>
      La base es <strong>{{ base }}</strong>
    </h3>

    <button (click)="operar(base)">+{{ base }}</button>
    <span> {{ numero }} </span>
    <button (click)="operar(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
  titulo = 'Contador App';
  numero = 10;
  base = 5;

  operar(valor: number): void {
    this.numero += valor;
  }
}
