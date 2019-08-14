# To do list
## Project Description:
Create a To Do List that lets users list tasks they need to do!

## Main Features
1. Users should be able to add items to a list
2. Users should be able to mark completed items on the list

## Extra Features
3. Completed items should be added to a completed item list
4. Items should be stored so that users can access these items
5. Users should be able to log into accounts so they can view these items
6. Create a way for users to edit tasks they've posted
7. Allow users to undo completed items

## Technology
__Angular 6__ - Front-end Framework\
__Firebase/Cloud Firestore__ - Database and User Authentication\
__Bootstrap 4__ - Styles and Responsiveness

## Project Summary
I'm creating a To Do List application to help me work towards a better understanding of the Angular framework. With this, users will be able to make a list of tasks they want to keep track of. Once added, users can complete, edit, or delete tasks that they make. It should also be able to write to a database, work with RXJS and Observables, and react to changes in state.

## Post-project Summary
I created this To Do List because it seemed like a great way to take my first dive into the Angular framework. The application allows you to create and modify a list of To Do Items. You can add, edit and delete items from the list. It even lets you view tasks that  you've already compelted. To Do Lists seem like a great way to learn how to work with Frameworks since they can really vary in complexity and allow you to work with some of the main features.

### What I Learned
* How to connect to Firebase and Cloud Firestore and retrieve items
* Creating and managing users with Firebase
* Updating objects on Firebase
* How to toggle state for certain elements with booleans
* Working with user input

 When I come back to this project, I'd like to improve the layout so users can always see completed items. I'm thinking two tabs that you can toggle between with a count for the number of tasks. An alternative to this would be two separate columns to hold ongoing and completed tasks. This may end up being done in a different Framework that I need to learn about!

 ##Instructions
 1. Create an account or log into the application using the test account. \
 __Email:__ testuser@testmail.com\
 __Password:__ testpw
 2. Use the input field under "Add a To Do item" and click the "Add Item" button below. 

 3. The section below under your To Do List will populate with the new item.

4. Test the different buttons below your to do items. Here's a description for each button! \
__Complete__: Complete the item, removing it from the To Do List and adding it to the Completed List Section. \ 
__Edit__: Toggle to the edit view which allows you to edit the Item as an input field. This will be populated with the current text be default. Press Save or Cancel to make changes and toggle back to the original view for the item. \
__Delete__: Remove the item from your To Do List completely. \
__Undo__: Only available for completed items. Will add the item back to the To Do List.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
