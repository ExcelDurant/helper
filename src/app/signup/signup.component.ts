import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    telephone: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  signup() {
    const firstName = this.signupForm.value.firstName;
    const lastName = this.signupForm.value.lastName;
    const displayName = firstName+' '+ lastName;
    const telephone = this.signupForm.value.telephone;
    const email = this.signupForm.value.email;
    const pass = this.signupForm.value.password;
    const confirmPass = this.signupForm.value.confirmPassword;
    if(pass == confirmPass) {
      console.log('passwords are identical');
      console.log(this.signupForm.value);
      this.authService.emailSignUp(email, confirmPass, firstName, telephone);
    } else {
      console.log('passwords are not identical');
      window.alert('passwords are not identical');
    }
    console.log(this.signupForm.value.password);
  }

}
