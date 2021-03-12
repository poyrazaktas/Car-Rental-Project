import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColorResponseModel } from 'src/app/models/colorResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl: string = 'https://localhost:44324/api/colors/all';
  constructor(private htppClient: HttpClient) {}
  getColors(): Observable<ColorResponseModel> {
    return this.htppClient.get<ColorResponseModel>(this.apiUrl);
  }
}
