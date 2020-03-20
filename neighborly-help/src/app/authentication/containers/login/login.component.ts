import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/firebase/auth/authentication.service';
import { Credentials } from 'src/app/firebase/auth';

@Component({
  selector: 'nh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit() {}

  onLogin(credentials: Credentials) {
    this.authService.login(credentials);
  }
}
