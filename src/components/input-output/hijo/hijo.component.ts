import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: 'hijo.component.html',
  styleUrls: ['hijo.component.scss']
})

export class HijoComponent {

  @Input()
  contadorHijo: number;

  constructor() {}

  aumentarHijo() {
    // Codigo
  }

  restarHijo() {
    // Codigo
  }
}
