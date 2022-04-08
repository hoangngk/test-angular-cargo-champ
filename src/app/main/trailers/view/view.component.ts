import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { settingsDE, settingsEN } from '../../../../assets/i18n/column-setting-counter-party.constant';
import { AuthService } from '../../../core/services';
import { MaterialService } from '../../../core/services/material.service';
import { VehiclesService } from '../../../core/services/vehicles.service';
import { AddComponent } from '../modal/add/add.component';

@Component({
  selector: 'ngx-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  viewDetails: any;
  settings;
  routeID;
  constructor(private router: Router, private dialogService: NbDialogService, private vs: VehiclesService, public actRoute: ActivatedRoute, private as: AuthService, private toastrService: NbToastrService) {

    this.actRoute.paramMap.subscribe((params: Params) => {
      this.routeID = params.params.matId;
    });
    this.as.langChange.subscribe(currLang => {
      if(currLang){
        this.settings = currLang === 'en' ? settingsEN : settingsDE;
      }
    });
  }

  ngOnInit(): void {
    this.vs.getID(this.routeID).subscribe(data => {

      // data[0].counterparty = data[0].counterparty.map((e: any) => {
      //   return {
      //     ...e,
      //     typePage: 2
      //   }
      // });
      this.viewDetails = data[0];
      // this.source.load(this.viewDetails?.counterparty);
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
    this.vs.delete(id).subscribe(data => {
      console.log(data);
      this.toastrService.success('Vehicle deleted succefully. ', 'Delete', { duration: 4000 });
      // this.vs.popupOpenInListPage.next('list');
      this.router.navigate(['../../main/vehicles']);
    });
  }

  redirectToMain(){
    this.router.navigate(['../../main/vehicles']);
  }

  editClicked(): void {
    this.dialogService.open(AddComponent, {
      context: {
        data: this.routeID,
      }, dialogClass: 'model-full',
    });
  }

}
