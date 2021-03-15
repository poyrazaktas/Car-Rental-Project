import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Car } from '../models/car';
@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl: string = 'https://localhost:44324/api/';
  constructor(private httpClient: HttpClient) {}
  getCars(): Observable<ListResponseModel<Car>> {
    let extension = 'cars/details';
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl + extension);
  }

  getCarsByBrandId(id: number): Observable<ListResponseModel<Car>> {
    let extension = 'cars/brand?id=';
    console.log(this.apiUrl + extension + id);
    return this.httpClient.get<ListResponseModel<Car>>(
      this.apiUrl + extension + id
    );
  }
}
