import { CommentId } from './../comment-form/comment-form.component';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';



export interface User {
  id?: string;
  name?: string;
  email: string;
  password?: string;
//   constructor(auth) {
//   this.id = auth.uid;
//  }
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private activeUser;

  constructor(public af: AngularFireDatabase, private afAuth: AngularFireAuth) { 

  }

  createUser(email, password, e) {
    e.preventDefault();
    console.log('creating user in Database');
    console.log(email, password);
    /* Documentation for creating a user account */
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      
    })
    /* .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.meessage;
      if(errorCode == 'auth/weak=password') {
        alert ('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    }) */
 
  }

  getCurrentUser(user){
    // console.log(user);
    let currentUser: User;
    currentUser = {id: user.uid, name: user.email, email: user.email};
    // console.log(currentUser);
    return  currentUser;
  }

  signIn(email, password) {
    /*If statement returns if user is already signed in */
    if (firebase.auth().currentUser) {
      console.log('already signed in as: ', firebase.auth().currentUser);
      console.log(firebase.auth().currentUser.email);
      // [START signout]
      // console.log('Signing out!')
      // firebase.auth().signOut();
      // [END signout]
      return;
    }

    /* Code below executes if user is not currently signed in. Need to find a way to persist the user so it's accessible as a currentUser property Reference: https://github.com/firebase/quickstart-js/blob/master/auth/email-password.html*/
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
  }

  signOut() {
    /*Signing user out, need to find a way to monitor the state so the form changes back to the signed out format */
    firebase.auth().signOut();
  }

}
