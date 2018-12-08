import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/Models/User';
import { Constants } from 'src/app/Models/Constants';
import { AuthService } from 'src/app/Services/AuthService';
import { MyErrorStateMatcher } from '../../ValidatorsHelpers/MyErrorStateMathcher';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public user: User;
  public matcher;
  public constants = Constants;

  private formBuilder = new FormBuilder();

  constructor(/*private authService: AuthService*/) { }

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
    });
    this.matcher = new MyErrorStateMatcher();
  }

  onRegister() {
    if (this.registerForm.valid) {
      // const isLogged = this.authService.login(this.user);
      // console.log(isLogged);
    }
  }

}
