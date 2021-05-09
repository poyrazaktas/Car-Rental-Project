import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Car } from '../models/car';
import { ResponseModel } from '../models/responseModel';
import { AppSettings } from '../app-settings';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = AppSettings.API_ENDPOINT;
  private currentCar: Car;

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    const extension = 'cars/details';
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl + extension);
  }

  getCarsByBrandId(brandId: number): Observable<ListResponseModel<Car>> {
    const extension = 'cars/brand?brandId=';
    console.log(this.apiUrl + extension + brandId);
    return this.httpClient.get<ListResponseModel<Car>>(
      this.apiUrl + extension + brandId
    );
  }

  getCarsByColorId(colorId: number): Observable<ListResponseModel<Car>> {
    const extension = 'cars/color?colorId=';
    console.log(this.apiUrl + extension + colorId);
    return this.httpClient.get<ListResponseModel<Car>>(
      this.apiUrl + extension + colorId
    );
  }

  getCarById(carId: number): Observable<ListResponseModel<Car>> {
    const extension = 'cars/detailsbycarid?carId=';
    return this.httpClient.get<ListResponseModel<Car>>(
      this.apiUrl + extension + carId
    );
  }

  addCar(car: Car): Observable<ResponseModel> {
    const extension = 'cars/add';
    return this.httpClient.post<ResponseModel>(this.apiUrl + extension, car);
  }
  updateCar(car: Car): Observable<ResponseModel> {
    const extension = 'cars/update';
    return this.httpClient.post<ResponseModel>(this.apiUrl + extension, car);
  }

  setCurrentCar(car: Car) {
    this.currentCar = car;
  }

  getCurrentCar() {
    return this.currentCar;
  }
}
