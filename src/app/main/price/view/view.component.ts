import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { settingsDE, settingsEN } from '../../../../assets/i18n/column-setting-places.constant';
import { AuthService } from '../../../core/services';
import { PriceService } from '../../../core/services/price.service';
import { AddComponent } from '../modal/add/add.component';

@Component({
  selector: 'ngx-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  viewDetails;
  settings;
  routeID;
  constructor(public router: Router,private ps: PriceService, public actRoute: ActivatedRoute, private as: AuthService, private dialogService: NbDialogService) {
    this.source.load([{
      'id': 1,
      'contacts': 'Dibbert-Abshire',
      'name': 'Silvanus',
      'shortDesc': 'Postop vaginal prolapse',
    },
    ],
    );
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
    this.ps.getID(this.routeID).subscribe(data => {
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

  editClicked(): void {
    this.dialogService.open(AddComponent, {
      context: {
        data: this.routeID,
      }, dialogClass: 'model-full',
    });
  }

  deleteClicked(id: string) {
   
  }

  redirectToMain(){
    this.router.navigate(['../../main/prices']);
  }
}
