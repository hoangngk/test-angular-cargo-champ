import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { settingsColumn, settingsDE, settingsEN } from '../../../../../assets/i18n/column-setting-counter-party.constant';
import { AuthService } from '../../../../core/services';
import { ContactsService } from '../../../../core/services/contacts.service';
import { DragulaService } from 'ng2-dragula'
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-filter-view',
  templateUrl: './filter-view.component.html',
  styleUrls: ['./filter-view.component.scss'],
})
export class FilterViewComponent implements OnInit {
  hideColumnArray = [];
  ngOnInit(): void {
    this.hideColumnArray = JSON.parse(localStorage.getItem('hideColumnCounterParty')) || [];
  }

  @Input() data: any;

  dismiss() {
    this.ref.close();
  }
  items;

  settings;
  columns = [];
  subscription = new Subscription();

  constructor(protected ref: NbDialogRef<FilterViewComponent>, private as: AuthService, public cs: ContactsService, public _ds: DragulaService) {
    this.as.langChange.subscribe(currLang => {
      this.settings = currLang === 'en' ? settingsEN : settingsDE;
      this.columns = !JSON.parse(localStorage.getItem('hideColumnCounterPartyOrder')) ? settingsColumn : JSON.parse(localStorage.getItem('hideColumnCounterPartyOrder'));
    });
    // this._ds.createGroup('bag-items', {
    //   revertOnSpill: true
    // });
    this.subscription = this._ds.drop().subscribe(({ name }) => {
      (this._ds.find(name).drake as any).cancel(true);
    });
    console.log(this.columns)
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
    localStorage.setItem('hideColumnCounterPartyOrder', JSON.stringify(this.columns));
    localStorage.setItem('hideColumnCounterParty', JSON.stringify(this.hideColumnArray));
    this.cs.hideColumnSub.next(true);
    this.dismiss();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
