import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../../services/car.service';
import {ToastrService} from 'ngx-toastr';
import {Car} from '../../models/car';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carUpdateForm: FormGroup;
  currentCar: Car;

  constructor(private formBuilder: FormBuilder,
              private carService: CarService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.currentCar = this.getCurrentCar();
    this.createCarUpdateForm();
  }

  createCarUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      id: this.currentCar.carId,
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  update() {
    let carModel = Object.assign({}, this.carUpdateForm.value);
    this.carService.updateCar(carModel).subscribe((response) => {
      this.toastrService.success(response.message);
    }, responseError => {
      this.toastrService.error(responseError.error.message);
    });
  }

  getCurrentCar() {
    return this.carService.getCurrentCar();
  }
}
