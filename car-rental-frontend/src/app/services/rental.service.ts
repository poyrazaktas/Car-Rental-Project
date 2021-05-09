import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppSettings } from '../app-settings';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = AppSettings.API_ENDPOINT;
  private currentRental: Rental;

  constructor(private httpClient: HttpClient) {}

  getRentalDetails(): Observable<ListResponseModel<Rental>> {
    const extension = 'rentals/details';
    return this.httpClient.get<ListResponseModel<Rental>>(
      this.apiUrl + extension
    );
  }

  rentACar(rental: Rental): Observable<ResponseModel> {
    const extension = 'rentals/add';
    return this.httpClient
      .post<ResponseModel>(this.apiUrl + extension, rental)
      .pipe(catchError(this.errorHandler));
  }

  checkIfCarReturned(carId: number): Observable<ResponseModel> {
    const extension = 'rentals/returned?carId=';
    return this.httpClient.get<ResponseModel>(this.apiUrl + extension + carId);
  }

  // tslint:disable-next-line:typedef
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }

  // tslint:disable-next-line:typedef
  setCurrentRental(rental: Rental) {
    this.currentRental = rental;
  }

  // tslint:disable-next-line:typedef
  getCurrentRental() {
    return this.currentRental;
  }
}
