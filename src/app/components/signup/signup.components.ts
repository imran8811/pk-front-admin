import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})

export class SignupComponent implements OnInit {

  signUpForm: FormGroup;

  get form() { return this.signUpForm.controls; }

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      fullName : ['', Validators.required],
      businessName : ['', Validators.required],
      userEmail : ['', Validators.required],
      userPassword : ['', Validators.required]
    })
  }

  userSignup = () => {
    const data = this.signUpForm.value;
    const res = this.authService.userSignup(data);
    // if(res.message === 'success') {

    // }

  }

}
