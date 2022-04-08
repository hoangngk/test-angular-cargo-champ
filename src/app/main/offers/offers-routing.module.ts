import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { OffersComponent } from "./offers.components";

const routes: Routes = [
  {
    path: "",
    component: OffersComponent,
    children: [
      {
        path: "",
        component: ListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersRoutingModule {}
