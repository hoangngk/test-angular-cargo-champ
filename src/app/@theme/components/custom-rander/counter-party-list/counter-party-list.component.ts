import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService, NbMenuService, NbToastrService, NB_WINDOW } from '@nebular/theme';
import { ViewCell } from 'ng2-smart-table';
import { Subscription } from 'rxjs';
import { ContactsService } from '../../../../core/services/contacts.service';
import { MaterialService } from '../../../../core/services/material.service';
import { AddComponent } from '../../../../main/counter-party/modal/add/add.component';

@Component({
  selector: 'ngx-counter-party-list',
  templateUrl: './counter-party-list.component.html',
  styleUrls: ['./counter-party-list.component.scss']
})
export class CounterPartyListComponent implements OnInit {

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
