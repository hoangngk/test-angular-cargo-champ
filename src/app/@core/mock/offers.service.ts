import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class MockOffersService {
  getList(): Observable<any> {
    return of(DATA);
  }

  getBasicInfo(): Observable<any> {
    return of(BASIC_INFO_DATA);
  }

  getDetails(): Observable<any> {
    return of(DATA_DETAILS);
  }
}

const BASIC_INFO_DATA = {
  id: 1,
  billedTo: "James Fan",
  validFromTo: "04/02/2022 - 06/02/2022",
  reference: "JSDN3423",
  toReferTo: "text",
};

const DATA = [
  {
    id: 1,
    billedToContact: "James Fan",
    loadingLocation: "Smith Frankfurt",
    unLoadingLocation: "Smith London",
    materialName: "Sand",
    priceUnit: "123€/tonne",
    minimumPrice: "500€",
    type: "FREIGHT",
    validityFrom: "10/11/20022",
    validityTo: "10/11/20022",
  },
  {
    id: 2,
    billedToContact: "George Hill",
    loadingLocation: "Smith Berlin",
    unLoadingLocation: "Smith London",
    materialName: "Sand",
    priceUnit: "123€/tonne",
    minimumPrice: "500€",
    type: "DISPOSAL",
    validityFrom: "10/11/20022",
    validityTo: "10/11/20022",
  },
  {
    id: 3,
    billedToContact: "Zimmerman",
    loadingLocation: "Smith London",
    unLoadingLocation: "Smith Hamburg",
    materialName: "Sand",
    priceUnit: "123€/tonne",
    minimumPrice: "500€",
    type: "TRADE",
    validityFrom: "10/11/20022",
    validityTo: "10/11/20022",
  },
];

const DATA_DETAILS = [
  {
    id: 1,
    loadingLocation: "Smith London",
    unLoadingLocation: "Smith Frankfurt",
    materialName: "Sand",
    sellingPrice: 200,
    type: "Freight",
    minimumPrice: 200,
    amount: 40,
    unit: "m3",
    comments: "Late",
  },
  {
    id: 2,
    loadingLocation: "Smith Berlin",
    unLoadingLocation: "Smith Frankfurt",
    materialName: "Cement",
    sellingPrice: 212,
    type: "Freight",
    minimumPrice: 300,
    amount: 10,
    unit: "tonnes",
    comments: "Extra Trip",
  },
  {
    id: 3,
    loadingLocation: "Smith Berlin",
    unLoadingLocation: "Smith Frankfurt",
    materialName: "Asphalt",
    sellingPrice: 212,
    type: "Disposal",
    minimumPrice: 400,
    amount: 12,
    unit: "tonnes",
    comments: "Extra Trip",
  },
];
