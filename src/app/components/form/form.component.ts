import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {passwordStrengthValidator} from "./password-strength.validator";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  form = new FormGroup({
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8),
      passwordStrengthValidator()
    ])
  })

  get _password(): FormControl {
    return this.form.get('password') as FormControl
  }
}
