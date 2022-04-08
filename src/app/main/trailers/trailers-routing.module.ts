import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TrailersComponent } from './trailers.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: TrailersComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'view/:matId',
        component: ViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrailersRoutingModule { }
