import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
// import { Identity } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  popupOpenInListPage = new BehaviorSubject(null);
  popupOpenInListPageLoadCount = new BehaviorSubject(null);

  hideColumnSub = new BehaviorSubject(null);
  constructor(private http: HttpClient) {
  }



  addMat(body: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/order`, body)
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
    return this.http.patch<any>(`${environment.apiUrl}/order?id=eq.` + body.id, body)
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
    return this.http.get<any>(`${environment.apiUrl}/order`)
      .pipe(
        map((response) => {
          const orderss = response as any;
          return orderss;
        })
      );
  }

  getID(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/order?id=eq.` + id)
      .pipe(
        map((response) => {
          const orderss = response as any;
          return orderss;
        })
      );
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/order?id=eq.` + id)
      .pipe(
        map((response) => {
          const orderss = response as any;
          return orderss;
        })
      );
  }

  getListSelectedTours(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/order?select=*,tour(*)`)
      .pipe(
        map((response) => {
          const orderss = response as any;
          return orderss;
        })
      );
  }

  // forgotPassword(email: string): Observable<string> {
  // return this.http.post<any>(`${environment.apiUrl}/auth/forgot-password`, email);
  // }
}
