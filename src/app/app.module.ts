import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import { CommentListComponent } from './comment-list/comment-list.component';

/* Importing for router service */
import { RouterModule, Routes } from '@angular/router';

/* Importing newly created routes file */ 
import { RoutingModule } from './routing-module';

/* Importing Firebase */
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';

/* Importing Firebase Modules */
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolListComponent,
    CommentListComponent,
    CommentFormComponent,
    NavbarComponent,
    RegisterComponent,
    TodoListComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
