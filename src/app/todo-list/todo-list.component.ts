import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { DatabaseService } from '../services/database.service';
import { AuthService, User } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Comment { comment: string; userId: string, name: string, date?: {}};
export interface CommentId extends Comment { id?: string; };
// export interface CommentUser extends Comment { userId: string };

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  private commentsCollection: AngularFirestoreCollection<CommentId>;
  private commentsWithIds; //Contains the comments collection with IDs
  comments: Observable<CommentId[]>;
  currentUser: User;
  public _isLoggedIn: boolean;

  constructor(private afs: AngularFirestore, private db: DatabaseService, private authService: AuthService, private af: AngularFireAuth) { 
    /* Saved by the documentation! https://github.com/angular/angularfire2/blob/master/docs/firestore/collections.md */


    this.commentsCollection = this.afs.collection<Comment>('comments');
    // this.comments = this.commentsCollection.valueChanges();

       /* Will figure this out after I get users to add their ids to comments they make */
    /* Step 1: Check if users are logged in or not and retrieve data from that user */
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        // console.log(user);
        // this.currentUser = {id: user.uid, name: user.email, email: user.email};

        this.currentUser = this.authService.getCurrentUser(user);

       /* Toogle boolean based on whether user is present or not */
        this._isLoggedIn = true; 
        
        return;
      } else {
        this._isLoggedIn = false;
        // console.log('not currently signed in!');
      }
    })

    // console.log(this.db.getComments())
    // this.commentsCollection = afs.collection<Comment>('comments')
    // this.commentsCollection.orderBy("name").limit(3);
    
    this.commentsWithIds = this.afs.collection<Comment>('comments').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Comment;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    this.comments = this.commentsWithIds;

  }

  ngOnInit() {
  }

  addComment(e) {
    /* This is just to take the place of the user name which might have to be set up after the account is created */
    let userName = this.currentUser.email.substring(0,5);
    console.log(userName);
    /* Get date the item was created */
    /* Solution https://stackoverflow.com/questions/12409299/how-to-get-current-formatted-date-dd-mm-yyyy-in-javascript-and-append-it-to-an-i*/

    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    let hour = today.getUTCHours();
    let minutes = today.getUTCMinutes();

    if (dd < 10) {
      dd = 0 + dd;
    } 

    if (mm < 10) {
      mm = 0 + mm;
    } 

    let currentDate = `${mm}/${dd}/${yyyy} at ${hour}:${minutes}`;//stores it in month/day/year format

    let comment: Comment = { comment: e.target.value, userId: this.currentUser.id, name: userName, date: currentDate}; 
    this.commentsCollection.add(comment);
    // this.comments.subscribe(data => console.log(data));
    e.target.value = "";
  }

/* Function below works by using the id to delete the comment */
  delete(id) {
    console.log(`Deleting item with id: ${id}`);
    this.afs.collection(`comments`).doc(`${id}`).delete();
  }

}
