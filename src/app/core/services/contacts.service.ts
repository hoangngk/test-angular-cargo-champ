import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Contact } from '../interfaces/contact.interface';
// import { Contact } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  popupOpenInListPage = new BehaviorSubject(null);
  deleteBehaviour = new BehaviorSubject(false);

  hideColumnSub = new BehaviorSubject(null);
  constructor(private http: HttpClient) {
  }



  add(body: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/counterparty`, body)
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
    return this.http.patch<any>(`${environment.apiUrl}/counterparty?id=eq.` + body.id, body)
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



  getList(): Observable<Contact[]> {
    return this.http.get<any>(`${environment.apiUrl}/counterparty`)
      .pipe(
        map((response) => {
          const contacts = response as any;
          return contacts;
        })
      );
  }

  getID(id: string): Observable<any> {
    var format = ``;

    return this.http.get<any>(`${environment.apiUrl}/counterparty?id=eq.` + id + '' + format)
      .pipe(
        map((response) => {
          const contacts = response as any;
          return contacts;
        })
      );
  }


  // getTreeTable(id: string): Observable<any> {
  //   var format = 'location?select=*,childern:price!inner(*,data:material(*))&price.counterparty=eq.'
  //   return this.http.get<any>(`${environment.apiUrl}/`+ format +'' + id)
  //   .pipe(
  //     map((response) => {
  //       const contacts = response as any;
  //       return contacts;
  //     })
  //   );
  // }

  getTreeTable(id: string): Observable<any> {
    var format = 'location-treeview-scr?counterparty_id=eq.'
    return this.http.get<any>(`${environment.apiUrl}/`+ format +'' + id)
    .pipe(
      map((response) => {
        const resp = response as any;
        return resp;
      })
    );
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/counterparty?id=eq.` + id)
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
