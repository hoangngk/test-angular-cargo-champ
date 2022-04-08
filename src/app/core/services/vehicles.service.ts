import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
// import { Identity } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  popupOpenInListPage = new BehaviorSubject(null);
  popupOpenInListPageLoadCount = new BehaviorSubject(null);

  hideColumnSub = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }



  add(body: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/vehicle`, body)
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

  updateMat(body: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/vehicle?id=eq.` + body.id, body)
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
    return this.http.get<any>(`${environment.apiUrl}/vehicle`)
      .pipe(
        map((response) => {
          const vehicles = response as any;
          return vehicles;
        })
      );
  }

  getID(id: string): Observable<any> {
    // var format = `&select=*,counterparty(id,name,breifDescription,contacts)`;
    var format = ``;

    return this.http.get<any>(`${environment.apiUrl}/vehicle?id=eq.` + id + '' + format)
      .pipe(
        map((response) => {
          const vehicles = response as any;
          return vehicles;
        })
      );
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/vehicle?id=eq.` + id)
      .pipe(
        map((response) => {
          const vehicles = response as any;
          return vehicles;
        })
      );
  }

  // forgotPassword(email: string): Observable<string> {
  // return this.http.post<any>(`${environment.apiUrl}/auth/forgot-password`, email);
  // }
}
