import { Component, Input } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";
import {
  settingsColumn,
  settingsDE,
  settingsEN,
} from "../../../../../assets/i18n/column-setting-offers.constant";
import { AuthService } from "../../../../core/services";
import { OffersService } from "../../../../core/services/offers.service";

@Component({
  selector: "ngx-filter-view",
  templateUrl: "./filter-view.component.html",
  styleUrls: ["./filter-view.component.scss"],
})
export class FilterViewComponent {
  @Input() data: any;
  hideColumnArray = [];
  columns = [];
  settings;

  constructor(
    protected ref: NbDialogRef<FilterViewComponent>,
    private as: AuthService,
    public os: OffersService
  ) {
    this.as.langChange.subscribe((currLang) => {
      this.settings = currLang === "en" ? settingsEN : settingsDE;
      this.columns = settingsColumn;
    });
  }

  columnCheckedStatus(c: string) {
    return this.hideColumnArray.indexOf(c) > -1;
  }

  hideColumn(c: string, checked: boolean) {
    if (!checked) {
      const index = this.hideColumnArray.indexOf(c);
      if (index === -1) {
        this.hideColumnArray.push(c);
      }
    } else {
      const index = this.hideColumnArray.indexOf(c);
      if (index > -1) {
        this.hideColumnArray.splice(index, 1);
      }
    }
  }

  dismiss() {
    this.ref.close();
  }

  apply() {
    localStorage.setItem(
      "hideColumnOffers",
      JSON.stringify(this.hideColumnArray)
    );
    this.os.hideColumnSub.next(true);
    this.dismiss();
  }
}
