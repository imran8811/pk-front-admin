import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

import { IProduct, Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  readonly dayjs = dayjs;
  getAllProducts:any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.getAllProducts = res;
    });
  }

}
