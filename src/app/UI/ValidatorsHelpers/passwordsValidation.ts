import { FormGroup } from '@angular/forms';

export class PasswordsValidation {

  public static check(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true };
  }
}
