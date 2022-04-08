import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContactsService } from '../../../../core/services/contacts.service';
import { LocationsService } from '../../../../core/services/locations.service';
import { MaterialService } from '../../../../core/services/material.service';
import { ToursService } from '../../../../core/services/tours.service';
import { TranslateService } from '@ngx-translate/core';
import { OrdersService } from '../../../../core/services/orders.service';

@Component({
  selector: 'ngx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit, OnDestroy {
  openOrder: boolean = false;
  toursType = [];
  toursStatus = [];
  trailerCategory = [];
  contactForm: FormGroup;
  submitted = false;
  // counterType = [];
  contacts: FormArray;
  tripsFormArrayItems: FormArray;


  optionsContacts: string[];
  optionsMaterial: string[];
  optionsOrders: string[];
  optionsLoadingLocation: string[];
  optionsUnLoadingLocation: string[];


  filteredOptionsContacts$: Observable<any[]>;
  filteredOptionsMaterial$: Observable<any[]>;
  filteredOptionsOrders$: Observable<any[]>;
  filteredOptionsLoadingLocation$: Observable<any[]>;
  filteredOptionsUnLoadingLocation$: Observable<any[]>;

  @ViewChild('autoInputContacts') input;
  @ViewChild('autoInputMaterial') inputMaterial;
  @ViewChild('autoInputLoadingLocation') inputLoadingLocation;
  @ViewChild('autoInputUnLoadingLocation') inputUnLoadingLocation;
  @ViewChild('autoInputOrders') inputOrders;


  ngOnInit(): void {
    this.translate.get(['TOURSADDEDITTPAGE.toursType', 'TOURSADDEDITTPAGE.toursStatus', 'TOURSADDEDITTPAGE.trailerCategoryType']).subscribe(translations => {
      this.toursType = translations['TOURSADDEDITTPAGE.toursType'];
      this.toursStatus = translations['TOURSADDEDITTPAGE.toursStatus'];
      this.trailerCategory = translations['TOURSADDEDITTPAGE.trailerCategoryType'];
    });
    this.buildForm();
  }

  @Input() data: any;

  constructor(public translate: TranslateService, protected ref: NbDialogRef<AddComponent>, public fb: FormBuilder, private cs: ContactsService, private ls: LocationsService, private ms: MaterialService, private os: OrdersService, private ts: NbToastrService, private tourS: ToursService) {
  }

  getAutoCompleteList() {
    this.cs.getList().subscribe((data: any) => {
      this.optionsContacts = data;
      this.filteredOptionsContacts$ = of(this.optionsContacts);
    });
    this.ms.getList().subscribe((data: any) => {
      this.optionsMaterial = data;
      this.filteredOptionsMaterial$ = of(this.optionsMaterial);
    });
    this.ls.getList().subscribe((data: any) => {
      this.optionsLoadingLocation = data;
      this.filteredOptionsLoadingLocation$ = of(this.optionsLoadingLocation);
      this.optionsUnLoadingLocation = data;
      this.filteredOptionsUnLoadingLocation$ = of(this.optionsUnLoadingLocation);
    });
    this.os.getList().subscribe((data: any) => {
      this.optionsOrders = data;
      this.filteredOptionsOrders$ = of(this.optionsOrders);
    });
  }

  buildForm() {
    this.contactForm = this.fb.group({
      id: [''],
      loadingLocation: [null, Validators.required],
      unloadingLocation: [null, Validators.required],
      type: [],
      status: [],
      billedToContact: [],
      material: [null, Validators.required],
      amount: [],
      executionDate: [],
      deadlineDate: [],
      trailerCategory: [],
      order: [null],
      // contacts: this.fb.array([this.createItem()]),
      conversionTonneCubicMeter: [''],
      trips: this.fb.array([this.createTripsArray()]),
      driver: [],
      comments: []
    });
    this.getAutoCompleteList();
  }

  createItem(): FormGroup {
    return this.fb.group({
      id: [''],
      name: ['', Validators.required],
      phone: [''],
      mobile: [''],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    });
  }

  createTripsArray(): FormGroup {
    return this.fb.group({
      id: [''],
      amount: [''],
      status: [''],
      comments: [''],
    });
  }

  addItem(): void {
    this.contacts = this.contactForm.get('contacts') as FormArray;
    this.contacts.push(this.createItem());
  }

  addTripsItem(): void {
    this.tripsFormArrayItems = this.contactForm.get('trips') as FormArray;
    this.tripsFormArrayItems.push(this.createTripsArray());
  }
  get contactsControls() {
    return this.contactForm.get('contacts')['controls'];
  }

  ngAfterViewInit() {
    if (this.data) {
      this.getDetails(this.data);
    }
  }


  saveContactDetails() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }
    let body = {
      ...this.contactForm.value
    }
    // body.counterparty = this.filterAndGetID(body.counterparty)[0]['id'];

    body.material = body.material ? this.filterMaterialAndGetID(body.material)[0]['id'] : null;
    body.loadingLocation = body.loadingLocation ? this.filterLoadingLocationAndGetID(body.loadingLocation)[0]['id'] : null;
    body.unloadingLocation = body.unloadingLocation ? this.filterUnLoadingLocationAndGetID(body.unloadingLocation)[0]['id'] : null;
    body.order = body.order ? this.filterOrdersAndGetID(body.order)[0]['id'] : null;

    if (this.data) {
      this.tourS.update(body).subscribe(data => {
        this.tourS.popupOpenInListPage.next('list');
        this.ts.success('Tour update succefully. ', 'Updated', { duration: 4000 });
        this.dismiss('submit');

      }, (error) => {

        this.ts.danger(error.error.message, 'ERROR', { duration: 4000 });

      });

    } else {
      delete body.id;
      this.tourS.add(body).subscribe(data => {
        this.tourS.popupOpenInListPage.next('list');
        this.ts.success('Tour added succefully. ', 'Added', { duration: 4000 });
        this.dismiss('submit');

      }, (error) => {

        this.ts.danger(error.error.message, 'ERROR', { duration: 4000 });
      });
    }

  }

  dismiss(str?: any) {
    this.ref.close(str);
  }

  dismissWithResp(str: ['']) {
    this.ref.close(str);
  }


  getDetails(id: string) {
    
    this.tourS.getID(id, 'list').subscribe(data => {
      console.log(data);
      let body = data[0];
      body.executionDate = body.executionDate ? body.executionDate + 'T00:00:00' : null;
      body.conversionTonneCubicMeter = body.conversionTonneCubicMeter ? body.conversionTonneCubicMeter : null;
      this.contactForm.patchValue(body);
    });
  }

  get f() { return this.contactForm.controls; }

  get _getfTrips() { return this.f.trips as FormArray; }


  ngOnDestroy() {
  }


  // location Autocoimpleyte

  private filterLocation(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsLoadingLocation?.filter((optionValue: any) => optionValue.name.toLowerCase().includes(filterValue));
  }

  getFilteredOptionsLocation(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filterLocation(filterString)),
    );
  }

  onChangeLoadingLocation() {
    this.filteredOptionsLoadingLocation$ = this.getFilteredOptionsLocation(this.inputLoadingLocation.nativeElement.value);
  }

  onSelectionChangeLoadingLocation($event) {
    this.filteredOptionsLoadingLocation$ = this.getFilteredOptionsLocation($event);
  }
  // location ednd


  // location Autocoimpleyte

  private filterUnLoadingLocation(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsUnLoadingLocation?.filter((optionValue: any) => optionValue.name.toLowerCase().includes(filterValue));
  }

  getFilteredOptionsUnLoadingLocation(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filterUnLoadingLocation(filterString)),
    );
  }

  onChangeUnLoadingLocation() {
    this.filteredOptionsUnLoadingLocation$ = this.getFilteredOptionsUnLoadingLocation(this.inputUnLoadingLocation.nativeElement.value);
  }

  onSelectionChangeUnLoadingLocation($event) {
    this.filteredOptionsUnLoadingLocation$ = this.getFilteredOptionsUnLoadingLocation($event);
  }
  // location ednd
  private filterLoadingLocationAndGetID(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsLoadingLocation?.filter((optionValue: any) => optionValue.name.toLowerCase().includes(filterValue));
  }
  private filterUnLoadingLocationAndGetID(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsUnLoadingLocation?.filter((optionValue: any) => optionValue.name.toLowerCase().includes(filterValue));
  }




  // Material Auto
  private filterMaterial(value: string): string[] {
    const filterValue = value.toLowerCase();
    const selectedMaterial = this.optionsMaterial?.filter((optionValue: any) => optionValue.name.toLowerCase().includes(filterValue))
    if (selectedMaterial.length > 0) {
      const c = selectedMaterial[0]['conversionTonneCubicMeter'];
      this.contactForm.controls.conversionTonneCubicMeter.setValue(c);
    }
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
  // Material Auto



  // Orders Auto
  private filterOrders(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsOrders?.filter((optionValue: any) => optionValue.note.toLowerCase().includes(filterValue));
  }

  private filterOrdersAndGetID(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsOrders?.filter((optionValue: any) => optionValue.note.toLowerCase().includes(filterValue));
  }

  getFilteredOptionsOrders(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filterOrders(filterString)),
    );
  }

  onChangeOrders() {
    this.filteredOptionsOrders$ = this.getFilteredOptionsOrders(this.inputOrders.nativeElement.value);
  }

  onSelectionChangeOrders($event) {
    this.filteredOptionsOrders$ = this.getFilteredOptionsOrders($event);
  }
  // Orders Auto
}
