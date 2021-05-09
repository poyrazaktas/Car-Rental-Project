import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { RentACarComponent } from './components/rent-a-car/rent-a-car.component';
import { PaymentComponent } from './components/payment/payment.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { RegisterComponent } from './components/register/register.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CarComponent,
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
    canActivate: [LoginGuard],
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: 'brands/add',
    component: BrandAddComponent,
  },
  {
    path: 'colors/add',
    component: ColorAddComponent,
  },
  {
    path: 'cars/add',
    component: CarAddComponent,
  },
  {
    path: 'brands/update/:brandId',
    component: BrandUpdateComponent,
  },
  {
    path: 'colors/update/:colorId',
    component: ColorUpdateComponent,
  },
  {
    path: 'cars/update/:carId',
    component: CarUpdateComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'customer-detail',
    component: CustomerDetailComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
