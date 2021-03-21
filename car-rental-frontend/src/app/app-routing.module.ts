import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BrandComponent} from './components/brand/brand.component';
import {CarDetailComponent} from './components/car-detail/car-detail.component';
import {CarComponent} from './components/car/car.component';
import {ColorComponent} from './components/color/color.component';
import {CustomerComponent} from './components/customer/customer.component';
import {RentalComponent} from './components/rental/rental.component';
import {RentACarComponent} from './components/rent-a-car/rent-a-car.component';
import {PaymentComponent} from './components/payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: RentalComponent,
  },
  {
    path: 'rentals',
    component: RentalComponent,
  },
  {
    path: 'cars',
    component: CarComponent,
  },
  {
    path: 'cars/brand/:brandId',
    pathMatch: 'full',
    component: CarComponent,
  },
  {
    path: 'cars/color/:colorId',
    pathMatch: 'full',
    component: CarComponent,
  },
  {
    path: 'colors',
    component: ColorComponent,
  },
  {
    path: 'customers',
    component: CustomerComponent,
  },
  {
    path: 'brands',
    component: BrandComponent,
  },
  {
    path: 'cardetails/:carId',
    component: CarDetailComponent,
  },
  {
    path: 'rent/:carId',
    component: RentACarComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
