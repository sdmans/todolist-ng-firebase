import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';


/* Importing templates */
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: 'todolist', component: TodoListComponent },
    { path: 'register', component: RegisterComponent },
    { path: '',
    redirectTo: '/todolist',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/todolist' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes
        //,{ enableTracing: true } // <-- For Debugging
        ) 
    ],
    exports: [
        RouterModule
     ] 
  })
  export class RoutingModule { };