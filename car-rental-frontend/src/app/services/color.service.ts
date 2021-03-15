import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl: string = 'https://localhost:44324/api/colors/all';
  constructor(private htppClient: HttpClient) {}
  getColors(): Observable<ListResponseModel<Color>> {
    return this.htppClient.get<ListResponseModel<Color>>(this.apiUrl);
  }
}
