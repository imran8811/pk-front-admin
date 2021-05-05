import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUserLogin, IUserSignup } from '../models/auth.model';
import { Routes } from './routes';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {}

  userLogin = async (data: IUserLogin) => {
    const response = await this.http.post(`${Routes.USER_LOGIN}`, data).toPromise() as IUserLogin;
    return response;
  }

  userSignup = async (data: IUserSignup) => {
    const response = await this.http.post(`${Routes.USER_REGISTER}`, data).toPromise() as IUserSignup;
    return response;
  }
}
