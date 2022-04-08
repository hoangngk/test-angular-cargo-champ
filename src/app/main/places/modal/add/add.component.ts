import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { ContactsService } from '../../../../core/services/contacts.service';
import { LocationsService } from '../../../../core/services/locations.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit, OnDestroy {

  locationForm: FormGroup;
  counterPartyForm: FormGroup;
  submitted = false;
  openingTimes: FormArray;
  placesType = [];

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
  inModelLocationAdd;
  options: string[];
  filteredOptions$: Observable<any[]>;
  ngOnInit(): void {
    this.translate.get(['days', 'locationType']).subscribe(translations => {
      this.weeks = translations['days'];
      this.placesType = translations['locationType'];
    });
  }

  @Input() data: any;

  constructor(public translate: TranslateService, protected ref: NbDialogRef<AddComponent>, public fb: FormBuilder, private ls: LocationsService, private ts: NbToastrService, private cs: ContactsService) {
    this.buildForm();
    this.getCounterPartys();
  }

  buildForm() {
    this.locationForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      description: [''],
      keyCode: [''],
      addresses: this.fb.array([this.createItem()]),
      contacts: this.fb.array([this.createContact()]),
      counterparties: [null],
      openingTimes: this.fb.array([this.createOpeningTimes()]),

    });

    this.counterPartyForm = this.fb.group({
      // id: [''],
      name: [''],
      keyCode: 0
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      street: [''],
      streetNumber: [''],
      postCode: [''],
      city: [''],
      state: [''],
      country: [''],

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

  async getCounterPartys() {
    await this.cs.getList().subscribe((data: any) => {
      this.options = data;
      this.filteredOptions$ = of(this.options);
    });
  }

  submitFormCounterParty() {
    if (this.counterPartyForm.invalid) {
      return
    }
    this.cs.add(this.counterPartyForm.value).subscribe(res => {
      // this.ls.popupOpenInListPage.next('list');
      this.getCounterPartys();
      setTimeout(() => {
        this.ts.success('Counter Party added succefully. ', 'Added', { duration: 4000 });
        const previwLocation = this.locationForm.value.counterparties || [];
        this.locationForm.controls.counterparties.setValue([...previwLocation, this.counterPartyForm.value.name]);
      }, 1000);
    }, (error) => {
      this.ts.danger(error.error.details, 'Error', { duration: 4000 });
    });
  }
  addWeekItem(): void {
    this.openingTimes = this.locationForm.get('openingTimes') as FormArray;
    this.openingTimes.push(this.createOpeningTimes());
  }
  createContact(): FormGroup {
    return this.fb.group({
      // id: [''],
      name: [''],
      phone: [''],
      mobile: [''],
      email: [''],

    });
  }

  ngAfterViewInit() {
    if (this.data) {

      this.getDetails(this.data);
    }
  }


  submitForm() {
    this.submitted = true;
    if (this.locationForm.invalid) {
      return;
    }
    let body = { ...this.locationForm.value };

    // body.location = this.options?.filter((optionValue: any) => optionValue.name.toLowerCase().includes(body.location));

    body.counterparties = body.counterparties ? body.counterparties.map(element => {
      return {
        ids: this.filterCounterPartyAndGetID(element.toLowerCase())
      }
    }).map(e => e?.ids[0]?.id) : null;
    if (this.data) {
      this.ls.updateMat(body).subscribe(data => {
        this.dismiss('submit');
        this.ls.popupOpenInListPage.next('list');
        this.ts.success('Location update succefully. ', 'Updated', { duration: 4000 });

      }, (error) => {
        this.ts.danger(error.error.message, 'Error', { duration: 4000 });

      });

    } else {
      delete body.id;
      this.ls.addMat(body).subscribe(data => {
        this.dismiss('submit');
        this.ls.popupOpenInListPage.next('list');
        this.ts.success('Location added succefully. ', 'Added', { duration: 4000 });

      }, (error) => {
        this.ts.danger(error.error.message, 'Error', { duration: 4000 });

      });
    }

  }



  dismiss(str?: any) {
    this.ref.close(str);
  }

  getDetails(id: string) {

    this.ls.getID(id).subscribe(data => {
      console.log(data);
      let body = data[0];

      body.counterparties = body.counterparties ? this.options.filter((e: any) => body.counterparties.includes(e.id)).map((e: any) => e.name)
        : null;
      if (data[0].openingTimes && data[0].openingTimes.length > 0) {
        data[0].openingTimes.forEach(element => {
          this.addWeekItem();
        });
      }
      this.locationForm.patchValue(body);
    });
  }

  onChangeTickets(e: number) {
    const numberOfTickets = e || 0;
    if (this.t.length < numberOfTickets) {
      for (let i = this.t.length; i < numberOfTickets; i++) {
        this.t.push(this.createItem());
      }
    } else {
      for (let i = this.t.length; i >= numberOfTickets; i--) {
        this.t.removeAt(i);
      }
    }
  }

  get f() {
    return this.locationForm.controls;
  }
  get t() { return this.f.addresses as FormArray; }
  get c() { return this.f.contacts as FormArray; }
  get opt() { return this.f.openingTimes as FormArray; }

  ngOnDestroy() {
    // this.ms.popupOpenInListPage.unsubscribe();
  }
  private filterCounterPartyAndGetID(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options?.filter((optionValue: any) => optionValue.name.toLowerCase().includes(filterValue));
  }


  private filterCounterPartyAndGetName(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options?.filter((optionValue: any) => optionValue.id.toLowerCase().includes(filterValue));
  }
}
