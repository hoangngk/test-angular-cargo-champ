import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Location } from '../interfaces';
// import { Identity } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  placesType = [
    { title: 'All', value: ['LOADING', 'UNLOADING'], keyCode: 0 },
    { title: 'LOADING', value: ['LOADING'], keyCode: 1 },
    {
      title: 'UNLOADING', value: ['UNLOADING'], keyCode: 2
    }
  ];
  popupOpenInListPage = new BehaviorSubject(null);
  hideColumnSub = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }



  addMat(body: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/location`, body)
      .pipe(
        map((response) => {
          if (response) {
            return {
              data: response[0],
              message: response.details
            };
          }
        })
      );
  }

  updateMat(body: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/location?id=eq.` + body.id, body)
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

  getTreeTable(id: string): Observable<any> {
    var format = 'material-treeview?location_id=eq.'
    return this.http.get<any>(`${environment.apiUrl}/`+ format +'' + id)
    .pipe(
      map((response) => {
        const resp = response as any;
        return resp;
      })
    );
  }

  getList(): Observable<Location[]> {
    return this.http.get<any>(`${environment.apiUrl}/location`)
      .pipe(
        map((response) => {
          const materials = response as any;
          return materials;
        })
      );
  }

  getID(id: string): Observable<Location[]> {

    return this.http.get<any>(`${environment.apiUrl}/location?id=eq.` + id)
      .pipe(
        map((response) => {
          const materials = response
          return materials;
        })
      );
  }


  deleteData(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/location?id=eq.` + id)
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
