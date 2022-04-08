import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { LocationsService } from '../../../../core/services/locations.service';
import { MaterialService } from '../../../../core/services/material.service';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { VehiclesRoutingModule } from '../../vehicles-routing.module';
import { VehiclesService } from '../../../../core/services/vehicles.service';
@Component({
  selector: 'ngx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit, OnDestroy {

  vehiclesForm: FormGroup;
  locationForm: FormGroup;
  submitted = false;


  options: string[];
  filteredOptions$: Observable<any[]>;
  ngOnInit(): void {


  }

  @Input() data: any;

  constructor(protected ref: NbDialogRef<AddComponent>, public fb: FormBuilder, private vs: VehiclesService, private ts: NbToastrService, private ls: LocationsService,) {
    this.buildForm();
    this.getLocations();
  }

  buildForm() {
    this.vehiclesForm = this.fb.group({
      id: [''],
      articleNumber: [],
      description: [],
      displayPictureUrl: [],
      granulation: [''],
      name: ['', Validators.required],
      materialGroup: [],
      shorthand: [],
      conversionTonneCubicMeter: [''],
      measure: [],
      traits: [],
      density: [],
      location: [null]
    });

    this.locationForm = this.fb.group({
      // id: [''],
      name: [''],
    });
  }

  ngAfterViewInit() {
    if (this.data) {
      this.getDetails(this.data);
    }
  }

  async getLocations() {
    await this.ls.getList().subscribe((data: any) => {
      this.options = data;
      this.filteredOptions$ = of(this.options);
    });
  }

  submitForm() {
    if (this.locationForm.invalid) {
      return
    }
    this.ls.addMat(this.locationForm.value).subscribe(res => {
      // this.ls.popupOpenInListPage.next('list');
      this.getLocations();
      setTimeout(() => {
        this.ts.success('Location added succefully. ', 'Added', { duration: 4000 });
        const previwLocation = this.vehiclesForm.value.location || [];
        this.vehiclesForm.controls.location.setValue([...previwLocation, this.locationForm.value.name]);
      }, 1000);
    }, (error) => {
      this.ts.danger(error.error.details, 'Error', { duration: 4000 });
    });
  }


  saveMaterialDetails() {
    this.submitted = true;
    if (this.vehiclesForm.invalid) {
      return;
    }
    let body = {
      ...this.vehiclesForm.value
    }
    body.location = body.location.map(element => {
      return {
        ids: this.filterLocationAndGetID(element.toLowerCase())
      }
    }).map(e => e.ids[0].id);
    if (this.data) {
      this.vs.updateMat(body).subscribe(data => {
        this.dismiss('submit');
        this.vs.popupOpenInListPage.next('list');
        this.ts.success('Material update succefully. ', 'Updated', { duration: 4000 });

      }, (error) => {
        this.ts.danger(error.error.message, 'Error', { duration: 4000 });

      });

    } else {
      delete body.id;
      this.vs.add(body).subscribe(data => {
        this.dismiss('submit');
        this.vs.popupOpenInListPage.next('list');
        this.ts.success('Material added succefully. ', 'Added', { duration: 4000 });

      }, (error) => {
        this.ts.danger(error.error.message, 'ERROR', { duration: 4000 });

      });
    }

  }

  dismiss(str?: any) {
    this.ref.close(str);
  }

  getDetails(id: string) {

    this.vs.getID(id).subscribe(data => {
      console.log(data);
      this.vehiclesForm.patchValue(data[0]);
    });
  }

  get f() {
    return this.vehiclesForm.controls;
  }

  ngOnDestroy() {
    // this.vs.popupOpenInListPage.unsubscribe();
  }

  private filterLocationAndGetID(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options?.filter((optionValue: any) => optionValue.name.toLowerCase().includes(filterValue));
  }

}
