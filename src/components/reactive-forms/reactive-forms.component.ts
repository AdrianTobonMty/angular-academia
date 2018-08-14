import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: 'reactive-forms.component.html',
  styleUrls: ['reactive-forms.component.scss']
})

export class ReactiveFormsComponent {

  formAcademia: FormGroup;

  constructor(private fb: FormBuilder) {

    this.formAcademia = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['']
    });
  }

  get nameIsInvalid() {
    return this.formAcademia.get('nombre').invalid && this.formAcademia.touched;
  }

  enviarForm() {
    alert(JSON.stringify(this.formAcademia.value));
  }

  resetForm() {
    this.formAcademia.reset();
  }
}
