import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterPartyComponent } from './counter-party.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: CounterPartyComponent,
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
export class CounterPartysRoutingModule { }
