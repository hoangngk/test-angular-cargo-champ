// import { Resolve } from '@angular/router';
// import { Injectable } from '@angular/core';

// import { Observable, of } from 'rxjs';
// import { map, switchMap, take } from 'rxjs/operators';
// import { select, Store } from '@ngrx/store';
// import { Actions, ofType } from '@ngrx/effects';

// import { RoadmapShort } from '../interfaces';
// import { AppState } from '../store/state/app.state';
// import { GetAllRoadmapsRequest, GetAllRoadmapsSuccess, RoadmapsActionTypes } from '../store/actions/roadmaps.actions';
// import { selectAllRoadmaps } from '../store/selectors/roadmaps.selector';

// @Injectable({
//   providedIn: 'root'
// })
// export class RoadmapsResolver implements Resolve<RoadmapShort[]> {
//   constructor(private store: Store<AppState>,
//               private actions$: Actions) {
//   }

//   resolve(): Observable<RoadmapShort[]> {
//     return this.store.pipe(
//       take(1),
//       select(selectAllRoadmaps),
//       switchMap((roadmaps: RoadmapShort[]) => {
//         this.store.dispatch(new GetAllRoadmapsRequest());

//         return this.actions$
//           .pipe(
//             ofType(RoadmapsActionTypes.GET_ALL_ROADMAPS_SUCCESS),
//             take(1),
//             map((action: GetAllRoadmapsSuccess) => action.payload)
//           );
//       })
//     );
//   }
// }
