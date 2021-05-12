import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IImageUpload } from '../models/image.model';
import { Routes } from './routes';

@Injectable({providedIn: 'root'})
export class ImageService {
  URL = Routes.IMAGE_UPLOAD;

  constructor(
    private http: HttpClient
  ) {}

  uploadImage = async (data:any) => {
    const response = await this.http.post(`${Routes.IMAGE_UPLOAD}`, data).toPromise() as IImageUpload;
    return response;
  }

}
