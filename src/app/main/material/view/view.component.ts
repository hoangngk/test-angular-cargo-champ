import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NbDialogService, NbSortDirection, NbSortRequest, NbToastrService, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { settingsDESUBTABLE, settingsENSUBTABLE } from '../../../../assets/i18n/column-setting-sub-table.constant';
import { AuthService } from '../../../core/services';
import { MaterialService } from '../../../core/services/material.service';
import { AddComponent } from '../modal/add/add.component';

interface FSEntry {
  id?: string
  name: string
  shortDesc?: string
  contacts?: string
  actions?: number
  kind: string
  type: string
  hqAddress?: string
  city?: string
}

@Component({
  selector: 'ngx-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  dataSource: NbTreeGridDataSource<FSEntry>;
  settingsSubTable: any = settingsENSUBTABLE;

  settings;
  routeID;
  viewDetails;

  customColumn = 'name';
  defaultColumns = ['price', 'city', 'hqAddress', 'contacts'];
  allColumns = [];


  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  constructor(private router: Router, private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>, private ms: MaterialService, private as: AuthService, public actRoute: ActivatedRoute, private dialogService: NbDialogService, private toastrService: NbToastrService) {
    this.actRoute.paramMap.subscribe((params: Params) => {
      this.routeID = params.params.matId;
    });
    this.as.langChange.subscribe(currLang => {
      // this.settings = currLang === 'en' ? settingsEN : settingsDE;
      if (currLang) {
        this.settingsSubTable = currLang === 'en' ? settingsENSUBTABLE : settingsDESUBTABLE;
      }
    });
  }

  ngOnInit(): void {
    this.allColumns = [this.customColumn, ...this.defaultColumns];

    this.ms.getMaterialID(this.routeID).subscribe(data => {
      this.viewDetails = data[0];
      this.source.load(this.viewDetails?.materials);
    });
    this.ms.getTreeTable(this.routeID).subscribe(data => {
      data = data.map(e => {
        return {
          data: { ...e, kind: 'dir', name: e.supplier_name, contacts: null, type: 'counter-party' },
          children: e.children.map(ec => {
            return { data: { ...ec, ...ec.data, contacts: ec.contacts ? ec.contacts[0].name : null, city: ec.addresses ? ec.addresses[0].city : null, hqAddress: ec.addresses  ? ec.addresses[0].street : null, type: 'counter-party', } }
          }),
        }
      });


      this.dataSource = this.dataSourceBuilder.create(data);
    });
  }

  onDeleteConfirm(event): void {
    // if (window.confirm('Are you sure you want to delete?')) {
    //   event.confirm.resolve();
    // } else {
    //   event.confirm.reject();
    // }
  }

  editClicked(): void {
    this.dialogService.open(AddComponent, {
      context: {
        data: this.routeID,
      }, dialogClass: 'model-full',
    });
  }

  redirectToMain() {
    this.router.navigate(['../../main/materials']);
  }

  deleteClicked(id: string) {
    this.ms.deleteData(id).subscribe(data => {
      console.log(data);
      this.toastrService.success('Material deleted succefully. ', 'Delete', { duration: 4000 });
      // this.ms.popupOpenInListPage.next('list');
      this.router.navigate(['../../main/materials']);
    }, error => {
      this.toastrService.danger(error?.error?.details, 'Error', { duration: 4000 });
    });
  }


  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter(filterValue);
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  redirectLink(id: string, type: string): void {
    this.router.navigate(['main/' + type + '/view', id]);
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }

}


@Component({
  selector: 'ngx-fs-icon-tree',
  template: `
  <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
  </nb-tree-grid-row-toggle>
  <ng-template #fileIcon>
    <img src="../../../../assets/icon/vector-drop.png" alt="Icon" *ngIf="expanded">
    <img src="../../../../assets/icon/vector-up.png" alt="Icon" *ngIf="!expanded">
  </ng-template>
  `,
})
export class FsIconComponent {
  @Input() shortDesc: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.shortDesc === 'dir';
  }
}