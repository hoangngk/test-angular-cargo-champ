import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService, NbMenuService, NbToastrService, NB_WINDOW } from '@nebular/theme';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { ContactsService } from '../../../core/services/contacts.service';
import { AddComponent } from '../modal/add/add.component';

import { AuthService } from '../../../core/services';
import { settingsDE, settingsEN } from '../../../../assets/i18n/column-setting-counter-party.constant';
import { FilterViewComponent } from '../modal/filter-view/filter-view.component';
@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  sourceSUPPLIER: LocalDataSource = new LocalDataSource();
  sourceCONSUMER: LocalDataSource = new LocalDataSource();
  sourcebothAdded: LocalDataSource = new LocalDataSource();
  sourceUnassigned: LocalDataSource = new LocalDataSource();

  hideCols = "hd-cp-1";
  settings: any = settingsEN;
  listSUPPLIER = [];
  listCONSUMER = [];
  listUnassigned = [];
  bothAdded = [];
  constructor(public router: Router, private dialogService: NbDialogService, private cs: ContactsService, private as: AuthService) {
    // const data = this.service.getData();
    this.cs.popupOpenInListPage.subscribe(res => {

      if (res) {
        switch (res.split('@')[0]) {
          case 'edit':
            this.newClicked(res.split('@')[1]);   //new click with id means edit
            break;
          case 'list':
            this.listLoad();                    //new click with id means edit
            break;
          default:
            break;
        }
      }
    });
    this.cs.hideColumnSub.subscribe(res => {
      if (res) {
        this.newSetingupdate();
      }
    });
  }

  ngOnInit(): void {
    this.listLoad();
    this.as.langChange.subscribe(currLang => {
      if (currLang) {
        this.settings = currLang === 'en' ? settingsEN : settingsDE;
        this.newSetingupdate();
      }
    });
  }
  newSetingupdate() {
    let orderItem = JSON.parse(localStorage.getItem('hideColumnCounterPartyOrder')) || [];
    let settigItem = JSON.parse(localStorage.getItem('hideColumnCounterParty')) || [];
    this.hideCols = '';
    let i = 0;
    for (const colI in this.settings.columns) {
      if (settigItem && settigItem.indexOf(colI) > -1) {
        this.settings.columns[colI].isSelected = false
      } else {
        this.settings.columns[colI].isSelected = true
      }
      if (!this.settings.columns[colI].isSelected) {
        i++;
        this.hideCols += `hd-cp-${i} `;
      } else {
        i++;
      }
      this.settings.columns[colI].orderPosition = orderItem.map(e => e.title).indexOf(colI);
    }
    console.log(this.settings)

    this.settings = Object.assign({}, this.settings);
  }

  listLoad() {
    this.listSUPPLIER = [];
    this.listCONSUMER = [];
    this.cs.getList().subscribe((data: any) => {
      data = data.map(el => {
        return {
          ...el,
          typePage: 2
        }
      });
      this.listSUPPLIER = data.filter(e => { return e.keyCode != null && e.keyCode === 1 });
      this.listCONSUMER = data.filter(e => { return e.keyCode != null && e.keyCode === 2 });
      this.listUnassigned = data.filter(e => { return e.keyCode != null && e.keyCode === 0 });

      this.bothAdded = data.filter(e => { return e.keyCode == null });
      this.sourceSUPPLIER.load(this.listSUPPLIER);
      this.sourceCONSUMER.load(this.listCONSUMER);
      this.sourcebothAdded.load(this.bothAdded);
      this.sourceUnassigned.load(this.listUnassigned);
    });
  }


  onDeleteConfirm(event): void {
    // if (window.confirm('Are you sure you want to delete?')) {
    //   event.confirm.resolve();
    // } else {
    //   event.confirm.reject();
    // }
  }

  onRowSelected(event): void {
    // this.router.navigate(['main/counter-party/view', event?.data?.id]);
  }

  showFilter(ev) {
    switch (ev) {
      case 'all':
        localStorage.setItem('hideColumnCounterParty', JSON.stringify([]));
        this.cs.hideColumnSub.next(true);
        break;
      case 'custom':
        this.dialogService.open(FilterViewComponent, {
          context: {
            data: null,
          }, dialogClass: 'model-filterview',
        });
        break;

      default:
        break;
    }
  }


  newClicked(id?: any): void {
    this.dialogService.open(AddComponent, {
      context: {
        data: id,
      }, dialogClass: 'model-full',
    }).onClose.subscribe(res => {
      if (res || res === 'submit') {
        // this.listLoad();
      }
    });;
  }

  ngOnDestroy() {
    this.listSUPPLIER = [];
    this.listCONSUMER = [];
  }
}

@Component({
  //   template: `{{this.rowData?.id}}<button class="action" [nbContextMenu]="threeDots" nbContextMenuTag="{{rowData?.id}}">
  //   <img src="../../../../assets/table-icon/3-dots.svg" alt="Action Menu" class="action">
  // </button>`,
  template: `<nb-select (selectedChange)="clickType($event)" class="three-dot">
<nb-option *ngFor="let type of threeDots" [value]="type.title" class="custom-menu"> {{ type.title }}</nb-option>
</nb-select>`,
  styleUrls: ['./list.component.scss'],

})
export class CustomRenderComponent implements ViewCell, OnInit, OnDestroy {
  threeDots = [{ title: 'View' }, { title: 'Edit' }, { title: 'Delete' }];

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;


  constructor(private toastrService: NbToastrService, @Inject(NB_WINDOW) private window, private dialogService: NbDialogService, private nbMenuService: NbMenuService, public router: Router, private ms: ContactsService) {
    const data = {
      ...this.threeDots,
      commonID: this.value
    }

  }

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  viewClicked(): void {
  }

  editClicked(id: any): void {
    this.dialogService.open(AddComponent, {
      context: {
        data: id,
      }, dialogClass: 'model-full',
    });
  }

  deleteClicked(id: string) {
    this.ms.delete(id).subscribe(data => {
      console.log(data);
      this.toastrService.success('Counter Party deleted succefully. ', 'Delete', { duration: 4000 });
      this.ms.popupOpenInListPage.next('list');
    }, error => {
      this.toastrService.danger(error?.error?.details, 'Error', { duration: 4000 });
    });

  }

  clickType(ev) {
    switch (ev) {
      case 'View':
        this.router.navigate(['main/counter-party/view', this.rowData?.id]);
        break;
      case 'Edit':
        // this.router.navigate(['main/materials/edit', this.rowData?.id]);
        this.editClicked(this.rowData?.id);
        break;
      case 'Delete':
        this.deleteClicked(this.rowData?.id);
        break;
      default:
        break;
    }
  }

  ngOnDestroy() {
  }

}
