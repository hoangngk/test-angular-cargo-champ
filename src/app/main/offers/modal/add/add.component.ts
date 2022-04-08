import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";

@Component({
  selector: "ngx-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class AddComponent implements OnInit {
  @Input() data: any;
  constructor(protected ref: NbDialogRef<AddComponent>) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  dismiss(str?: any) {
    this.ref.close(str);
  }

  saveMaterialDetails() {
    this.dismiss("submit");
  }
}
