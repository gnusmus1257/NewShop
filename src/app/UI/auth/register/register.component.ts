import { PasswordsValidation } from '../../ValidatorsHelpers/passwordsValidation';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/Models/User';
import { Constants } from 'src/app/Models/Constants';
import { AuthService } from 'src/app/Services/AuthService';
import { DefaultErrorStateMatcher } from '../../ValidatorsHelpers/defaultErrorStateMatcher';
import { PasswordsErrorStateMatcher } from '../../ValidatorsHelpers/passwordsErrorStateMatcher';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public user: User;
  public defaultMatcher;
  public passwordMatcher;
  public constants = Constants;
  public confirmPassword: string;

  private formBuilder = new FormBuilder();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = new User('', '');
    this.registerForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(Constants.minValidationLength),
        Validators.maxLength(Constants.maxValidationLength)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(Constants.minValidationLength),
        Validators.maxLength(Constants.maxValidationLength)
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.minLength(Constants.minValidationLength),
        Validators.maxLength(Constants.maxValidationLength)
      ]]
    }, {
        validators: PasswordsValidation.check
      });
    this.defaultMatcher = new DefaultErrorStateMatcher();
    this.passwordMatcher = new PasswordsErrorStateMatcher();
  }

  onRegister() {
    if (this.registerForm.valid) {
      const isRegistered = this.authService.register(this.user);
      console.log(isRegistered);
    } else {
      console.log(JSON.stringify(this.registerForm.errors));
    }
  }

}
