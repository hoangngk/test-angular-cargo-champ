import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService, NbMenuService, NbToastrService, NB_WINDOW } from '@nebular/theme';
import { ViewCell } from 'ng2-smart-table';
import { Subscription } from 'rxjs';
import { MaterialService } from '../../../../core/services/material.service';

@Component({
  selector: 'ngx-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements ViewCell, OnInit, OnDestroy {
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
    //remove comment when you open model add trip
    // this.dialogService.open(AddComponent, {
    //   context: {
    //     data: id,
    //   }, dialogClass: 'model-full',
    // });
  }

  deleteClicked(id: string) {
    // this.ms.deleteData(id).subscribe(data => {
    //   console.log(data);
    //   this.ms.popupOpenInListPage.next('list');
    //   this.toastrService.success('Material deleted succefully. ', 'Delete', { duration: 4000 });
    // }, error => {
    //   this.toastrService.danger(error?.error?.details, 'Error', { duration: 4000 });
    // });
  }

  clickType(ev) {
    switch (ev) {
      case 'View':
        this.router.navigate(['main/materials/view', this.rowData?.id]);
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