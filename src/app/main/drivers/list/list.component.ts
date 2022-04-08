import { AfterViewInit, Component, Inject, Input, OnDestroy, OnInit, Pipe, PipeTransform } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { ViewCell } from 'ng2-smart-table';
import { NbDialogService, NbMenuService, NbToastrService, NB_WINDOW } from '@nebular/theme';
import { Router } from '@angular/router';
import { AddComponent } from '../modal/add/add.component';
import { FilterViewComponent } from '../modal/filter-view/filter-view.component';
import { Observable, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../core/services';
import { settingsDE, settingsEN } from '../../../../assets/i18n/column-setting-drivers.constant';
import { OrdersService } from '../../../core/services/orders.service';
import { DatePipe } from '@angular/common';
import { DriversService } from '../../../core/services/drivers.service';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [DatePipe]
})
export class ListComponent implements OnInit, OnDestroy {
  hideCols = "hd-oao-1";
  source: LocalDataSource = new LocalDataSource();
  roadmaps$: Observable<any[]>;
  count = 0;

  settings = settingsEN;
  constructor(public datePipe: DatePipe, public orderTitleChange: GetOrderTypeStatusTitlePipe, public translate: TranslateService, private service: SmartTableData, private dialogService: NbDialogService,
    private as: AuthService, private ds: DriversService, public router: Router,
  ) {


    this.ds.popupOpenInListPage.subscribe(res => {
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
    this.ds.hideColumnSub.subscribe(res => {
      if (res) {
        this.newSetingupdate();
      }
    });
  }

  ngOnInit(): void {
    // this.listLoad();
    this.as.langChange.subscribe(currLang => {
      if (currLang) {

        this.settings = currLang === 'en' ? settingsEN : settingsDE;
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
    let settigItem = JSON.parse(localStorage.getItem('hideColumnOfferAndOrders'));
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
        this.hideCols += `hd-oao-${i} `;
      } else {
        i++;
      }
    }
    this.settings = Object.assign({}, this.settings);


  }

  listLoad() {
    this.ds.getList().subscribe(data => {

      this.source.load(data.map(el => {
        return {
          ...el,
          typePage: 1,
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

  onRowSelected(event, c): void {
    // this.router.navigate(['main/materials/view', event?.data?.id]);
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
    });

  }

  showFilter(ev) {
    switch (ev) {
      case 'all':
        localStorage.setItem('hideColumnOfferAndOrders', JSON.stringify([]));
        this.ds.hideColumnSub.next(true);
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
  ngOnDestroy() {
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
  callCount = 1;
  subscription: Subscription;


  constructor(private toastrService: NbToastrService, @Inject(NB_WINDOW) private window, private dialogService: NbDialogService, private nbMenuService: NbMenuService, public router: Router, private ds: DriversService) {
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
    this.ds.deleteData(id).subscribe(data => {
      console.log(data);
      this.ds.popupOpenInListPage.next('list');
      this.toastrService.success('Orders deleted succefully. ', 'Delete', { duration: 4000 });
    }, error => {
      this.toastrService.danger(error?.error?.details, 'Error', { duration: 4000 });
    });
  }

  clickType(ev) {
    switch (ev) {
      case 'View':
        this.router.navigate(['main/orders/view', this.rowData?.id]);
        break;
      case 'Edit':
        // this.router.navigate(['main/orders/edit', this.rowData?.id]);
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

// Material-Group-Cell

@Component({
  template: `
  <span class="material-span" [class]="className"> {{renderValue}} </span>
  `,
  styleUrls: ['./list.component.scss'],

})
export class OrdersGroupCellRenderComponent implements ViewCell, OnInit {

  renderValue: string;
  className: string;

  @Input() value: any;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.value;
    this.className = this.value.toLowerCase();
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