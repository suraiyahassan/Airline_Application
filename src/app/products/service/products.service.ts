import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url:string = 'http://localhost:8080/products'
  constructor(private http: HttpClient) {}

  // getProductData() {
  //   return (
  //     this.http
  //       .get<any>('http://localhost:8080/products')
  //       .toPromise()
  //       // tslint:disable-next-line: no-angle-bracket-type-assertion
  //       .then((res) => <Product[]> res.data)
  //       .then((data) => {
  //         return data;
  //       })
  //   );
  // }


getAllProducts():Observable<Product[]> {
  return this.http.get<Product[]>(this.url);
}

saveProduct(product: Product):Observable<Product>{
  return this.http.post<Product>(this.url, product, httpOptions);
}

editProduct(product: Product):Observable<any> {
  const url = `${this.url}/${product.id}`;
  return this.http.put(url, product, httpOptions);
}
deleteProduct(product:Product):Observable<Product> {
  const url = `${this.url}/${product.id}`;
  return this.http.delete<Product>(url, httpOptions);
}
}
