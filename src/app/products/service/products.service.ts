import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProductData() {
    return (
      this.http
        .get<any>('assets/product-data.json')
        .toPromise()
        // tslint:disable-next-line: no-angle-bracket-type-assertion
        .then((res) => <Product[]> res.data)
        .then((data) => {
          return data;
        })
    );
  }
}
