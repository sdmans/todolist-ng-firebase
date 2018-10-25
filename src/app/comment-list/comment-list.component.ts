import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  $posts: Observable<any[]>

  $comments: Observable<any[]>

  constructor(private afdb: AngularFireDatabase) { }

ngOnInit() {
  this.getPosts();
    // const commentRef = this.afdb.list('posts');
    // this.$posts = this.afdb.list('posts').valueChanges();
    // .subscribe(data => console.log(data));

}

getPosts() {
  // this.$posts = this.afdb.list('posts').valueChanges();
  // console.log(this.$posts);
  // .pipe(map(actions) => actions.map(this.))
  // this.$posts.subscribe(data => console.log(data));
}  

getComments() {
}

}
