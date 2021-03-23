import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {ListResponseModel} from '../models/listResponseModel';
import {Brand} from '../models/brand';
import {ResponseModel} from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44324/api/';
  private currentBrand: Brand;

  constructor(private httpClient: HttpClient) {
  }

  getBrands(): Observable<ListResponseModel<Brand>> {
    const extension = 'brands/all';
    return this.httpClient.get<ListResponseModel<Brand>>(
      this.apiUrl + extension
    );
  }

  addBrand(brand: Brand): Observable<ResponseModel> {
    const extension = 'brands/add';
    return this.httpClient.post<ResponseModel>(this.apiUrl + extension, brand);
  }

  updateBrand(brand: Brand): Observable<ResponseModel> {
    const extension = 'brands/update';
    return this.httpClient.post<ResponseModel>(this.apiUrl + extension, brand);
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  getCurrentBrand() {
    return this.currentBrand;
  }
}
