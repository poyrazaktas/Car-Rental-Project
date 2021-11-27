import { Customer } from 'src/app/models/customer';
import { Injectable, enableProdMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';
import { AppSettings } from '../app-settings';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = AppSettings.API_ENDPOINT;

  private currentUser: Customer;

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) { }

  getCustomers(): Observable<ListResponseModel<Customer>> {
    const extension = 'customers/details';
    return this.httpClient.get<ListResponseModel<Customer>>(
      this.apiUrl + extension
    );
  }

  getCustomerByMail(email: string): Observable<SingleResponseModel<Customer>> {
    const extension = 'customers/getByMail?email=';
    return this.httpClient.get<SingleResponseModel<Customer>>(
      this.apiUrl + extension + email
    );
  }

  updateUser(user: User): Observable<ResponseModel> {
    const extension = 'users/update';
    return this.httpClient.post<ResponseModel>(this.apiUrl + extension, user);
  }

  updateCustomer(customer: Customer): Observable<ResponseModel> {
    const extension = 'customers/update';
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + extension,
      customer
    );
  }

  getCurrentUser(): Customer {
    var userInStorage = this.localStorageService.getFullUserDetails();

    if (!this.currentUser && userInStorage) {
      this.setCurrentUser(userInStorage);
    }

    return this.currentUser;
  }

  setCurrentUser(user: Customer) {
    this.currentUser = user;
  }
}
