import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
currentUserName;
_isLoggedIn: boolean;

  constructor(private authService: AuthService, private af: AngularFireAuth) { 
    // this.currentUser = this.authService.getCurrentUser();
    this.af.authState.subscribe((data) => {
      if(data !== null) {
        console.log(data);
        this.currentUserName = data.email;
        this._isLoggedIn = true;
      } else {
        // debugger;
        console.log('not currently signed in');
        this._isLoggedIn = false;
      }
    });


    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     console.log(user)
    //     this.currentUser = {id: user.uid, name: user.email, email: user.email};
    //     console.log(this.currentUser)
    //     return;
    //   } else {
    //     console.log('not currently signed in!');
    //   }
    // });

  }

  ngOnInit() {

  }

  signOut(event) {
    event.preventDefault();
    console.log("Signing out!");
    this.authService.signOut();
    console.log('You have signed out successfully!');
  }

}
