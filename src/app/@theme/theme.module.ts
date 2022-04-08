import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
  NbDatepickerModule,
  NbTreeGridModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
} from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';

import {
  FooterComponent,
  HeaderComponent,
  SearchInputComponent,
  TinyMCEComponent,
} from './components';
import {
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
} from './pipes';
import {
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
} from './layouts';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { DARK_THEME } from './styles/theme.dark';
import { NoHeaderFooterLayoutComponent } from './layouts/no-header-footer/no-header-footer.layout';
import { MaterialListComponent } from './components/custom-rander/material-list/material-list.component';
import { PlacesListComponent } from './components/custom-rander/places-list/places-list.component';
import { ToursListComponent } from './components/custom-rander/tours-list/tours-list.component';
import { CounterPartyListComponent } from './components/custom-rander/counter-party-list/counter-party-list.component';
import { MaterialGroupComponent } from './components/cell-change/material-group/material-group.component';
import { CustomCellComponent } from './components/cell-change/custom-cell/custom-cell.component';
import { RouterModule } from '@angular/router';
import { OrdersListComponent } from './components/custom-rander/orders-list/orders-list.component';
import { ActionHeaderComponent } from './components/action-header/action-header.component';
import { PriceListComponent } from './components/custom-rander/price-list/price-list.component';
import { FormsModule } from '@angular/forms';
import { CellComponent, ClassNameComponent, ContactComponent, CounterPartyComponent, CounterPartyPriceComponent, LocationCommonComponent, LocationComponent, LocationLoadingComponent, LocationUnLoadingComponent, MaterialComponent, OrderComponent } from './components/cell/cell.component';
import { VehiclesListComponent } from './components/custom-rander/vehicles-list/vehicles-list.component';
import { TrailersListComponent } from './components/custom-rander/trailers-list/trailers-list.component';
import { TripListComponent } from './components/custom-rander/trip-list/trip-list.component';
import { RadioAndCheckBoxComponent } from './components/forms/radio-and-checkbox.component';


const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbSecurityModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
  RouterModule,
  FormsModule,
  NbCheckboxModule,
  NbInputModule,
  TranslateModule, NbDatepickerModule.forRoot(), NbTreeGridModule, NbCardModule
];
const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  TinyMCEComponent,
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
  NoHeaderFooterLayoutComponent,

  MaterialListComponent,
  VehiclesListComponent,
  TrailersListComponent,
  PlacesListComponent,
  TripListComponent,
  ToursListComponent,
  CounterPartyListComponent,
  MaterialGroupComponent,
  CustomCellComponent,
  OrdersListComponent,
  PriceListComponent,
  ActionHeaderComponent,
  MaterialComponent,
  LocationComponent,
  LocationLoadingComponent,
  LocationUnLoadingComponent,
  LocationCommonComponent,
  CounterPartyComponent,
  CounterPartyPriceComponent,
  OrderComponent,
  CellComponent,
  ClassNameComponent,
  ContactComponent,
  RadioAndCheckBoxComponent
];
const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
];

@NgModule({
  imports: [CommonModule, ...NB_MODULES],
  exports: [CommonModule, ...PIPES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...PIPES],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'custom-theme',
          },
          [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME],
        ).providers,
      ],
    };
  }
}
