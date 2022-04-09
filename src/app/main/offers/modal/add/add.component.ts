import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { NbDialogRef } from "@nebular/theme";

@Component({
  selector: "ngx-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class AddComponent implements OnInit {
  @Input() data: any;
  selectedItem = "2";
  offerForm: FormGroup;
  billedToContactOptions: string[] = [];
  loadingOptions: string[] = [];
  unloadingOptions: string[] = [];
  materialsOptions: string[] = [];

  constructor(
    protected ref: NbDialogRef<AddComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildOfferForm();
  }

  onSubmit() {
    console.log(this.offerForm.value);
  }

  getFormType(form) {
    console.log(form);
  }

  addNewContact(text: string) {
    this.billedToContactOptions.unshift(text);
  }

  addNewLoading(text: string) {
    this.loadingOptions.unshift(text);
  }

  addNewUnloading(text: string) {
    this.unloadingOptions.unshift(text);
  }

  addNewMaterialOption(text: string) {
    this.materialsOptions.unshift(text);
  }

  addNewTransaction() {
    this.transactions.push(this.buildFreightForm());
  }

  addNewMaterialForTradingForm(form: any) {
    (form.get("materials") as FormArray).push(
      this.fb.group({
        material: [undefined],
        amount: [undefined],
        unit: ["m3"],
        pricePerUnit: [undefined],
      })
    );
  }

  addNewMaterialForDisposalForm(form: any) {
    (form.get("materials") as FormArray).push(
      this.fb.group({
        material: [undefined],
        amount: [undefined],
        unit: ["m3"],
        pricePerUnit: [undefined],
        minimumPrice: [undefined],
      })
    );
  }

  dismiss(str?: any) {
    this.ref.close(str);
  }

  changeForm(option: string, index: number) {
    switch (option) {
      case "freight":
        this.transactions.setControl(index, this.buildFreightForm());
        break;
      case "trading":
        this.transactions.setControl(index, this.buildTradingForm());
        break;
      case "disposal":
        this.transactions.setControl(index, this.buildDisposalForm());
        break;
    }
  }

  removeTransactionForm(index) {
    this.transactions.removeAt(index);
  }

  removeMaterialForm(form, index) {
    (form.get("materials") as FormArray).removeAt(index);
  }

  buildFreightForm() {
    return this.fb.group({
      type: ["freight"],
      loading: [undefined],
      unloading: [undefined],
      amount: [undefined],
      unit: ["tonnes"],
      pricePerUnit: [undefined],
      minimumPrice: [undefined],
      comments: [undefined],
    });
  }

  buildTradingForm() {
    return this.fb.group({
      type: ["trading"],
      unloading: [undefined],
      materials: this.fb.array([]),
    });
  }

  buildDisposalForm() {
    return this.fb.group({
      type: ["disposal"],
      loading: [undefined],
      materials: this.fb.array([]),
    });
  }

  private buildOfferForm() {
    this.offerForm = this.fb.group({
      id: [undefined],
      billedToContact: [undefined],
      validFrom: [undefined],
      validTo: [undefined],
      reference: [undefined],
      toReferTo: [undefined],
      transactions: this.fb.array([]),
    });
  }

  get transactions() {
    return this.offerForm.get("transactions") as FormArray;
  }
}
