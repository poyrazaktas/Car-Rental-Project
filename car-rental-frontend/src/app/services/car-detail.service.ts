import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CarDetail } from '../models/carDetail';
import { AppSettings } from '../app-settings';
@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl = AppSettings.API_ENDPOINT;
  constructor(private httpClient: HttpClient) {}
  getCarDetails(carId: number): Observable<ListResponseModel<CarDetail>> {
    const extension = 'carimages/photos?carId=';
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      this.apiUrl + extension + carId
    );
  }
}
