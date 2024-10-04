import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

//evironments
import { environment } from '../../../../environments/environment';
import { SaleProduct } from '../../../domain/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  
  private _http = inject(HttpClient);

  constructor() { }

  public getSalesProducts = ():Observable<SaleProduct[]> => {

    return this._http.get<SaleProduct[]>(environment.urlShop + 'sales/products');

  }

}
