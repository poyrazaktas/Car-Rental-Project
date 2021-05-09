import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/loginModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { RegisterModel } from '../models/registerModel';
import { LocalStorageService } from './local-storage.service';
import { AppSettings } from '../app-settings';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = AppSettings.API_ENDPOINT;

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    const extension = 'auth/login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + extension,
      loginModel
    );
  }

  register(
    registerModel: RegisterModel
  ): Observable<SingleResponseModel<TokenModel>> {
    const extension = 'auth/register';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + extension,
      registerModel
    );
  }

  // tslint:disable-next-line:typedef
  isAuthenticated() {
    if (this.localStorageService.getToken()) {
      return true;
    }
    return false;
  }
}
