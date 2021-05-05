import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any;
  logged: boolean | undefined;

  constructor(public auth: AngularFireAuth, private router: Router) { }

  googleSignIn() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((result: { credential: any; user: any; }) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      this.user = result.user;
      this.logged = true;
      // ...
      this.router.navigate(['ask-help']);
      console.log(this.user);
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      window.alert(errorMessage);
    });
  }


  emailSignIn(email:string, password:string) {
    this.auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      this.user = userCredential.user;
      // ...
      this.logged = true;
      this.router.navigate(['ask-help']);
      console.log(this.user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(errorMessage);
    });
  }

  emailSignUp(email:string, password:string) {
    this.auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      this.user = userCredential.user;
      // ...
      this.logged = true;
      this.router.navigate(['ask-help']);
      console.log(this.user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      window.alert(errorMessage);
    });
  }


  logout() {
    this.auth.signOut().then(() => {
      // Sign-out successful.
      this.logged = false;
      this.router.navigate(['login']);
      this.user = null;
    }).catch((error) => {
      // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      window.alert(errorMessage);
    });
  }
}
