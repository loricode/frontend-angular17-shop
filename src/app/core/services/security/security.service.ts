import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';


//environment
import { environment } from '../../../../environments/environment';

import { AuthResponse } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private _http = inject(HttpClient);
  
  public loginPortal = (email:string, password:string): Observable<AuthResponse> => {

   return this._http.post<AuthResponse>(environment.urlShop + 'auth/loginPortal', {email, password})

  }

  public currentUser = (): Observable<AuthResponse> => {

    const token  = window.localStorage.getItem("tokenSecurity") || '';

    return this._http.post<AuthResponse>(environment.urlShop + 'auth/currentUser', {token })
 
   }

   public registerPortal = (obj:any): Observable<AuthResponse> => {

    return this._http.post<AuthResponse>(environment.urlShop + 'auth/create', obj)
 
   }

}
