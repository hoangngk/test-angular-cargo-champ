import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomRenderComponent, ListComponent, TrailersGroupCellRenderComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  NbActionsModule, NbButtonModule, NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule, NbIconModule, NbInputModule, NbSelectModule,
} from '@nebular/theme';
import { AddComponent } from './modal/add/add.component';
import { FilterComponent } from './modal/filter/filter.component';
import { FilterViewComponent } from './modal/filter-view/filter-view.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { TrailersComponent } from './trailers.component';
import { TrailersRoutingModule } from './trailers-routing.module';


@NgModule({
  declarations: [
    TrailersComponent,
    ListComponent,
    ViewComponent,

    CustomRenderComponent,
    TrailersGroupCellRenderComponent,
    AddComponent,
    FilterComponent,
    FilterViewComponent,
  ],
  imports: [
    CommonModule,
    TrailersRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbInputModule,
    NbContextMenuModule, NbButtonModule, NbSelectModule, NbActionsModule,
    NbCardModule,
    NbCheckboxModule,
    TranslateModule, ReactiveFormsModule, NbContextMenuModule, ThemeModule
  ],
})
export class TrailersModule { }
