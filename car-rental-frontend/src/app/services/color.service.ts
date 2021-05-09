import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';
import { AppSettings } from '../app-settings';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = AppSettings.API_ENDPOINT;
  private currentColor: Color;

  constructor(private htppClient: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    const extension = 'colors/all';
    return this.htppClient.get<ListResponseModel<Color>>(
      this.apiUrl + extension
    );
  }

  addColor(color: Color): Observable<ResponseModel> {
    const extension = 'colors/add';
    return this.htppClient.post<ResponseModel>(this.apiUrl + extension, color);
  }

  updateColor(color: Color): Observable<ResponseModel> {
    const extension = 'colors/update';
    return this.htppClient.post<ResponseModel>(this.apiUrl + extension, color);
  }

  setCurrentColor(color: Color) {
    this.currentColor = color;
  }

  getCurrentColor() {
    return this.currentColor;
  }
}
