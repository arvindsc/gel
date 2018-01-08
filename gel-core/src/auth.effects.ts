import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import * as auth from './auth.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { toPayload } from '@ngrx/effects/src/util';

@Injectable()
export class AuthEffects {

  @Effect() login$ = this.actions$
      .ofType(auth.LOGIN)
      .map( toPayload)
      .switchMap(payload => this.authService.login(payload)
        // If successful, dispatch success action with result
        .map(res => ({ type: auth.LOGIN_SUCCESS, payload: res.json() }))
        // If request fails, dispatch failed action
        .catch(() => Observable.of({ type: auth.LOGIN_FAIL}))
      );

      @Effect() logout$ = this.actions$
      .ofType(auth.LOGOUT)
      .map( toPayload)
      .switchMap(payload => this.authService.logout()
        // If successful, dispatch success action with result
        .map(res => ({ type: auth.LOGOUT_SUCCESS, payload: res }))
        // If request fails, dispatch failed action
        .catch(() => Observable.of({ type: auth.LOGOUT_FAIL}))
      );
  constructor(
    private authService: AuthService,
    private actions$: Actions
  ) { }

}
