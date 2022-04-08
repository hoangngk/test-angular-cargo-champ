import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { CustomRenderComponent, GetOrderTypeStatusTitlePipe, ListComponent, OrdersGroupCellRenderComponent } from './list/list.component';
import { DriversComponent } from './drivers.component';
import { ViewComponent } from './view/view.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  NbActionsModule, NbButtonModule, NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbTabsetModule,
} from '@nebular/theme';
import { AddComponent } from './modal/add/add.component';
import { FilterComponent } from './modal/filter/filter.component';
import { FilterViewComponent } from './modal/filter-view/filter-view.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';


@NgModule({
  declarations: [
    DriversComponent,
    ListComponent,
    ViewComponent,

    CustomRenderComponent,
    OrdersGroupCellRenderComponent,
    AddComponent,
    FilterComponent,
    FilterViewComponent,
    GetOrderTypeStatusTitlePipe
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbCheckboxModule,
    NbRadioModule,
    NbInputModule,
    NbContextMenuModule, NbButtonModule, NbSelectModule, NbActionsModule,
    NbCardModule,
    TranslateModule, ReactiveFormsModule, NbContextMenuModule, NbTabsetModule, NbDatepickerModule.forRoot(), ThemeModule
  ],

  providers: [
    GetOrderTypeStatusTitlePipe
  ]
})
export class DriversModule { }
