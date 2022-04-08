import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PlacesComponent } from './places.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: PlacesComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'view/:id',
        component: ViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesRoutingModule { }
