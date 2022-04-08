import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { SignInRequest } from '../../core/store/actions/auth.actions';
import { RemoveError } from '../../core/store/actions/error.actions';
import { AppState } from '../../core/store/state/app.state';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,private store: Store<AppState>) {
    this.loginForm = fb.group({
      email: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  onSignInFormSubmit() {
    if (this.loginForm.invalid) {
      this.store.dispatch(new RemoveError(null));
      return;
    }

    this.store.dispatch(new SignInRequest({
      email: this.loginForm.value.email,
      pass: this.loginForm.value.pass
    }));
  }
  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
  }

}
