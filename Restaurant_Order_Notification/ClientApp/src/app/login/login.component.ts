import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser, Role } from '../_models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.loginForm.value)
    let data = this.loginForm.value;
    let user: IUser = {
      username: data.username,
      Role: data.username.includes("admin") ? Role.Admin : Role.Customer
    }

    if (user.Role == 0) {
      this.router.navigate(['admin'])
    } else {
      this.router.navigate(['user'])
    }
  }

}
