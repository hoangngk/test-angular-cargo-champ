import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
// import { Identity } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  popupOpenInListPage = new BehaviorSubject(null);
  popupOpenInListPageLoadCount = new BehaviorSubject(null);

  hideColumnSub = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }



  addMat(body: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/material`, body)
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
    return this.http.patch<any>(`${environment.apiUrl}/material?id=eq.` + body.id, body)
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
    return this.http.get<any>(`${environment.apiUrl}/material`)
      .pipe(
        map((response) => {
          const materials = response as any;
          return materials;
        })
      );
  }

  getMaterialID(id: string): Observable<any> {
    var format = `&select=*,"counterparty"!price(id,name,breifDescription,contacts)`;
    // var format = ``;

    return this.http.get<any>(`${environment.apiUrl}/material?id=eq.` + id + '' + format)
      .pipe(
        map((response) => {
          const materials = response as any;
          return materials;
        })
      );
  }

  getTreeTable(id: string): Observable<any> {
    var format = 'supplier-treeview?material_id=eq.'
    return this.http.get<any>(`${environment.apiUrl}/`+ format +'' + id)
    .pipe(
      map((response) => {
        const resp = response as any;
        return resp;
      })
    );
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/material?id=eq.` + id)
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
