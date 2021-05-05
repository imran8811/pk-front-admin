import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { IUserLogin } from 'src/app/models/auth.model';
import { AuthService } from "../../services/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email : ["", Validators.required],
    password: ["", Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {}

  login = async() => {
    const data = {
      email : this.loginForm.get('email')?.value,
      password : this.loginForm.get('password')?.value
    }
    const response = await this.authService.userLogin(data) as IUserLogin;
    console.log(response);
  }

}
