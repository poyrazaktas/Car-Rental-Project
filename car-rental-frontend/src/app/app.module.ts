import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrandComponent} from './components/brand/brand.component';
import {ColorComponent} from './components/color/color.component';
import {CustomerComponent} from './components/customer/customer.component';
import {CarComponent} from './components/car/car.component';
import {RentalComponent} from './components/rental/rental.component';
import {NaviComponent} from './components/navi/navi.component';
import {CategoryComponent} from './components/category/category.component';
import {CarDetailComponent} from './components/car-detail/car-detail.component';
import {FormsModule} from '@angular/forms';
import {FilterBrandsPipe} from './pipes/filter-brands.pipe';
import {FilterColorsPipe} from './pipes/filter-colors.pipe';
import {FilterCarsPipe} from './pipes/filter-cars.pipe';
import {FilterCarBrandsPipe} from './pipes/filter-car-brands.pipe';
import {FilterCarColorsPipe} from './pipes/filter-car-colors.pipe';
import {NgImageSliderModule} from 'ng-image-slider';
import {RentACarComponent} from './components/rent-a-car/rent-a-car.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarComponent,
    RentalComponent,
    NaviComponent,
    CategoryComponent,
    CarDetailComponent,
    FilterBrandsPipe,
    FilterColorsPipe,
    FilterCarsPipe,
    FilterCarBrandsPipe,
    FilterCarColorsPipe,
    RentACarComponent,
    PaymentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, NgImageSliderModule,
    BrowserAnimationsModule, ToastrModule.forRoot(
    {
      positionClass: 'toast-bottom-right',
    }
  )],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
