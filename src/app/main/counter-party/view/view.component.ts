import { ActivatedRoute, Params, Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { settingsDE, settingsEN } from '../../../../assets/i18n/column-setting-places.constant';
import { AuthService } from '../../../core/services';
import { ContactsService } from '../../../core/services/contacts.service';
import { AddComponent } from '../modal/add/add.component';


import { Component, Input, OnInit } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { settingsDESUBTABLE, settingsENSUBTABLE } from '../../../../assets/i18n/column-setting-sub-table.constant';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

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

export interface NbFilterable {
  filter(filterRequest: string);
}
@Component({
  selector: 'ngx-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  counterType = [
    { title: 'All', value: ['SUPPLIER', 'CONSUMER'], keyCode: 0 },
    { title: 'SUPPLIER', value: ['SUPPLIER'], keyCode: 1 },
    { title: 'CONSUMER', value: ['CONSUMER'], keyCode: 2 }
  ];
  settings = settingsEN;
  settingsSubTable = settingsENSUBTABLE;
  routeID;
  viewDetails;
  private readonly filterRequest = new BehaviorSubject<string>('');

  weeks = [
    { title: 'Monday', value: 1 },
    { title: 'Tuesday', value: 2 },
    { title: 'Wednesday', value: 3 },
    { title: 'Thursday', value: 4 },
    { title: 'Friday', value: 5 },
    { title: 'Saturday', value: 6 },
    { title: 'Sunday', value: 7 }
  ];
  times = [
    { value: "00:00:00", title: "00:00 AM" },
    { value: "00:30:00", title: "00:30 AM" },
    { value: "01:00:00", title: "01:00 AM" },
    { value: "01:30:00", title: "01:30 AM" },
    { value: "02:00:00", title: "02:00 AM" },
    { value: "02:30:00", title: "02:30 AM" },
    { value: "03:00:00", title: "03:00 AM" },
    { value: "03:30:00", title: "03:30 AM" },
    { value: "04:00:00", title: "04:00 AM" },
    { value: "04:30:00", title: "04:30 AM" },
    { value: "05:00:00", title: "05:00 AM" },
    { value: "05:30:00", title: "05:30 AM" },
    { value: "06:00:00", title: "06:00 AM" },
    { value: "06:30:00", title: "06:30 AM" },
    { value: "07:00:00", title: "07:00 AM" },
    { value: "07:30:00", title: "07:30 AM" },
    { value: "08:00:00", title: "08:00 AM" },
    { value: "08:30:00", title: "08:30 AM" },
    { value: "09:00:00", title: "09:00 AM" },
    { value: "09:30:00", title: "09:30 AM" },
    { value: "10:00:00", title: "10:00 AM" },
    { value: "10:30:00", title: "10:30 AM" },
    { value: "11:00:00", title: "11:00 AM" },
    { value: "11:30:00", title: "11:30 AM" },
    { value: "12:00:00", title: "12:00 PM" },
    { value: "12:30:00", title: "12:30 PM " },
    { value: "13:00:00", title: "01:00 PM " },
    { value: "13:30:00", title: "01:30 PM " },
    { value: "14:00:00", title: "02:00 PM " },
    { value: "14:30:00", title: "02:30 PM " },
    { value: "15:00:00", title: "03:00 PM " },
    { value: "15:30:00", title: "03:30 PM " },
    { value: "16:00:00", title: "04:00 PM " },
    { value: "16:30:00", title: "04:30 PM " },
    { value: "17:00:00", title: "05:00 PM " },
    { value: "17:30:00", title: "05:30 PM " },
    { value: "18:00:00", title: "06:00 PM " },
    { value: "18:30:00", title: "06:30 PM " },
    { value: "19:00:00", title: "07:00 PM " },
    { value: "19:30:00", title: "07:30 PM " },
    { value: "20:00:00", title: "08:00 PM " },
    { value: "20:30:00", title: "08:30 PM " },
    { value: "21:00:00", title: "09:00 PM " },
    { value: "21:30:00", title: "09:30 PM " },
    { value: "22:00:00", title: "10:00 PM " },
    { value: "22:30:00", title: "10:30 PM " },
    { value: "23:00:00", title: "11:00 PM " },
    { value: "23:30:00", title: "11:30 PM " }
  ];
  constructor(private router: Router, private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>, private cs: ContactsService, private as: AuthService, public actRoute: ActivatedRoute, private dialogService: NbDialogService, private toastrService: NbToastrService) {
    this.actRoute.paramMap.subscribe((params: Params) => {
      this.routeID = params.params.id;
    });
    this.as.langChange.subscribe(currLang => {
      if (currLang) {
        this.settings = currLang === 'en' ? settingsEN : settingsDE;
        this.settingsSubTable = currLang === 'en' ? settingsENSUBTABLE : settingsDESUBTABLE;
      } else {
        this.settings = settingsEN;
        this.settingsSubTable = settingsENSUBTABLE;
      }
    });
    // this.dataSource = this.dataSourceBuilder.create(this.results);
  }

  ngOnInit(): void {
    this.allColumns = [this.customColumn, ...this.defaultColumns];
    // 'ead45816-f8ef-445b-9322-bdf893064a9c'

    this.cs.getID(this.routeID).subscribe(data => {
      this.viewDetails = data[0];
    });
    this.cs.getTreeTable(this.routeID).subscribe(data => {
      data = data.map(e => {
        return {
          data: { ...e, kind: 'dir', price: e.price, type: 'locations' },
          children: e.children.map(ec => {
            return { data: { ...ec, ...ec.data, contacts: e.contacts, hqAddress: e.addresses[0].street, city: e.addresses[0].city, type: 'materials' } }
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
    this.router.navigate(['../../main/counter-party']);
  }

  deleteClicked(id: string) {
    this.cs.delete(id).subscribe(data => {
      console.log(data);
      this.toastrService.success('Counter Party deleted succefully. ', 'Delete', { duration: 4000 });
      // this.cs.popupOpenInListPage.next('list');
      this.router.navigate(['../../main/counter-party']);
    }, error => {
      this.toastrService.danger(error?.error?.details, 'Error', { duration: 4000 });
    });
  }


  customColumn = 'name';
  defaultColumns = ['price', 'city', 'hqAddress', 'contacts'];
  allColumns = [];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;




  updateSort(sortRequest: NbSortRequest): void {
    debugger
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  // filter specific column
  // filter(ev:any){
  //   debugger
  // }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter(filterValue);
  }
  

  filter(searchQuery: string) {
    this.filterRequest.next(searchQuery);
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






import { Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Pipe({
  name: 'addressFormate'
})
export class addressFormatePipe implements PipeTransform {

  transform(value: any[], args: number): unknown {
    if (!value) {
      return null;
    }
    return value;
  }

}


@Pipe({
  name: 'getTitlePipe'
})
export class GetTitlePipe implements PipeTransform {

  transform(value: any[], args: number): unknown {
    if (!value) {
      return null;
    }
    return value?.filter((optionValue: any) => optionValue.value === args)[0]?.title;
  }

}
