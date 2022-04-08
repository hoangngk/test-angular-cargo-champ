import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { combineLatest, of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, switchMap, take, takeLast, tap, withLatestFrom } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';



import {
  RoadmapsActionTypes,

  GetAllRoadmapsSuccess,

  GetRoadmapFail,


} from '../actions/roadmaps.actions';
import { AppState } from '../state/app.state';
import { MaterialService } from '../../services/material.service';

@Injectable()
export class RoadmapsEffects {
  constructor(private actions$: Actions,
    private store: Store<AppState>,
    private router: Router,
    private roadmapService: MaterialService) {
  }

  @Effect()
  getAllRoadmaps$ = this.actions$
    .pipe(
      ofType(RoadmapsActionTypes.GET_ALL_ROADMAPS_REQUEST),
      switchMap(() => {
        return this.roadmapService.getList()
          .pipe(
            switchMap((roadmaps: any[]) => of(new GetAllRoadmapsSuccess(roadmaps)))
          );
      })
    );

  @Effect()
  getAllRoadmapsSuccess$ = this.actions$
    .pipe(
      ofType(RoadmapsActionTypes.GET_ALL_ROADMAPS_SUCCESS),
      map((action: GetAllRoadmapsSuccess) => action.payload),
    );

}
