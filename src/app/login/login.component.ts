import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    console.warn(this.loginForm.value.email);
    // this.authService.SignIn(this.loginForm.value.email, this.loginForm.value.password);
  }

}
