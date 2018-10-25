import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { DatabaseService } from '../services/database.service';
import { AuthService, User } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Comment { comment: string; userId: string, name: string };
export interface CommentId extends Comment { id: string; };
// export interface CommentUser extends Comment { userId: string };

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit { 

  private commentsCollection: AngularFirestoreCollection<Comment>;
  comments: Observable<Comment[]>;
  commentIds: Observable<Comment[]>;
  currentUser: User;
  private _isLoggedIn: boolean;

  constructor(private afs: AngularFirestore, private db: DatabaseService, private authService: AuthService, private af: AngularFireAuth) { 
    /* Saved by the documentation! https://github.com/angular/angularfire2/blob/master/docs/firestore/collections.md */
    this.commentsCollection = afs.collection<Comment>('comments');
    this.comments = this.commentsCollection.valueChanges();

    /* Will figure this out after I get users to add their ids to comments they make */
    /* Step 1: Check if users are logged in or not and retrieve data from that user */
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        // console.log(user);
        // this.currentUser = {id: user.uid, name: user.email, email: user.email};

        this.currentUser = this.authService.getCurrentUser(user);
        console.log(this.currentUser);
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
    
    this.comments = this.commentsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Comment;
        const id = a.payload.doc.id;
        // console.log({ id, ...data })
        return { id, ...data };
      }))
    );

  }

  ngOnInit() {
    
  }

  addComment(e) {
    /* This is just to take the place of the user name which might have to be set up after the account is created */
    let userName = this.currentUser.email.substring(0,5);
    console.log(userName);
    let comment: Comment = {comment: e.target.value, userId: this.currentUser.id, name: userName}; 
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
