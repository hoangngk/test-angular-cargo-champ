import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  NbAccordionModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule,
  NbTabsetModule,
} from "@nebular/theme";
import { TranslateModule } from "@ngx-translate/core";
import { ThemeModule } from "../../@theme/theme.module";
import {
  GetOrderTypeStatusTitlePipe,
  ListComponent,
} from "./list/list.component";
import { OffersRoutingModule } from "./offers-routing.module";
import { OffersComponent } from "./offers.components";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ViewComponent } from "./view/view.component";
import { FilterViewComponent } from './modal/filter-view/filter-view.component';
import { AddComponent } from './modal/add/add.component';

@NgModule({
  imports: [
    CommonModule,
    OffersRoutingModule,
    TranslateModule,
    NbCardModule,
    ThemeModule,
    FormsModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbInputModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbActionsModule,
    NbCheckboxModule,
    NbAccordionModule,
    ReactiveFormsModule,
    NbTabsetModule,
    NbDatepickerModule.forRoot(),
  ],
  exports: [],
  declarations: [
    OffersComponent,
    ListComponent,
    ViewComponent,
    GetOrderTypeStatusTitlePipe,
    FilterViewComponent,
    AddComponent,
  ],
  providers: [GetOrderTypeStatusTitlePipe],
})
export class OffersModule {}
