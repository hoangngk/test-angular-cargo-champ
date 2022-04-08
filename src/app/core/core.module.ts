import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';


import { ErrorInterceptor, JwtInterceptor } from './interceptors';
import { appReducer } from './store/reducers/app.reducer';
import { environment } from '../../environments/environment';
import { AuthEffects } from './store/effects/auth.effects';
import { RoadmapsEffects } from './store/effects/roadmaps.effects';



@NgModule({
  declarations: [
    // HeaderComponent,

  ],
  imports: [
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects, RoadmapsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(({ stateKey: 'router' }))
  ],
  exports: [
    // HeaderComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  entryComponents: [

  ]
})
export class CoreModuleApp {
  constructor(@Optional() @SkipSelf() parentModule: CoreModuleApp) {
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
