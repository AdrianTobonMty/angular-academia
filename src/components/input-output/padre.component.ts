import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: 'padre.component.html',
  styleUrls: ['padre.component.scss']
})

export class PadreComponent implements OnInit {

  contador: number;
  cadena: string;

  constructor() {

    this.cadena = 'Texto prueba';
    this.contador = 10;
    console.log('contador: ', this.contador);
  }

  ngOnInit() {
    console.log('oninit');
  }

  aumentar(): void {
    this.contador += 1;
  }

  restar(): void {
    this.contador -= 1;
  }

}
