import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { AuthService } from '../../../core/services';
import { settingsDE, settingsEN, tourTypesEN, tourStatusEN, tourTypesDE, tourStatusDE } from '../../../../assets/i18n/column-setting-tours.constant';
import { OrdersService } from '../../../core/services/orders.service';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { AddComponent } from '../modal/add/add.component';

@Component({
  selector: 'ngx-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  viewDetails;
  settings: any = settingsEN;
  tourTypes = tourTypesEN;
  tourStatus = tourStatusEN;
  routeID;
  constructor(private toastrService: NbToastrService, public router: Router, private as: AuthService, private os: OrdersService, public actRoute: ActivatedRoute, private dialogService: NbDialogService) {
    this.actRoute.paramMap.subscribe((params: Params) => {
      this.routeID = params.params.matId;
    });
    this.as.langChange.subscribe(currLang => {
      if (currLang) {
        this.settings = currLang === 'en' ? settingsEN : settingsDE;
        this.tourTypes = currLang === 'en' ? tourTypesEN : tourTypesDE;
        this.tourStatus = currLang === 'en' ? tourStatusEN : tourStatusDE;
      }
    });
  }

  ngOnInit(): void {
    this.os.getID(this.routeID).subscribe(data => {
      this.viewDetails = data[0];
    });
  }


  onDeleteConfirm(event): void {
    // if (window.confirm('Are you sure you want to delete?')) {
    //   event.confirm.resolve();
    // } else {
    //   event.confirm.reject();
    // }
  }
  deleteClicked(id: string) {
    this.os.deleteData(id).subscribe(data => {
      console.log(data);
      this.toastrService.success('Order deleted succefully. ', 'Delete', { duration: 4000 });
      // this.cs.popupOpenInListPage.next('list');
      this.router.navigate(['../../main/orders']);
    });
  }

  editClicked(): void {
    this.dialogService.open(AddComponent, {
      context: {
        data: this.routeID,
      }, dialogClass: 'model-full',
    });
  }

  redirectToMain() {
    this.router.navigate(['../../main/orders']);
  }

}
