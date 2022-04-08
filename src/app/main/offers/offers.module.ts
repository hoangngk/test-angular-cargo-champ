import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NbCardModule } from "@nebular/theme";
import { TranslateModule } from "@ngx-translate/core";
import { ThemeModule } from "../../@theme/theme.module";
import { ListComponent } from "./list/list.component";
import { OffersRoutingModule } from "./offers-routing.module";
import { OffersComponent } from "./offers.components";
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    OffersRoutingModule,
    TranslateModule,
    NbCardModule,
    ThemeModule,
    FormsModule,
    Ng2SmartTableModule
  ],
  exports: [],
  declarations: [OffersComponent, ListComponent],
  providers: [],
})
export class OffersModule {}
