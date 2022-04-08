import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import { Identity } from '../interfaces';
import { AppState } from '../store/state/app.state';
import { selectUser } from '../store/selectors/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
  constructor(private store: Store<AppState>,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(selectUser),
      take(1),
      map((user: any) => {
        if (!user) {
          return true;
        }

        this.router.navigate(['/main/dashboard']);

        return false;
      })
    );
  }
}
