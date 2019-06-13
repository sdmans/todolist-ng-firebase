import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signIn(user, pw) {
    // console.log(formData);
    const username = user.value;
    const accessPw = pw.value;
    // console.log(username, accessPw);
    this.authService.signIn(username, accessPw);
    this.router.navigateByUrl('/todolist');
  }

}
