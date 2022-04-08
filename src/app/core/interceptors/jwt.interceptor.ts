import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { Observable } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import { AppState } from '../store/state/app.state';
import { Identity } from '../interfaces';
import { selectUser } from '../store/selectors/auth.selector';
import { RemoveError } from '../store/actions/error.actions';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.pipe(
      select(selectUser),
      take(1),
      exhaustMap((user: Identity) => {
        this.store.dispatch(new RemoveError(null));
        if (user) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${user.jwt}`,
              'Access-Control-Allow-Origin': '*',
            },
          });
        }

        return next.handle(request);
      })
    );
  }
}
