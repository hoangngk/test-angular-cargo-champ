import {
  Component,
  OnDestroy,
  OnInit,
  Pipe,
  PipeTransform,
} from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";
import { Subject, Subscription } from "rxjs";
import { takeUntil } from "rxjs/operators";
import {
  orderTypeDE,
  orderTypeEN,
  settingsDE,
  settingsEN,
} from "../../../../assets/i18n/column-setting-offers.constant";
import { MockOffersService } from "../../../@core/mock/offers.service";
import { AuthService } from "../../../core/services";
import { OffersService } from "../../../core/services/offers.service";
import { AddComponent } from "../modal/add/add.component";
import { FilterViewComponent } from "../modal/filter-view/filter-view.component";

@Component({
  selector: "ngx-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit, OnDestroy {
  hideCols = "hd-oao-1";
  settings = settingsEN;
  source: LocalDataSource = new LocalDataSource();
  orderType = orderTypeEN;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private as: AuthService,
    public orderTitleChange: GetOrderTypeStatusTitlePipe,
    private os: OffersService,
    private dialogService: NbDialogService,
    private mockOfferService: MockOffersService
  ) {
    this.os.hideColumnSub.subscribe((res) => {
      if (res) {
        this.newSetingupdate();
      }
    });
  }

  ngOnInit(): void {
    this.listLoad();
    this.as.langChange.subscribe((currLang) => {
      if (currLang) {
        this.settings = currLang === "en" ? settingsEN : settingsDE;
        this.orderType = currLang === "en" ? orderTypeEN : orderTypeDE;
        this.newSetingupdate();
        this.listLoad();
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  newSetingupdate() {
    let settingItem = JSON.parse(localStorage.getItem("hideColumnOffers"));
    this.hideCols = "";
    let i = 0;
    for (const colI in this.settings.columns) {
      if (settingItem && settingItem.indexOf(colI) > -1) {
        this.settings.columns[colI].isSelected = false;
      } else {
        this.settings.columns[colI].isSelected = true;
      }
      if (!this.settings.columns[colI].isSelected) {
        i++;
        this.hideCols += `hd-oao-${i} `;
      } else {
        i++;
      }
    }
    this.settings = Object.assign({}, this.settings);
  }

  newClicked(id?: any): void {
    this.dialogService
      .open(AddComponent, {
        context: {
          data: id,
        },
        dialogClass: "model-full",
      })
      .onClose.subscribe((res) => {
        if (res || res === "submit") {
          this.listLoad();
        }
      });
  }

  showFilter(ev) {
    switch (ev) {
      case "all":
        localStorage.setItem("hideColumnOffers", JSON.stringify([]));
        this.os.hideColumnSub.next(true);
        break;
      case "custom":
        this.dialogService.open(FilterViewComponent, {
          context: {
            data: null,
          },
          dialogClass: "model-filterview",
        });
        break;
      default:
        break;
    }
  }

  listLoad() {
    this.mockOfferService
      .getList()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.source.load(
            res.map((el) => {
              return {
                ...el,
                typePage: 1,
                type: this.orderTitleChange.transform(this.orderType, el.type),
              };
            })
          );
        },
      });
  }
}

@Pipe({
  name: "getOrderTypeStatusTitlePipe",
})
export class GetOrderTypeStatusTitlePipe implements PipeTransform {
  transform(value: any[], args: string): unknown {
    if (!value) {
      return null;
    }

    return value?.filter((optionValue: any) => optionValue.const === args)[0]
      ?.description;
  }
}
