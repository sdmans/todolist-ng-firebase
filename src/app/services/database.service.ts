import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Comment { comment: string, name: string, userId: string, id: string}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private commentsCollection: AngularFirestoreCollection<any>;


  constructor(private afs: AngularFirestore) { }

  getComments(){
    console.log('Retrieving comments!');
    console.log(this.afs.collection<Comment>('comments'))
    return this.afs.collection<Comment>('comments').valueChanges()
    // this.commentsCollection.orderBy("name").limit(3);
    
  }

  getCommentIds(){
    return this.commentsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Comment;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getComment(comment) {
    console.log(comment);
  }
}
