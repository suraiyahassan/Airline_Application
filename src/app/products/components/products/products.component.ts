import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  displayDialog: boolean;

  product: Product = {};

  selectedProduct: Product;

  newProduct: boolean;

  products: Product[];

  cols: any[];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService
      .getProductData()
      .then((products) => (this.products = products));

    this.cols = [
      { field: 'productId', header: 'Product ID' },
      { field: 'productName', header: 'product Name' },
      { field: 'price', header: 'Price' },
    ];
  }

  showDialogToAdd() {
    this.newProduct = true;
    this.product = {};
    this.displayDialog = true;
  }

  save() {
    const products = [...this.products];
    if (this.newProduct) {
      products.push(this.product);
    } else {
      products[this.products.indexOf(this.selectedProduct)] = this.product;
    }

    this.products = products;
    this.product = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.products.indexOf(this.selectedProduct);
    this.products = this.products.filter((val, i) => i !== index);
    this.product = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newProduct = false;
    this.product = this.cloneSeat(event.data);
    this.displayDialog = true;
  }

  cloneSeat(p: Product): Product {
    const product = {};
    // tslint:disable-next-line: forin
    for (const prop in p) {
      product[prop] = p[prop];
    }
    return product;
  }
}
