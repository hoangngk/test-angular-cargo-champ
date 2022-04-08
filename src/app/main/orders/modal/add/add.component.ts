import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { OrdersService } from '../../../../core/services/orders.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit, OnDestroy {

  orderType = [];
  orderStatus = [];

  orderForm: FormGroup;
  submitted = false;

  ngOnInit(): void {


  }

  @Input() data: any;

  constructor(public translate: TranslateService, protected ref: NbDialogRef<AddComponent>, public fb: FormBuilder, private os: OrdersService, private ts: NbToastrService) {
    this.buildForm();
    this.translate.get(['ORDERADDEDITTPAGE.orderType', 'ORDERADDEDITTPAGE.orderStatus']).subscribe(translations => {
      this.orderType = translations['ORDERADDEDITTPAGE.orderType'];
      this.orderStatus = translations['ORDERADDEDITTPAGE.orderStatus'];
    });
  }

  buildForm() {
    this.orderForm = this.fb.group({
      id: [''],
      note: ['', Validators.required],
      status: ['', Validators.required],
      type: [''],
      offerDate: [''],
      billedToContact: [''],
      typeFormData: this.fb.array([this.createtypeForm()]),
    });
  }

  createtypeForm(): FormGroup {
    return this.fb.group({
      id: [''],   // material id
      type : [''],
      loading : [''],
      unloading: [''],
      amount: [''],
      price: [''],
      minimumPrice: [''],
      comments: [''],
    });
  }

  get typeFormGET() { return this.f.typeFormData as FormArray; }

  ngAfterViewInit() {
    if (this.data) {
      this.getDetails(this.data);
    }
  }


  saveMaterialDetails() {
    this.submitted = true;
    if (this.orderForm.invalid) {
      return;
    }
    if (this.data) {
      this.os.updateMat(this.orderForm.value).subscribe(data => {
        this.dismiss('submit');
        this.os.popupOpenInListPage.next('list');
        this.ts.success('Material update succefully. ', 'Updated', { duration: 4000 });

      }, (error) => {
        this.ts.danger(error.error.message, 'Error', { duration: 4000 });

      });

    } else {
      delete this.orderForm.value.id;
      this.os.addMat(this.orderForm.value).subscribe(data => {
        this.dismiss('submit');
        this.os.popupOpenInListPage.next('list');
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

    this.os.getID(id).subscribe(data => {
      console.log(data);
      this.orderForm.patchValue(data[0]);
    });
  }

  get f() {
    return this.orderForm.controls;
  }

  ngOnDestroy() {
    // this.os.popupOpenInListPage.unsubscribe();
  }

}
