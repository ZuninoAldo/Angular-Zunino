import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-alumnos',
  standalone: false,
  templateUrl: './formulario-alumnos.component.html',
  styleUrl: './formulario-alumnos.component.css'
})
export class FormularioAlumnosComponent {
  public formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      name: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.minLength(2), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      message: ['', [Validators.minLength(10), Validators.required]],
    })
  }

  submit() {
    console.log(this.formulario.value);

    if (this.formulario.valid) {
      alert('Formulario enviado correctamente');
      this.formulario.reset();
    } else {
      alert('Formulario inválido. Por favor, revise los campos.');
    }

  }

  get name() {
    return this.formulario.get('name');
  }

  get isNameInvalid() {
    return this.name?.touched && this.name?.invalid;
  }

  get lastName() {
    return this.formulario.get('lastName');
  }

  get islastNameInvalid() {
    return this.lastName?.touched && this.lastName?.invalid;
  }

  get email() {
    return this.formulario.get('email');
  }

  get isEmailInvalid() {
    return this.email?.touched && this.email?.invalid;
  }

  get message() {
    return this.formulario.get('message');
  }

  get isMessageInvalid() {
    return this.message?.touched && this.message?.invalid;
  }

}
