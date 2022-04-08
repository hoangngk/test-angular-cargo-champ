import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CustomRenderComponent, ListComponent } from './list/list.component';
import { addressFormatePipe, FsIconComponent, GetTitlePipe, ViewComponent } from './view/view.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  NbAccordionModule,
  NbActionsModule, NbAutocompleteModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbContextMenuModule,
  NbIconModule, NbInputModule, NbSelectModule, NbTabsetModule, NbTreeGridModule,
} from '@nebular/theme';
import { CounterPartysRoutingModule } from './counter-party-routing.module';
import { AddComponent } from './modal/add/add.component';
import { FilterComponent } from './modal/filter/filter.component';
import { FilterViewComponent } from './modal/filter-view/filter-view.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CounterPartyComponent } from './counter-party.component';
import { ThemeModule } from '../../@theme/theme.module';
import { TypeFilterPipe } from './shared/type-filter.pipe';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    CounterPartyComponent,
    ListComponent,
    ViewComponent,
    CustomRenderComponent,

    AddComponent,
    FilterComponent,
    FilterViewComponent,
    TypeFilterPipe, FsIconComponent, addressFormatePipe, GetTitlePipe
  ],
  imports: [
    CommonModule,
    CounterPartysRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbInputModule,
    NbContextMenuModule, NbButtonModule, NbSelectModule, NbActionsModule, NbTabsetModule,
    NbCheckboxModule, NbAccordionModule,
    TranslateModule, ReactiveFormsModule, NbContextMenuModule, ThemeModule, NbAutocompleteModule, DragulaModule, NbTreeGridModule
  ],
})
export class CounterPartysModule { }
