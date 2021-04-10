import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilterBrandsPipe} from './pipes/filter-brands.pipe';
import {FilterColorsPipe} from './pipes/filter-colors.pipe';
import {FilterCarsPipe} from './pipes/filter-cars.pipe';
import {FilterCarBrandsPipe} from './pipes/filter-car-brands.pipe';
import {FilterCarColorsPipe} from './pipes/filter-car-colors.pipe';
import {NgImageSliderModule} from 'ng-image-slider';
import {RentACarComponent} from './components/rent-a-car/rent-a-car.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {PaymentComponent} from './components/payment/payment.component';
import {BrandAddComponent} from './components/brand-add/brand-add.component';
import {ColorAddComponent} from './components/color-add/color-add.component';
import {CarAddComponent} from './components/car-add/car-add.component';
import {BrandUpdateComponent} from './components/brand-update/brand-update.component';
import {ColorUpdateComponent} from './components/color-update/color-update.component';
import {CarUpdateComponent} from './components/car-update/car-update.component';
import {LoginComponent} from './components/login/login.component';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';

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
    BrandAddComponent,
    ColorAddComponent,
    CarAddComponent,
    BrandUpdateComponent,
    ColorUpdateComponent,
    CarUpdateComponent,
    LoginComponent,
    RegisterComponent,
    CustomerDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, NgImageSliderModule,
    BrowserAnimationsModule, ToastrModule.forRoot(
      {
        positionClass: 'toast-bottom-right',
      }
    )],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
