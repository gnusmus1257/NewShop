import { Constants } from './../../../Models/Constants';
import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { User } from '../../../Models/User';
import { MyErrorStateMatcher } from '../../ValidatorsHelpers/MyErrorStateMathcher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public user: User;
  public matcher;

  private formBuilder = new FormBuilder();

  constructor() { }

  ngOnInit(): void {
    this.user = new User('', '');
    this.loginForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(Constants.minValidationLength),
        Validators.maxLength(Constants.maxValidationLength)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(Constants.minValidationLength),
        Validators.maxLength(Constants.maxValidationLength)
      ]]
    });
    this.matcher = new MyErrorStateMatcher();
  }

  onLogin() {

  }
}
