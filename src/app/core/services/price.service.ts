import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
// import { Identity } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  popupOpenInListPage = new BehaviorSubject(null);
  popupOpenInListPageLoadCount = new BehaviorSubject(null);

  hideColumnSub = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }



  add(body: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/price`, body)
      .pipe(
        map((response) => {
          if (response.data) {
            return {
              data: response,
            };
          }
        })
      );
  }

  update(body: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/price?id=eq.` + body.id, body)
      .pipe(
        map((response) => {
          if (response.data) {
            return {
              data: response,
            };
          }
        })
      );
  }



  getList(): Observable<any> {
    // var  // ,location:location!FK_location_id(id,name),contact:contact!FK_contact_id(id,name,type)
    var format = `?select=*,material:"material$"!FK_material_id(id,name),location:"location$"!FK_location_id(id,name),counterparty:"counterparty$"!FK_counterparty_id(id,name)`;
    return this.http.get<any>(`${environment.apiUrl}/price-active` + format)
      .pipe(
        map((response) => {
          let materials = response as any;
          materials = materials.map(e =>{
            return {
              ...e,
              material : { ...e.material , pageType : 'materials' },
              // location : { ...e.location , pageType : 'locations' },


            }
          })
          console.log(materials);
          return materials;
        })
      );
  }


  getID(id: string): Observable<any> {
    var format = `&select=*,material(id,name),location:"location$"!FK_location_id(id,name),counterparty:"counterparty$"!FK_counterparty_id(id,name)`;

    return this.http.get<any>(`${environment.apiUrl}/price-active?id=eq.` + id + '' + format)
      .pipe(
        map((response) => {
          response = response.map(e => {
            return {
              ...e,
              material: e.material.name ,
              counterparty: e.counterparty.name  ,
              location: e.location.name  

            }
          })
          const materials = response as any;
          return materials;
        })
      );
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/price?id=eq.` + id)
      .pipe(
        map((response) => {
          const materials = response as any;
          return materials;
        })
      );
  }

  // forgotPassword(email: string): Observable<string> {
  // return this.http.post<any>(`${environment.apiUrl}/auth/forgot-password`, email);
  // }
}
