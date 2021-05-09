import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CardInformation } from '../models/cardInformation';
import { Observable, throwError } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { catchError } from 'rxjs/operators';
import { AppSettings } from '../app-settings';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  apiUrl = AppSettings.API_ENDPOINT;

  constructor(private httpClient: HttpClient) {}

  checkCardInfo(cardInformation: CardInformation): Observable<ResponseModel> {
    const extension = 'cardinformations/check';
    return this.httpClient
      .post<ResponseModel>(this.apiUrl + extension, cardInformation)
      .pipe(catchError(this.errorHandler));
  }

  pay(price: number): Observable<ResponseModel> {
    const extension = 'cardinformations/pay?price=';
    return this.httpClient
      .get<ResponseModel>(this.apiUrl + extension + price)
      .pipe(catchError(this.errorHandler));
  }

  // tslint:disable-next-line:typedef
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}
