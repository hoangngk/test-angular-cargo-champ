import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AuthActionTypes,
  SaveDetailsRequest,
  SaveDetailsSuccess,
  SetUser,
  SignInRequest,
  SignInSuccess,
  SignUpRequest,
  SignUpSuccess,
  UpdatePhoto
} from '../actions/auth.actions';
import {AuthService} from '../../services';
import {Identity} from '../../interfaces';
import { Store } from '@ngrx/store';


const handleSignIn = (user: any) => {
  localStorage.setItem('identity', JSON.stringify(user));
  return new SignInSuccess(user);
};

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,
              private router: Router,
              private authService: AuthService,
              ) {
  }


  @Effect({dispatch: false})
  signUpSuccess$ = this.actions$
    .pipe(
      ofType(AuthActionTypes.SIGN_UP_SUCCESS),
      map((action: SignUpSuccess) => action.payload),
     /* tap((data: {email: string, token: string}) => !environment.production
        ? this.router.navigate([`/sign-up/${SignUpSteps.DETAILS}/${data.token}`])
        : null
      )*/
    );





  @Effect({dispatch: false})
  saveDetailsSuccess$ = this.actions$
    .pipe(
      ofType(AuthActionTypes.SAVE_DETAILS_SUCCESS),
      tap(() => this.router.navigate(['/sign-in']))
    );

  @Effect()
  signIn$ = this.actions$
    .pipe(
      ofType(AuthActionTypes.SIGN_IN_REQUEST),
      map((action: SignInRequest) => action.payload),
      switchMap((payload) => {
        return this.authService.signIn(payload.email, payload.pass)
          .pipe(
            map((user: any) => handleSignIn(user))
          );
      }),
    );

  @Effect({dispatch: false})
  setUser = this.actions$
    .pipe(
      ofType(AuthActionTypes.SET_USER),
      map((action: SetUser) => action.payload),
      tap((user) => {
        const oldUser = JSON.parse(localStorage.getItem('identity'));
        user = {...user, jwt: oldUser.jwt};
        localStorage.removeItem('identity');
        localStorage.setItem('identity', JSON.stringify(user));
      })
    );

  @Effect({dispatch: false})
  updatePhoto = this.actions$
    .pipe(
      ofType(AuthActionTypes.UPDATE_PHOTO),
      map((action: UpdatePhoto) => action.payload),
      tap((link) => {
        let user = JSON.parse(localStorage.getItem('identity'));
        user = {...user, user_photo: link};
        localStorage.removeItem('identity');
        localStorage.setItem('identity', JSON.stringify(user));
      })
    );


  @Effect({dispatch: false})
  signInRedirect$ = this.actions$.pipe(
    ofType(AuthActionTypes.SIGN_IN_SUCCESS),
    tap(() => this.router.navigate(['/roadmaps/']))
  );

  @Effect({dispatch: false})
  signOut$ = this.actions$.pipe(
    ofType(AuthActionTypes.SIGN_OUT),
    tap(() => {
      localStorage.removeItem('identity');

      this.router.navigateByUrl('/');
    })
  );
}
