import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { LocationsService } from '../../../../core/services/locations.service';
import { MaterialService } from '../../../../core/services/material.service';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'ngx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit, OnDestroy {

  materialForm: FormGroup;
  locationForm: FormGroup;
  submitted = false;


  options: string[];
  filteredOptions$: Observable<any[]>;
  ngOnInit(): void {


  }

  @Input() data: any;

  constructor(protected ref: NbDialogRef<AddComponent>, public fb: FormBuilder, private ms: MaterialService, private ts: NbToastrService, private ls: LocationsService,) {
    this.buildForm();
    this.options = [];
    this.filteredOptions$ = of(this.options);
    this.getLocations();
  }

  buildForm() {
    this.materialForm = this.fb.group({
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
      keyCode : 0
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
        const previwLocation = this.materialForm.value.location || [];
        this.materialForm.controls.location.setValue([...previwLocation, this.locationForm.value.name]);
      }, 1000);
    }, (error) => {
      this.ts.danger(error.error.details, 'Error', { duration: 4000 });
    });
  }


  saveMaterialDetails() {
    this.submitted = true;
    if (this.materialForm.invalid) {
      return;
    }
    let body = {
      ...this.materialForm.value
    }
    body.location = body.location.map(element => {
      return {
        ids: this.filterLocationAndGetID(element.toLowerCase())
      }
    }).map(e => e.ids[0].id);
    if (this.data) {
      this.ms.updateMat(body).subscribe(data => {
        this.dismiss('submit');
        this.ms.popupOpenInListPage.next('list');
        this.ts.success('Material update succefully. ', 'Updated', { duration: 4000 });

      }, (error) => {
        this.ts.danger(error.error.message, 'Error', { duration: 4000 });

      });

    } else {
      delete body.id;
      this.ms.addMat(body).subscribe(data => {
        this.dismiss('submit');
        this.ms.popupOpenInListPage.next('list');
        this.ts.success('Material added succefully. ', 'Added', { duration: 4000 });

      }, (error) => {
        this.ts.danger(error.error.message, 'Error', { duration: 4000 });

      });
    }

  }

  dismiss(str?: any) {
    this.ref.close(str);
  }

  getDetails(id: string) {

    this.ms.getMaterialID(id).subscribe(data => {
      console.log(data);
      let body = data[0];
debugger
      body.location = body.location ? this.options.filter((e: any) => body.location.includes(e.id)).map((e: any) => e.name)
        : [];

      this.materialForm.patchValue(body);
    });
  }

  get f() {
    return this.materialForm.controls;
  }

  ngOnDestroy() {
    // this.ms.popupOpenInListPage.unsubscribe();
  }

  private filterLocationAndGetID(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options?.filter((optionValue: any) => optionValue.name.toLowerCase().includes(filterValue));
  }

}
