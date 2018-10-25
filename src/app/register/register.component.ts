import { Component, OnInit } from '@angular/core';
import { FirebaseDatabaseService } from '../services/firebase-database.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService, User } from '../services/auth.service';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private currentUser: User;
  private _isLoggedIn: boolean;

  constructor(private db: FirebaseDatabaseService, private authService: AuthService, private af: AngularFireAuth, private router: Router) { 
    // this.currentUser = this.authService.getCurrentUser()
    // console.log(this.authService.getCurrentUser())


    /* Code below checks whether the user is signed in and toggles _isLoggedIn property. */
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        // console.log(user);
        // this.currentUser = {id: user.uid, name: user.email, email: user.email};

        this.currentUser = this.authService.getCurrentUser(user)
        console.log(this.currentUser);

        this._isLoggedIn = true; 
        this.router.navigateByUrl('/todolist');
        
        return;
      } else {
        this._isLoggedIn = false;
        // console.log('not currently signed in!');
      }
    })
  }

  ngOnInit() {
    /* Code below prevents page refresh Source: https://stackoverflow.com/questions/47331260/how-to-prevent-page-refresh-in-angular-4*/
   /*  window.addEventListener("beforeunload", function (e) {
      var confirmationMessage = "\o/";
    console.log("cond");
      e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
      return confirmationMessage;              // Gecko, WebKit, Chrome <34
    }); */
    
  }

  registerUser(email, password, event) {
    const userEmail = email.value;
    const userPassword = password.value;

    this.authService.createUser(userEmail, userPassword, event);
    console.log('User Created!')
    
  }

  signIn(formData, user, pw) {
    // console.log(formData);
    const username = user.value;
    const accessPw = pw.value;
    // console.log(username, accessPw);
    this.authService.signIn(username, accessPw);
  }

  signOut(){
    console.log(`Singing out ${this.currentUser.email}`);
    this.authService.signOut();
  }

}
