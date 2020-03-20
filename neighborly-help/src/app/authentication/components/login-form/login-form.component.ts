import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Credentials } from 'src/app/firebase/auth';

@Component({
  selector: 'nh-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  formGroup: FormGroup;

  @Output() login = new EventEmitter<Credentials>();

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      username: [null],
      password: [null],
    });
  }

  onLogin() {
    this.login.emit({
      username: this.formGroup.get('username').value,
      password: this.formGroup.get('password').value,
    });
  }

  ngOnInit() {}
}
