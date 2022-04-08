import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { settingsEN, settingsDE, settingsColumn } from '../../../../../assets/i18n/column-setting-trailers.constant';
import { AuthService } from '../../../../core/services';
import { MaterialService } from '../../../../core/services/material.service';

@Component({
  selector: 'ngx-filter-view',
  templateUrl: './filter-view.component.html',
  styleUrls: ['./filter-view.component.scss'],
})
export class FilterViewComponent implements OnInit {

  hideColumnArray = [];
  ngOnInit(): void {
    this.hideColumnArray = JSON.parse(localStorage.getItem('hideColumnMaterial')) || [];
  }

  @Input() data: any;

  dismiss() {
    this.ref.close();
  }


  settings;
  columns = [];

  constructor(protected ref: NbDialogRef<FilterViewComponent>, private as: AuthService, public ms: MaterialService) {
    this.as.langChange.subscribe(currLang => {
      this.settings = currLang === 'en' ? settingsEN : settingsDE;
      this.columns = settingsColumn;
    });
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

  columnCheckedStatus(c: string) {
    return this.hideColumnArray.indexOf(c) > -1;
  }

  apply() {
    localStorage.setItem('hideColumnMaterial', JSON.stringify(this.hideColumnArray));
    this.ms.hideColumnSub.next(true);
    this.dismiss();
  }

}
