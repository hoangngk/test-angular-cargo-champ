import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { CustomRenderComponent, ListComponent, MaterialGroupCellRenderComponent } from './list/list.component';
import { MaterialComponent } from './material.component';
import { FsIconComponent, ViewComponent } from './view/view.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  NbActionsModule, NbButtonModule, NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule, NbIconModule, NbInputModule, NbSelectModule, NbTabsetModule, NbTreeGridModule,
} from '@nebular/theme';
import { AddComponent } from './modal/add/add.component';
import { FilterComponent } from './modal/filter/filter.component';
import { FilterViewComponent } from './modal/filter-view/filter-view.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';


@NgModule({
  declarations: [
    MaterialComponent,
    ListComponent,
    ViewComponent,

    CustomRenderComponent,
    MaterialGroupCellRenderComponent,
    AddComponent,
    FilterComponent,
    FilterViewComponent,
    FsIconComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbInputModule,
    NbContextMenuModule, NbButtonModule, NbSelectModule, NbActionsModule, NbTabsetModule,
    NbCheckboxModule, TranslateModule, ThemeModule, ReactiveFormsModule, NbTreeGridModule
  ],
})
export class MaterialModule { }
