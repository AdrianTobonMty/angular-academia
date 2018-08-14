import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: 'nieto.component.html',
  styleUrls: ['nieto.component.scss']
})

export class NietoComponent {

  @Input()
  contadorNieto: number;

  @Output()
  resetEvent: EventEmitter<number> = new EventEmitter();

  reset(): void {
    this.resetEvent.emit(10);
  }

}
