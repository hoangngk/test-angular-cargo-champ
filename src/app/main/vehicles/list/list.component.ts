import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { ViewCell } from 'ng2-smart-table';
import { NbDialogService, NbMenuService, NbToastrService, NB_WINDOW } from '@nebular/theme';
import { Router } from '@angular/router';
import { AddComponent } from '../modal/add/add.component';
import { FilterViewComponent } from '../modal/filter-view/filter-view.component';
import { Observable, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { MaterialService } from '../../../core/services/material.service';
import { AuthService } from '../../../core/services';
import { VehiclesService } from '../../../core/services/vehicles.service';
import { settingsEN, settingsDE } from '../../../../assets/i18n/column-setting-vehicles.constant';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {

  source: LocalDataSource = new LocalDataSource();
  roadmaps$: Observable<any[]>;
  count = 0;
  settings = settingsEN;
  hideCols = "hd-ms-1"
  constructor(private translateService: TranslateService, private service: SmartTableData, private dialogService: NbDialogService,
    private as: AuthService, private vs: VehiclesService, public router: Router,
  ) {
    // const data = this.service.getData();

    this.vs.popupOpenInListPage.subscribe(res => {
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
    this.vs.hideColumnSub.subscribe(res => {
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
    let settigItem = JSON.parse(localStorage.getItem('hideColumnVehicles'));
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
        this.hideCols += `hd-ms-${i} `;
      } else {
        i++;
      }
    }
    this.settings = Object.assign({}, this.settings);
  }

  listLoad() {
    this.vs.getList().subscribe(data => {
      this.source.load(data.map(el => {
        return {
          ...el,
          typePage: 4,
          vehicleCategory: el.vehicleCategory.name
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
    // this.router.navigate(['main/vehicles/view', event?.data?.id]);
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
        localStorage.setItem('hideColumnVehicles', JSON.stringify([]));
        this.vs.hideColumnSub.next(true);
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


  constructor(private toastrService: NbToastrService, @Inject(NB_WINDOW) private window, private dialogService: NbDialogService, private nbMenuService: NbMenuService, public router: Router, private ms: MaterialService) {
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
    this.ms.deleteData(id).subscribe(data => {
      console.log(data);
      this.ms.popupOpenInListPage.next('list');
      this.toastrService.success('Vehicle deleted succefully. ', 'Delete', { duration: 4000 });
    });

  }

  clickType(ev) {
    switch (ev) {
      case 'View':
        this.router.navigate(['main/vehicles/view', this.rowData?.id]);
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

// Material-Group-Cell

@Component({
  template: `
  <span class="cehicles-span" [class]="className"> {{renderValue}} </span>
  `,
  styleUrls: ['./list.component.scss'],

})
export class VehiclesGroupCellRenderComponent implements ViewCell, OnInit {

  renderValue: string;
  className: string;

  @Input() value: any;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.value;
    this.className = this.value.toLowerCase();
  }

}
