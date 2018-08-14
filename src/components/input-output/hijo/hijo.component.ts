import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: 'hijo.component.html',
  styleUrls: ['hijo.component.scss']
})

export class HijoComponent {

  contador2: number;

  @Input()
  contadorHijo: number;

  @Output()
  enviarContador: EventEmitter<number> = new EventEmitter();

  constructor() {}

  aumentarHijo() {
    // Codigo
    let contador;
    contador = this.contadorHijo += 1;
    // console.log('mi contador: ', contador);
    this.enviarContador.emit(contador);
  }

  restarHijo() {
    // Codigo
    this.contador2 = this.contadorHijo -= 1;
    // console.log('mi contador: ', contador);
    this.enviarContador.emit(this.contador2);
  }

  getReset(evento: number): void {
    console.log('Get reset valor', evento);
    this.enviarContador.emit(evento);
  }
}
