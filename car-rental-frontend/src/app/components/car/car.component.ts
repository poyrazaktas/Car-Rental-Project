import {Component, OnInit} from '@angular/core';
import {CarService} from 'src/app/services/car.service';
import {Car} from 'src/app/models/car';
import {ActivatedRoute} from '@angular/router';
import {ColorService} from '../../services/color.service';
import {BrandService} from '../../services/brand.service';
import {Brand} from '../../models/brand';
import {Color} from '../../models/color';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  brands: Brand[];
  colors: Color[];
  isDataLoaded = false;
  currentBrand: Brand;
  currentColor: Color;
  filterText = '';

  constructor(
    private carService: CarService,
    private colorService: ColorService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getBrands();
      this.getColors();

      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      } else {
        this.getCars();
      }
    });
  }

  // tslint:disable-next-line:typedef
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.isDataLoaded = true;
    });
  }

  // tslint:disable-next-line:typedef
  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.isDataLoaded = true;
    });
  }

  // tslint:disable-next-line:typedef
  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
      this.isDataLoaded = true;
    });
  }

  // tslint:disable-next-line:typedef
  setCurrentCar(car: Car) {
    this.carService.setCurrentCar(car);
  }

  // tslint:disable-next-line:typedef
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  // tslint:disable-next-line:typedef
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  // pipe yazılır : filter
}
