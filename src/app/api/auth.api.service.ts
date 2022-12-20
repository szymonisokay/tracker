import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getEndpoint } from '../config/api-endpoints.config';
import { IUser, IUserLoginData, IUserRegisterData } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  constructor(private http: HttpClient) {}

  login(loginData: IUserLoginData) {
    const endpoint = getEndpoint('login').path;

    return this.http.post<IUser>(endpoint, loginData);
  }

  register(registerData: IUserRegisterData) {
    const endpoint = getEndpoint('register').path;

    return this.http.post<IUser>(endpoint, registerData);
  }
}
