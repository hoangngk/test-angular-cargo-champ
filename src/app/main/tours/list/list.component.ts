import { Component, Inject, Input, OnDestroy, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService, NbMenuService, NbToastrService, NB_WINDOW } from '@nebular/theme';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { ContactsService } from '../../../core/services/contacts.service';
import { AddComponent } from '../modal/add/add.component';
import { FilterViewComponent } from '../modal/filter-view/filter-view.component';
import { ToursService } from '../../../core/services/tours.service';
import { AuthService } from '../../../core/services';
import { settingsDE, settingsEN, tourStatusDE, tourStatusEN, tourTypesDE, tourTypesEN } from '../../../../assets/i18n/column-setting-tours.constant';
@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tourTypes = tourTypesEN;
  tourStatus = tourStatusEN;
  source: LocalDataSource = new LocalDataSource();
  settings: any = settingsEN;
  hideCols = "hd-tp-1";
  constructor(public orderTitleChange: GetOrderTypeStatusTitlePipe, private dialogService: NbDialogService, private ts: ToursService, private as: AuthService) {
    // const data = this.service.getData();
    this.ts.popupOpenInListPage.subscribe(res => {
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
    this.ts.hideColumnSub.subscribe(res => {

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
        this.tourTypes = currLang === 'en' ? tourTypesEN : tourTypesDE;
        this.tourStatus = currLang === 'en' ? tourStatusEN : tourStatusDE;
        
        this.newSetingupdate();
        this.listLoad();
        // this.translate.get(['ORDERADDEDITTPAGE.orderType', 'ORDERADDEDITTPAGE.orderStatus']).subscribe(translations => {
        //   this.orderType = translations['ORDERADDEDITTPAGE.orderType'];
        //   this.orderStatus = translations['ORDERADDEDITTPAGE.orderStatus'];
        // });
      }
    });
  }

  newSetingupdate() {
    let settigItem = JSON.parse(localStorage.getItem('hideColumnTours'));
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
        this.hideCols += `hd-tp-${i} `;
      } else {
        i++;
      }
    }
    this.settings = Object.assign({}, this.settings);
  }

  listLoad() {
    this.ts.getList().subscribe(data => {
      this.source.load(data.map(el => {
        return {
          ...el,
          typePage: 1,
          type: this.orderTitleChange.transform(this.tourTypes, el.type),
          status: this.orderTitleChange.transform(this.tourStatus, el.status),
          loadingId : el.loadingLocation ? el.loadingLocation.id : null ,
          loadingName : el.loadingLocation ? el.loadingLocation.name : null,
          unloadingId : el.unloadingLocation ? el.unloadingLocation.id : null,
          unloadingName : el.unloadingLocation ? el.unloadingLocation.name : null,
          materialId : el.material ? el.material.id : null,
          materialName : el.material ? el.material.name : null,
        }
      }));
    });
  }


  onDeleteConfirm(event): void {
    // if (window.confirm('Are you sure you want to delete?')) {
    //   event.confirm.resolve();
    // } else {
    //   event.confirm.reject();
    // }
  }

  showFilter(ev) {
    switch (ev) {
      case 'all':
        localStorage.setItem('hideColumnTours', JSON.stringify([]));
        this.ts.hideColumnSub.next(true);
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
        this.listLoad();
      }
    });;
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
      this.toastrService.success('Tours deleted succefully. ', 'Delete', { duration: 4000 });
      this.ms.popupOpenInListPage.next('list');
    });

  }

  clickType(ev) {
    switch (ev) {
      case 'View':
        this.router.navigate(['main/tours/view', this.rowData?.id]);
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


@Pipe({
  name: 'getOrderTypeStatusTitlePipe'
})
export class GetOrderTypeStatusTitlePipe implements PipeTransform {

  transform(value: any[], args: string): unknown {
    if (!value) {
      return null;
    }

    return value?.filter((optionValue: any) => optionValue.const === args)[0]?.description;
  }

}