import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Rental } from '../models/rental';
@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl: string = 'https://localhost:44324/api/rentals/details';
  constructor(private httpClient: HttpClient) {}
  getRentals(): Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
}
