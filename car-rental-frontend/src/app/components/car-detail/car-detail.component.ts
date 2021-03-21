import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CarDetail} from 'src/app/models/carDetail';
import {CarDetailService} from 'src/app/services/car-detail.service';
import {RentalService} from '../../services/rental.service';
import {CarService} from '../../services/car.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[];
  isDataLoaded = false;
  message: string;
  isReturned: boolean;
  CarId: number;
  // ng-image-slider
  carImages: Array<object> = [];

  constructor(
    private carDetailService: CarDetailService,
    private  rentalService: RentalService,
    private  toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    public  router: Router,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.carId) {
        this.CarId = params.carId;
        this.getCarDetails(this.CarId);
      } else {
        console.log('Not a valid request!');
      }
    });
  }

  // tslint:disable-next-line:typedef
  getCarDetails(carId: number) {
    this.carDetailService.getCarDetails(carId).subscribe((response) => {
      this.carDetails = response.data;
      this.message = response.message;
      this.isDataLoaded = true;
      for (const carDetail of this.carDetails) {
        this.carImages.push({
          image: 'https://localhost:44324/uploads/' + carDetail.imageName,
          thumbImage: 'https://localhost:44324/uploads/' + carDetail.imageName
        });
      }
    });
  }


}

