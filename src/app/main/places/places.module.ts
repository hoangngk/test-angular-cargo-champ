import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places-routing.module';
import { PlacesComponent } from './places.component';
import { CustomRenderComponent, ListComponent } from './list/list.component';
import { addressFormatePipe, FsIconComponent, GetTitlePipe, ViewComponent } from './view/view.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  NbAccordionModule,
  NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbContextMenuModule,
  NbIconModule, NbInputModule, NbSelectModule, NbTabsetModule, NbTreeGridModule,
} from '@nebular/theme';
import { AddComponent } from './modal/add/add.component';
import { FilterComponent } from './modal/filter/filter.component';
import { FilterViewComponent } from './modal/filter-view/filter-view.component';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PlacesComponent,
    ListComponent,
    ViewComponent,
    CustomRenderComponent,

    AddComponent,
    FilterComponent,
    FilterViewComponent, addressFormatePipe, FsIconComponent, GetTitlePipe
  ],
  imports: [
    CommonModule,
    PlacesRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbInputModule, NbAccordionModule,
    NbContextMenuModule, NbButtonModule, NbSelectModule, NbActionsModule, NbTabsetModule,
    NbCheckboxModule, TranslateModule, ThemeModule, ReactiveFormsModule, NbTreeGridModule
  ]
})
export class PlacesModule { }
