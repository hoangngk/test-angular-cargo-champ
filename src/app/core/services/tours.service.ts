import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Tour } from '../interfaces';
// import { Contact } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  popupOpenInListPage = new BehaviorSubject(null);
  deleteBehaviour = new BehaviorSubject(false);

  hideColumnSub = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }



  add(body: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/tour`, body)
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
    return this.http.patch<any>(`${environment.apiUrl}/tour?id=eq.` + body.id, body)
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



  getList(): Observable<Tour[]> {
    return this.http.get<any>(`${environment.apiUrl}/tour` + this.getFormat)
      .pipe(
        map((response) => {
          const contacts = response as any;
          return contacts;
        })
      );
  }

  get getFormat(): string {
    // billedToContact:contact!FK_contact_id(id,name),
    // return `?select=*,loadingLocation:location!FK_loading_location_id(id,name),unloadingLocation:location!FK_unloading_location_id(id,name),material:material$!FK_material_id(id,name),order$:order!FK_order_id(id,note))`;
    return `?select=loadingLocation:location!FK_loading_location_id(id,name),unloadingLocation:location!FK_unloading_location_id(id,name),type,status,billedToContact,material:"material$"!FK_material_id(id,name,conversionTonneCubicMeter),amount,executionDate,deadlineDate,trailerCategory,order,trips:"trip$"(id,amount,status,comments),driver,comments,id`
  }

  getID(id: string, type: string): Observable<any> {
    const format = '?select=loadingLocation:location!FK_loading_location_id(id,name),unloadingLocation:location!FK_unloading_location_id(id,name),type,status,billedToContact,material:"material$"!FK_material_id(id,name,conversionTonneCubicMeter),amount,executionDate,deadlineDate,trailerCategory,order:order!FK_order_id(id,note),trips:"trip$"(id,amount,status,comments),driver,comments,id';
    return this.http.get<any>(`${environment.apiUrl}/tour` + format + '&id=eq.' + id)
      .pipe(
        map((response) => {
          response = response.map(e => {
            if (type === 'list') {
              return {
                ...e,
                conversionTonneCubicMeter: e.material.conversionTonneCubicMeter ? e.material.conversionTonneCubicMeter : null,
                material: e.material ? e.material.name : null,
                loadingLocation: e.loadingLocation ? e.loadingLocation.name : null,
                unloadingLocation: e.unloadingLocation ? e.unloadingLocation.name : null,
                order: e.order ? e.order.note : null
              }
            } else {
              return {
                ...e,
                conversionTonneCubicMeter: e.material.conversionTonneCubicMeter ? e.material.conversionTonneCubicMeter : null,
                material: e.material ? e.material : null,
                loadingLocation: e.loadingLocation ? e.loadingLocation.name : null,
                unloadingLocation: e.unloadingLocation ? e.unloadingLocation.name : null,
                order: e.order ? e.order : null
              }
            }

          })
          const contacts = response as any;
          return contacts;
        })
      );
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/tour?id=eq.` + id)
      .pipe(
        map((response) => {
          const contacts = response as any;
          return contacts;
        })
      );
  }

  // forgotPassword(email: string): Observable<string> {
  // return this.http.post<any>(`${environment.apiUrl}/auth/forgot-password`, email);
  // }
}
