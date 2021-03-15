import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';

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
    path: 'cars/brand/:id',
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
    pathMatch: 'full',
    component: BrandComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
