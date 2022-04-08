import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { AuthGuard } from './core/guards';
import { NotAuthGuard } from './core/guards/not-auth.guard';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
    canActivate: [AuthGuard],

  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module')
      .then(m => m.MainModule),
    canActivate: [AuthGuard],

  },
  {
    path: 'auth-app',
    loadChildren: () => import('./auth-app/auth-app.module')
      .then(m => m.AuthAppModule),
      canActivate: [NotAuthGuard],

  },
  // {
  //   path: 'auth-app',
  //   component: AuthAppComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: LoginComponent,
  //     },
  //   ],
  // },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'main/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
