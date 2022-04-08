import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
// import { Identity } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    langChange = new BehaviorSubject(null);

    constructor(private http: HttpClient) {
    }



    //   signUp(email: string): Observable<{ email: string, token: string }> {
    //     return this.http.post<any>(`${environment.apiUrl}/auth/signup-token`, {email})
    //       .pipe(
    //         map((response) => {
    //           if (response.data) {
    //             return {
    //               email: response.data.email,
    //               token: response.data.token
    //             };
    //           }
    //         })
    //       );
    //   }



    signIn(email: string, pass: string): Observable<any> {
        
        return this.http.post<any>(`${environment.apiUrl}/login`, { email, pass })
            .pipe(
                map((response) => {
                    const identity = response as any;
                    identity.jwt = response.token;
                    return identity;
                })
            );
    }

    // forgotPassword(email: string): Observable<string> {
        // return this.http.post<any>(`${environment.apiUrl}/auth/forgot-password`, email);
    // }
}
