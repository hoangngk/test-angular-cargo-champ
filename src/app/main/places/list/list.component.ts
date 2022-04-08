import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService, NbMenuService } from '@nebular/theme';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { settingsDE, settingsEN } from '../../../../assets/i18n/column-setting-places.constant';
import { AuthService } from '../../../core/services';
import { LocationsService } from '../../../core/services/locations.service';
import { AddComponent } from '../modal/add/add.component';
import { FilterViewComponent } from '../modal/filter-view/filter-view.component';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  sourceLoading: LocalDataSource = new LocalDataSource();
  sourceUnLoading: LocalDataSource = new LocalDataSource();
  sourcebothAdded: LocalDataSource = new LocalDataSource();
  sourceUnassigned: LocalDataSource = new LocalDataSource();
  settings = settingsEN;
  listLoading = [];
  listUnLoading = [];
  listUnassigned = [];
  bothAdded = [];
  hideCols = "hd-ls-1"
  constructor(public router: Router, private dialogService: NbDialogService, private as: AuthService, private ls: LocationsService) {

    this.ls.popupOpenInListPage.subscribe(res => {
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
    this.ls.hideColumnSub.subscribe(res => {
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
    let settigItem = JSON.parse(localStorage.getItem('hideColumnLocation')) || [];
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
        this.hideCols += `hd-ls-${i} `;
      } else {
        i++;
      }
    }
    this.settings = Object.assign({}, this.settings);
  }

  listLoad() {
    this.listLoading = [];
    this.listUnLoading = [];

    this.ls.getList().subscribe((data: any) => {
      data = data.map(el => {
        return {
          ...el,
          typePage: 3,
          contactsName : el.contacts && el.contacts?.length > 0  ? el.contacts[0].name : null,
          contactsID : el.contacts && el.contacts?.length > 0  ? el.contacts[0].id : null
        }
      });
      this.listLoading = data.filter(e => { return e.keyCode != null && (e.keyCode === 1) });
      this.listUnLoading = data.filter(e => { return e.keyCode != null && e.keyCode === 2 });
      this.listUnassigned = data.filter(e => { return e.keyCode != null && e.keyCode === 0 });
      this.bothAdded = data.filter(e => { return e.keyCode != null && (e.keyCode === 3) });;
      this.sourceLoading.load(this.listLoading);
      this.sourceUnLoading.load(this.listUnLoading);
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
    // this.router.navigate(['main/locations/view', event?.data?.id]);
  }

  showFilter(ev) {
    switch (ev) {
      case 'all':
        localStorage.setItem('hideColumnLocation', JSON.stringify([]));
        this.ls.hideColumnSub.next(true);
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
        data: null,
      }, dialogClass: 'model-full',
    });
  }
}

@Component({
  template: `<a [nbContextMenu]="threeDots"><img src="../../../../assets/table-icon/3-dots.svg" alt="Action Menu" class="action"></a>`,
  styleUrls: ['./list.component.scss'],

})
export class CustomRenderComponent implements ViewCell, OnInit {
  threeDots = [{ title: 'View', link: 'view' }, { title: 'Edit', link: 'edit' }, { title: 'Delete', link: 'delete' }];

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  constructor(private nbMenuService: NbMenuService, public router: Router) {
    this.nbMenuService.onItemClick()
      // .pipe(
      //   filter(({ tag }) => tag === 'my-context-menu'),
      //   map(({ item: { title } }) => title),
      // )
      .subscribe(title => {
        switch (title.item.link) {
          case 'view':
            this.router.navigate(['main/locations/view']);
            break;
          case 'edit':
            this.router.navigate(['main/locations/edit']);
            break;
          case 'delete':
            // this.router.navigate(['main/locations/edit'])
            break;
          default:
            break;
        }
      });
  }

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  viewClicked(): void {
  }

}
