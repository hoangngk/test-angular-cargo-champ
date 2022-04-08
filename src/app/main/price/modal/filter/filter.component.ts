import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {



  ngOnInit(): void {
  }

  @Input() data: any;

  constructor(protected ref: NbDialogRef<FilterComponent>) { }

  dismiss() {
    this.ref.close();
  }

}
