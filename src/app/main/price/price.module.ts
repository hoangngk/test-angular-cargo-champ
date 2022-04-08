import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { CustomRenderComponent, ListComponent, PriceGroupCellRenderComponent } from './list/list.component';
import { PriceComponent } from './price.component';
import { ViewComponent } from './view/view.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  NbAccordionModule,
  NbActionsModule, NbAutocompleteModule, NbButtonModule, NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule, NbDatepickerModule, NbIconModule, NbInputModule, NbSelectModule,
} from '@nebular/theme';
import { AddComponent } from './modal/add/add.component';
import { FilterComponent } from './modal/filter/filter.component';
import { FilterViewComponent } from './modal/filter-view/filter-view.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
 

@NgModule({
  declarations: [
    PriceComponent,
    ListComponent,
    ViewComponent,

    CustomRenderComponent,
    PriceGroupCellRenderComponent,
    AddComponent,
    FilterComponent,
    FilterViewComponent,
  ],
  imports: [
    CommonModule,
    PriceRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbInputModule,
    NbContextMenuModule, NbButtonModule, NbSelectModule, NbActionsModule,
    NbCardModule,
    NbCheckboxModule,
    NbAccordionModule,
    TranslateModule, ReactiveFormsModule, NbContextMenuModule, ThemeModule, NbDatepickerModule.forRoot(), NbAutocompleteModule

  ],
})
export class PriceModule { }
