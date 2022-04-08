import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MaterialComponent } from './material.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialComponent,
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
export class MaterialRoutingModule { }
