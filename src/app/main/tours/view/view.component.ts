import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { tourStatusDE, tourStatusEN } from '../../../../assets/i18n/column-setting-tours.constant';
import { settingsDE, settingsEN, tourTypesEN, tourTypesDE } from '../../../../assets/i18n/column-setting-trip.constant';
import { AuthService } from '../../../core/services';
import { ToursService } from '../../../core/services/tours.service';
import { AddComponent } from '../modal/add/add.component';

@Component({
  selector: 'ngx-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  tourTypes = tourTypesEN;
  tourStatus = tourStatusEN;
  settings;
  routeID;
  viewDetails;
  constructor(private router: Router, private toastrService: NbToastrService, private ts: ToursService, private as: AuthService, public actRoute: ActivatedRoute, private dialogService: NbDialogService) {
    this.actRoute.paramMap.subscribe((params: Params) => {
      this.routeID = params.params.id;
    });
    this.as.langChange.subscribe(currLang => {
      if (currLang) { }
      this.settings = currLang === 'en' ? settingsEN : settingsDE;
      this.tourTypes = currLang === 'en' ? tourTypesEN : tourTypesDE;
      this.tourStatus = currLang === 'en' ? tourStatusEN : tourStatusDE;
    });
    this.ts.popupOpenInListPage.subscribe(res => {
      if (res) {
        switch (res.split('@')[0]) {
          case 'list':
            this.ngOnInit();                    //new click with id means edit
            break;
          default:
            break;
        }
      }
    });
  }

  ngOnInit(): void {
    this.ts.getID(this.routeID, 'view').subscribe(data => {
      this.viewDetails = data[0];
      this.source.load(this.viewDetails);
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
    this.ts.delete(id).subscribe(data => {
      console.log(data);
      this.toastrService.success('Tours deleted succefully. ', 'Delete', { duration: 4000 });
      // this.cs.popupOpenInListPage.next('list');
      this.router.navigate(['../../main/tours']);
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
    this.router.navigate(['../../main/tours']);
  }

}



