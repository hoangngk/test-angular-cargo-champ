import { Compiler, Component, ComponentFactoryResolver, Injector, Input, NgModuleFactory, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService, NbToastrService } from '@nebular/theme';
import { ContactsService } from '../../../../core/services/contacts.service';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocationsService } from '../../../../core/services/locations.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit, OnDestroy {

  options: string[];
  filteredOptions$: Observable<any[]>;
  loadLocation = false;
  @ViewChild('autoInput') input;


  contactForm: FormGroup;
  locationForm: FormGroup;
  submitted = false;
  counterType = [];

  weeks = [];


  times = [
    { value: "00:00:00", title: "00:00 AM" },
    { value: "00:30:00", title: "00:30 AM" },
    { value: "01:00:00", title: "01:00 AM" },
    { value: "01:30:00", title: "01:30 AM" },
    { value: "02:00:00", title: "02:00 AM" },
    { value: "02:30:00", title: "02:30 AM" },
    { value: "03:00:00", title: "03:00 AM" },
    { value: "03:30:00", title: "03:30 AM" },
    { value: "04:00:00", title: "04:00 AM" },
    { value: "04:30:00", title: "04:30 AM" },
    { value: "05:00:00", title: "05:00 AM" },
    { value: "05:30:00", title: "05:30 AM" },
    { value: "06:00:00", title: "06:00 AM" },
    { value: "06:30:00", title: "06:30 AM" },
    { value: "07:00:00", title: "07:00 AM" },
    { value: "07:30:00", title: "07:30 AM" },
    { value: "08:00:00", title: "08:00 AM" },
    { value: "08:30:00", title: "08:30 AM" },
    { value: "09:00:00", title: "09:00 AM" },
    { value: "09:30:00", title: "09:30 AM" },
    { value: "10:00:00", title: "10:00 AM" },
    { value: "10:30:00", title: "10:30 AM" },
    { value: "11:00:00", title: "11:00 AM" },
    { value: "11:30:00", title: "11:30 AM" },
    { value: "12:00:00", title: "12:00 PM" },
    { value: "12:30:00", title: "12:30 PM " },
    { value: "13:00:00", title: "01:00 PM " },
    { value: "13:30:00", title: "01:30 PM " },
    { value: "14:00:00", title: "02:00 PM " },
    { value: "14:30:00", title: "02:30 PM " },
    { value: "15:00:00", title: "03:00 PM " },
    { value: "15:30:00", title: "03:30 PM " },
    { value: "16:00:00", title: "04:00 PM " },
    { value: "16:30:00", title: "04:30 PM " },
    { value: "17:00:00", title: "05:00 PM " },
    { value: "17:30:00", title: "05:30 PM " },
    { value: "18:00:00", title: "06:00 PM " },
    { value: "18:30:00", title: "06:30 PM " },
    { value: "19:00:00", title: "07:00 PM " },
    { value: "19:30:00", title: "07:30 PM " },
    { value: "20:00:00", title: "08:00 PM " },
    { value: "20:30:00", title: "08:30 PM " },
    { value: "21:00:00", title: "09:00 PM " },
    { value: "21:30:00", title: "09:30 PM " },
    { value: "22:00:00", title: "10:00 PM " },
    { value: "22:30:00", title: "10:30 PM " },
    { value: "23:00:00", title: "11:00 PM " },
    { value: "23:30:00", title: "11:30 PM " }
  ];


  contacts: FormArray;

  openingTimes: FormArray;
  ngOnInit(): void {
    this.translate.get(['COUNTERPARTYADDPAGE.counterPartyType','days']).subscribe(translations => {
      this.counterType = translations['COUNTERPARTYADDPAGE.counterPartyType'];
      this.weeks = translations['days'];
    });
  }

  @Input() data: any;
  @ViewChild('loadLocationAdd', { read: ViewContainerRef, static: true }) private loadLocationAdd: ViewContainerRef;

  constructor(public translate: TranslateService, private compiler: Compiler, private injector: Injector, private cfr: ComponentFactoryResolver, private dialogService: NbDialogService, protected ref: NbDialogRef<AddComponent>, public ls: LocationsService, public fb: FormBuilder, private cs: ContactsService, private ts: NbToastrService) {
    this.buildForm();
    this.options = [];
    this.filteredOptions$ = of(this.options);
    this.getLocations();
  }

  buildForm() {
    this.contactForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      keyCode: [null, Validators.required],
      location: [null],
      breifDescription: [''],
      contacts: this.fb.array([this.createContact()]),
      openingTimes: this.fb.array([this.createOpeningTimes()]),
      // phone: [''],
      // mobile: [''],
      // email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      // shortDescription: [''],
      // contactType: [],


      // counterpartyCategory: 0,
      // addresses: [
      //   {
      //     id: [''],
      //     street: [''],
      //     streetNumber: [''],
      //     postCode: [''],
      //     city: [''],
      //     state: [''],
      //     country: [''],
      //     GPScoordinates: {
      //       lat: 0,
      //       lon: 0,
      //       searchData: ['']
      //     }
      //   }
      // ],
      // contacts: this.fb.array([this.createItem()])

      // contacts: this.fb.array([

      //   {
      //     id: [''],
      //     name: ['', Validators.required],
      //     phone: [''],
      //     mobile: [''],
      //     email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      //   }

      // ]),
      // location: [
      //   ''
      // ],
      // openingTimes: [
      //   {
      //     id: [''],
      //     dayOfWeek: 0,
      //     startTime: [''],
      //     endTime: ['']
      //   }
      // ]
    });

    this.locationForm = this.fb.group({
      // id: [''],
      name: [''],
      keyCode: [0],
    });
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
        const previwLocation = this.contactForm.value.location || [];
        this.contactForm.controls.location.setValue([...previwLocation, this.locationForm.value.name]);
      }, 1000);
    }, (error) => {
      this.ts.danger(error.error.details, 'Error', { duration: 4000 });
    });
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

  addItem(): void {
    this.contacts = this.contactForm.get('contacts') as FormArray;
    this.contacts.push(this.createItem());
  }

  addWeekItem(): void {
    this.openingTimes = this.contactForm.get('openingTimes') as FormArray;
    this.openingTimes.push(this.createOpeningTimes());
  }

  get contactsControls() {
    return this.contactForm.get('contacts')['controls'];
  }

  ngAfterViewInit() {
    if (this.data) {
      this.getDetails(this.data);
    }
  }

  createContact(): FormGroup {
    return this.fb.group({
      id: [''],
      name: [''],
      phone: [''],
      // mobile: [''],
      email: [''],

    });
  }

  createOpeningTimes(): FormGroup {
    return this.fb.group({
      id: [''],
      dayOfWeek: [''],
      startTime: [''],
      endTime: [''],
    });
  }

  saveContactDetails() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    let body = {
      ...this.contactForm.value
    }
    // body.location = this.options?.filter((optionValue: any) => optionValue.name.toLowerCase().includes(body.location));

    body.location = body.location ? body.location.map(element => {
      return {
        ids: this.filterLocationAndGetID(element.toLowerCase())
      }
    }).map(e => e.ids[0].id) : null;
    if (this.data) {
      this.cs.update(body).subscribe(data => {
        this.cs.popupOpenInListPage.next('list');
        this.ts.success('Counter Party update succefully. ', 'Updated', { duration: 4000 });
        this.dismiss('submit');

      }, (error) => {
        this.ts.danger(error.error.message, 'ERROR', { duration: 4000 });

      });

    } else {
      delete body.id;
      this.cs.add(body).subscribe(data => {
        this.cs.popupOpenInListPage.next('list');
        this.ts.success('Counter Party added succefully. ', 'Added', { duration: 4000 });
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
    this.cs.getID(id).subscribe(data => {
      console.log(data);
      data[0].location = data[0].location ? data[0].location.map(el => el.name) : null;

      if (data[0].openingTimes && data[0].openingTimes.length > 0) {
        data[0].openingTimes.forEach(element => {
          this.addWeekItem();
        });
      }
      this.contactForm.patchValue(data[0]);
      console.log(this.contactForm.value);
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  get c() { return this.f.contacts as FormArray; }

  get opt() { return this.f.openingTimes as FormArray; }


  ngOnDestroy() {
  }

  async addLocation() {
    // this.dialogService.open(AddCom, {
    //   context: {
    //     data: 'id',
    //   }, dialogClass: 'model-full',
    // }).onClose.subscribe(res => {
    //   if (res || res === 'submit') {
    //     this.cs.popupOpenInListPage.next('list');
    //   }
    // });;
    // this.dismiss();
    this.loadLocation = true;
    const { PlacesModule } = await import('../../../places/places.module');
    const { AddComponent } = await import('../../../places/modal/add/add.component');

    const moduleFactory = await this.loadModuleFactory(PlacesModule);
    const moduleRef = moduleFactory.create(this.injector);
    const factory = moduleRef.componentFactoryResolver.resolveComponentFactory(AddComponent);
    let questionADD = this.loadLocationAdd.createComponent(factory);
    questionADD.instance.inModelLocationAdd = true;

  }

  private async loadModuleFactory(t: any) {
    if (t instanceof NgModuleFactory) {
      return t;
    } else {
      return await this.compiler.compileModuleAsync(t);
    }
  }



  //Filter Options
  private filterMaterial(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((optionValue: any) => optionValue.name.toLowerCase().includes(filterValue));
  }

  getFilteredOptions(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filterMaterial(filterString)),
    );
  }

  onChange() {
    this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
  }

  onSelectionChange($event) {
    this.filteredOptions$ = this.getFilteredOptions($event);
  }

  private filterLocationAndGetID(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options?.filter((optionValue: any) => optionValue.name.toLowerCase().includes(filterValue));
  }

}



