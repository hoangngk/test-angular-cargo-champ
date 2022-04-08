import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CustomRenderComponent, GetOrderTypeStatusTitlePipe, ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  NbAccordionModule,
  NbActionsModule, NbAutocompleteModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbContextMenuModule,
  NbDatepickerModule,
  NbIconModule, NbInputModule, NbSelectModule, NbTabsetModule,
} from '@nebular/theme';
import { ToursRoutingModule } from './tours-routing.module';
import { AddComponent } from './modal/add/add.component';
import { FilterComponent } from './modal/filter/filter.component';
import { FilterViewComponent } from './modal/filter-view/filter-view.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToursComponent } from './tours.component';
import { ThemeModule } from '../../@theme/theme.module';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    ToursComponent,
    ListComponent,
    ViewComponent,
    CustomRenderComponent,

    AddComponent,
    FilterComponent,
    FilterViewComponent,
    GetOrderTypeStatusTitlePipe
  ],
  imports: [
    CommonModule,
    ToursRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbInputModule,
    NbContextMenuModule, NbButtonModule, NbSelectModule, NbActionsModule, NbTabsetModule,
    NbCheckboxModule, NbAccordionModule,
    TranslateModule, ReactiveFormsModule, NbContextMenuModule, ThemeModule, NbDatepickerModule.forRoot(), NbAutocompleteModule, DragulaModule.forRoot()
  ],
  providers: [GetOrderTypeStatusTitlePipe]
})
export class ToursModule { }
