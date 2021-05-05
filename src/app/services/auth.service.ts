import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any;
  logged: boolean = (localStorage.getItem('logged') =="true") || false;

  constructor(public auth: AngularFireAuth, private router: Router) { 
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        this.user = user;
        // ...
        this.logged = true;
        localStorage.setItem('logged', JSON.stringify(this.logged));
      } else {
        // User is signed out
        // ...
        this.logged = false;
        this.user = null;
        localStorage.setItem('logged', JSON.stringify(this.logged));
      }
    });
  }

  

  // signing in or up with google
  googleSignIn() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((result: { credential: any; user: any; }) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      this.user = result.user;
      // changes loggedIn status
      this.logged = true;
      // ...
      // navigates after signing in 
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


  // signing in with Email
  emailSignIn(email:string, password:string) {
    this.auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      this.user = userCredential.user;
      // ...
      // changes loggedIn status
      this.logged = true;
      // navigates after signing in 
      this.router.navigate(['ask-help']);
      console.log(this.user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // alerts in case of error
      window.alert(errorMessage);
    });
  }

  // singning up with email
  emailSignUp(email:string, password:string) {
    this.auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      this.user = userCredential.user;
      // ...
      // changes loggedIn status
      this.logged = true;
      // navigates to page after signing up
      this.router.navigate(['ask-help']);
      console.log(this.user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      // alerts in case of error
      window.alert(errorMessage);
    });
  }


  // logging out
  logout() {
    this.auth.signOut().then(() => {
      // Sign-out successful.
      // changes loggedIn status
      this.logged = false;
      localStorage.removeItem('logged');
      // navigates back to login page
      this.router.navigate(['login']);
      // removes user data
      this.user = null;
    }).catch((error) => {
      // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      // alerts in case of error
      window.alert(errorMessage);
    });
  }
}
