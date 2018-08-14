import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: 'padre.component.html',
  styleUrls: ['padre.component.scss']
})

export class PadreComponent {

  contador: number;

  constructor() {

    this.contador = 10;
  }

  aumentar(): void {
    this.contador += 1;
  }

  restar(): void {
    this.contador -= 1;
  }

}
