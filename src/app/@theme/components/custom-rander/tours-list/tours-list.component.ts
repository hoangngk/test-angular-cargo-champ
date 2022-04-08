import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService, NbMenuService, NbToastrService, NB_WINDOW } from '@nebular/theme';
import { ViewCell } from 'ng2-smart-table';
import { Subscription } from 'rxjs';
import { MaterialService } from '../../../../core/services/material.service';
import { ToursService } from '../../../../core/services/tours.service';
import { AddComponent } from '../../../../main/tours/modal/add/add.component';
// import { AddComponent } from '../../../../main/tours/modal/add/add.component';

@Component({
  selector: 'ngx-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.scss']
})
export class ToursListComponent implements ViewCell, OnInit, OnDestroy {
  threeDots = [{ title: 'View' }, { title: 'Edit' }, { title: 'Delete' }];

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;
  callCount = 1;
  subscription: Subscription;


  constructor(private toastrService: NbToastrService, @Inject(NB_WINDOW) private window, private dialogService: NbDialogService, private nbMenuService: NbMenuService, public router: Router, private ts: ToursService) {
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
    this.ts.delete(id).subscribe(data => {
      console.log(data);
      this.ts.popupOpenInListPage.next('list');
      this.toastrService.success('Tour deleted succefully. ', 'Delete', { duration: 4000 });
    }, error => {
      this.toastrService.danger(error?.error?.details, 'Error', { duration: 4000 });
    });

  }

  clickType(ev) {
    switch (ev) {
      case 'View':

        this.router.navigate(['main/tours/view', this.rowData?.id]);
        break;
      case 'Edit':
        // this.router.navigate(['main/tours/edit', this.rowData?.id]);
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