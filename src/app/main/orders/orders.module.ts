import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { CustomRenderComponent, GetOrderTypeStatusTitlePipe, ListComponent, OrdersGroupCellRenderComponent } from './list/list.component';
import { OrdersComponent } from './orders.component';
import { ViewComponent } from './view/view.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  NbAccordionModule,
  NbActionsModule, NbButtonModule, NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule, NbDatepickerModule, NbIconModule, NbInputModule, NbSelectModule, NbTabsetModule,
} from '@nebular/theme';
import { AddComponent } from './modal/add/add.component';
import { FilterComponent } from './modal/filter/filter.component';
import { FilterViewComponent } from './modal/filter-view/filter-view.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';


@NgModule({
  declarations: [
    OrdersComponent,
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
    OrdersRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbInputModule,
    NbContextMenuModule, NbButtonModule, NbSelectModule, NbActionsModule,
    NbCardModule,
    NbCheckboxModule, NbAccordionModule,
    TranslateModule, ReactiveFormsModule, NbContextMenuModule, NbTabsetModule, NbDatepickerModule.forRoot(), ThemeModule
  ],

  providers: [
    GetOrderTypeStatusTitlePipe
  ]
})
export class OrdersModule { }
