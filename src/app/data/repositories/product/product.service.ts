import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

//evironments
import { environment } from '../../../../environments/environment';

//interfaces
import { Product, DetailProduct, ResponseData } from '../../../domain/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _http = inject(HttpClient);

  constructor() { }

  public getListProducts = (offset:number = 0, limit:number = 20):Observable<ResponseData<Product>> => {

    return this._http.post<ResponseData<Product>>(environment.urlShop + 'products', {offset, limit});

  }

  public getProduct = (id:string):Observable<DetailProduct> => {

    return this._http.post<DetailProduct>(environment.urlShop + 'product', {id});

  }


}
