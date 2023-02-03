import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

interface IPasswordStrengthError {
  easy: boolean,
  medium: boolean
}

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {

    const value = control.value;

    if (!value) {
      return null;
    }

    const strong = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})").test(value);

    const medium = new RegExp("^(((?=.*[a-zA-Z])(?=.*[0-9]))|((?=.*[a-zA-Z])(?=.*[!@#\$%\^&\*]))|((?=.*[!@#\$%\^&\*])(?=.*[0-9])))(?=.{8,})").test(value);

    const easy = new RegExp("^((?=.*[a-zA-Z])|(?=.*[0-9])|(?=.*[!@#\$%\^&\*]))(?=.{8,})").test(value);

    return !strong
      ? {passwordStrength: {medium, easy}}
      : null;
  }
}
