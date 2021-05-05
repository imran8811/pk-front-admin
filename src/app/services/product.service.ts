import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IProduct, IProductRes } from '../models/product.model';
import { Routes } from './routes';

@Injectable({providedIn: 'root'})
export class ProductService {

  constructor(private http: HttpClient) {}

  addProduct = async (data: IProduct) => {
    const response = await this.http.post(`${Routes.ADD_PRODUCT}`, data).toPromise() as IProductRes;
    return response;
  }

}
