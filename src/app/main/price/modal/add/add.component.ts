import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContactsService } from '../../../../core/services/contacts.service';
import { LocationsService } from '../../../../core/services/locations.service';
import { MaterialService } from '../../../../core/services/material.service';
import { PriceService } from '../../../../core/services/price.service';

@Component({
  selector: 'ngx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit, OnDestroy {

  priceForm: FormGroup;
  submitted = false;
  materials: FormArray;

  selectedCounterParty: {
    id: '',
    name: ''
  } = null;

  options: string[];
  optionsMaterial: string[];
  optionsLocation: string[];


  filteredOptions$: Observable<any[]>;
  filteredOptionsMaterial$: Observable<any[]>;
  filteredOptionsLocation$: Observable<any[]>;


  @ViewChild('autoInput') input;
  @ViewChild('autoInputMaterial') inputMaterial;
  @ViewChild('autoInputLocation') inputLocation;



  ngOnInit(): void {


  }

  @Input() data: any;

  constructor(protected ref: NbDialogRef<AddComponent>, public fb: FormBuilder, private ps: PriceService, private ts: NbToastrService, private cp: ContactsService, private ms: MaterialService, private ls: LocationsService) {
    this.buildForm();
  }

  buildForm() {
    this.priceForm = this.fb.group({
      id: [''],
      // name: ['', Validators.required],
      counterparty: ['', Validators.required],
      location: [''],
      material: ['', Validators.required],
     
      materials: this.fb.array([this.createMaterialForm()]),

    });
    this.getAutoCompleteList();

  }

  get materialFormGET() { return this.f.materials as FormArray; }


  createMaterialForm(): FormGroup {
    return this.fb.group({
      id: [''],   // material id
      name : [''],
      conversionTonneCubicMeter : [''],
      price: [''],
      validFrom: [''],
      validUntil: [''],
    });
  }

  addMaterialMore(): void {
    this.materials = this.priceForm.get('materials') as FormArray;
    this.materials.push(this.createMaterialForm());
  }

  getAutoCompleteList() {
    this.cp.getList().subscribe((data: any) => {
      this.options = data;
      this.filteredOptions$ = of(this.options);
    });
    this.ms.getList().subscribe((data: any) => {
      this.optionsMaterial = data;
      this.filteredOptionsMaterial$ = of(this.optionsMaterial);
    });
    this.ls.getList().subscribe((data: any) => {
      this.optionsLocation = data;
      this.filteredOptionsLocation$ = of(this.optionsLocation);
    });
  }

  ngAfterViewInit() {
    if (this.data) {
      this.getDetails(this.data);
    }
  }


  savePriceDetails() {
    this.submitted = true;
    if (this.priceForm.invalid) {
      return;
    }
    let body = {
      ...this.priceForm.value
    }
    body.counterparty = body.counterparty.length > 0 ? this.filterAndGetID(body.counterparty)[0]['id'] : null ;
    body.material = body.material ? this.filterMaterialAndGetID(body.material)[0]['id'] : null ;
    body.location = body.location ? this.filterLocationAndGetID(body.location)[0]['id'] : null ;


    if (this.data) {
      this.ps.update(body).subscribe(data => {
        this.dismiss('submit');
        this.ps.popupOpenInListPage.next('list');
        this.ts.success('Price update succefully. ', 'Updated', { duration: 4000 });

      }, (error) => {
        this.ts.danger(error.error.message, 'Error', { duration: 4000 });

      });

    } else {
      delete body.id;
      this.ps.add(body).subscribe(data => {
        this.dismiss('submit');
        this.ps.popupOpenInListPage.next('list');
        this.ts.success('Price added succefully. ', 'Added', { duration: 4000 });

      }, (error) => {
        this.ts.danger(error.error.message, 'Delete', { duration: 4000 });

      });
    }

  }

  dismiss(str?: any) {
    this.ref.close(str);
  }

  getDetails(id: string) {
    this.ps.getID(id).subscribe(data => {
      console.log(data);
      this.priceForm.patchValue(data[0]);
    });
  }

  get f() {
    return this.priceForm.controls;
  }

  ngOnDestroy() {
    // this.ps.popupOpenInListPage.unsubscribe();
  }


  //Filter Options
  private filterB(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((optionValue: any) => optionValue?.name.toLowerCase().includes(filterValue));
  }
  private filterAndGetID(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((optionValue: any) => optionValue?.name.toLowerCase().includes(filterValue));
  }



  getFilteredOptions(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filterB(filterString)),
    );
  }

  onChange() {
    this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
  }

  onSelectionChange($event) {
    this.filteredOptions$ = this.getFilteredOptions($event);
    this.selectedCounterParty = $event;
  }



  private filterMaterial(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsMaterial?.filter((optionValue: any) => optionValue.name.toLowerCase().includes(filterValue));
  }

  private filterMaterialAndGetID(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsMaterial?.filter((optionValue: any) => optionValue.name.toLowerCase().includes(filterValue));
  }

  getFilteredOptionsMaterial(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filterMaterial(filterString)),
    );
  }

  onChangeMaterial() {
    this.filteredOptionsMaterial$ = this.getFilteredOptionsMaterial(this.inputMaterial.nativeElement.value);
  }

  onSelectionChangeMaterial($event) {
    this.filteredOptionsMaterial$ = this.getFilteredOptionsMaterial($event);
  }

  private filterLocation(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsLocation?.filter((optionValue: any) => optionValue.name.toLowerCase().includes(filterValue));
  }

  private filterLocationAndGetID(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsLocation?.filter((optionValue: any) => optionValue.name.toLowerCase().includes(filterValue));
  }
  getFilteredOptionsLocation(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filterLocation(filterString)),
    );
  }

  onChangeLocation() {
    this.filteredOptionsLocation$ = this.getFilteredOptionsLocation(this.inputLocation.nativeElement.value);
  }

  onSelectionChangeLocation($event) {
    this.filteredOptionsLocation$ = this.getFilteredOptionsLocation($event);
  }



}
