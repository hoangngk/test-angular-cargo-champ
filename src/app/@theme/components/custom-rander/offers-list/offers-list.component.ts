import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { AddComponent } from "../../../../main/offers/modal/add/add.component";

@Component({
  selector: "ngx-offers-list",
  templateUrl: "./offers-list.component.html",
  styleUrls: ["./offers-list.component.scss"],
})
export class OffersListComponent {
  @Input() rowData: any;
  threeDots = [{ title: "View" }, { title: "Edit" }, { title: "Delete" }];

  constructor(
    public router: Router,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService
  ) {}

  clickType(ev) {
    switch (ev) {
      case "View":
        this.router.navigate(["main/offers/view", this.rowData?.id]);
        break;
      case "Edit":
        this.editClicked(this.rowData?.id);
        break;
      case "Delete":
        this.deleteClicked(this.rowData?.id);
        break;
      default:
        break;
    }
  }

  deleteClicked(id: string) {
    this.toastrService.success("Orders deleted succefully. ", "Delete", {
      duration: 4000,
    });
  }

  editClicked(id: any): void {
    this.dialogService.open(AddComponent, {
      context: {
        data: id,
      },
      dialogClass: "model-full",
    });
  }
}
