import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Customer } from '../models/customer';
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl= 'https://localhost:44324/api/customers/all';
  constructor(private httpClient: HttpClient) {}
  getCustomers(): Observable<ListResponseModel<Customer>> {
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  }
}
