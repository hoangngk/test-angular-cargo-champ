import { Injectable } from '@angular/core';


import { Store } from '@ngrx/store';

import { AppState } from '../store/state/app.state';
import { selectUser } from '../store/selectors/auth.selector';
import { Identity } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {

  private _user: Identity;

  constructor(
    private _store: Store<AppState>,
  ) {
    this._fetchUser();
  }

  public userIsTeamAdmin(): boolean {
    if (!this._user) {
      return false;
    }

    const userInTeam = this._user.organization?.team?.members.find(
      (member) => {
        return member.user.email === this._user.email;
      },
    );

    return userInTeam && userInTeam.role === 'ADMIN';
  }

  public userIsCreator(): boolean {
    if (!this._user) {
      return false;
    }

    const userInTeam = this._user.organization?.team?.members.find(
      (member) => {
        return member.user.email === this._user.email;
      },
    );

    return userInTeam && userInTeam.role === 'CREATOR';
  }

  public userHasBasicSubscription(): boolean {
    return this._user && !this._user.organization.subscription_active;
  }

  public userHasFullAccess(): boolean {
    return (
      this.userHasPaidSubscription()
      && !this.userHasBasicSubscription()
      && this.userIsTeamAdmin()
    );
  }

  public userHasPaidSubscription(): boolean {
    return (
      this._user && this._user.organization.subscription_active
    );
  }

  private _fetchUser(): void {
    this._store.select(selectUser)
      .subscribe(
        (user) => {
          this._user = user;
        },
      );
  }

}
