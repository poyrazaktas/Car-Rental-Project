import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  isDataLoaded = false;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarsByBrandId(params['id']);
      } else {
        this.getCars();
      }
    });
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.isDataLoaded = true;
    });
  }
  getCarsByBrandId(id: number) {
    this.carService.getCarsByBrandId(id).subscribe((response) => {
      this.cars = response.data;
      this.isDataLoaded = true;
    });
  }
}
