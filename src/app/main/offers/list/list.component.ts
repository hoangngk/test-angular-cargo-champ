import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { settingsEN } from "../../../../assets/i18n/column-setting-offers.constant";

@Component({
  selector: "ngx-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  settings = settingsEN;
  source: LocalDataSource = new LocalDataSource();

  constructor() {}

  ngOnInit(): void {
    this.listLoad();
  }

  newClicked(id?: any): void {
    // this.dialogService.open(AddComponent, {
    //   context: {
    //     data: id,
    //   }, dialogClass: 'model-full',
    // }).onClose.subscribe(res => {
    //   if (res || res === 'submit') {
    //     this.listLoad();
    //   }
    // });
    console.log("open dialog: ", id);
  }

  showFilter(ev) {
    //   switch (ev) {
    //     case 'all':
    //       localStorage.setItem('hideColumnOfferAndOrders', JSON.stringify([]));
    //       this.os.hideColumnSub.next(true);
    //       break;
    //     case 'custom':
    //       this.dialogService.open(FilterViewComponent, {
    //         context: {
    //           data: null,
    //         }, dialogClass: 'model-filterview',
    //       });
    //       break;

    //     default:
    //       break;
    //   }
    console.log("filter: ", ev);
  }

  onDeleteConfirm(event): void {
    console.log(event);
  }

  listLoad() {
    
  };
}
