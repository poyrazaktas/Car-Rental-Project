import {Component, OnInit} from '@angular/core';
import {RentalService} from '../../services/rental.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from '../../services/car.service';
import {Car} from '../../models/car';
import {Rental} from '../../models/rental';
import {ToastrService} from 'ngx-toastr';
import {CustomerService} from '../../services/customer.service';
import {FindexService} from '../../services/findex.service';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
  selector: 'app-rent-a-car',
  templateUrl: './rent-a-car.component.html',
  styleUrls: ['./rent-a-car.component.css']
})
export class RentACarComponent implements OnInit {

  currentCar: Car;
  isLoaded = false;
  rentDate: Date;
  returnDate: Date;
  rental: Rental = new Rental();

  constructor(private rentalService: RentalService,
              private carService: CarService,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private toastrService: ToastrService,
              private findexService: FindexService,
              private localStorageService: LocalStorageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.carId) {
        this.getCarById(params.carId);
      } else {
        console.log('Not a valid request!');
      }
    });
    const carFindexScore = this.findexService.getFindexScore();
    if (carFindexScore > this.findexService.customerFindexScore) {
      this.toastrService.error('Kullanıcı findeks puanı : ' + this.findexService.customerFindexScore +
        '\nBu arabayı kiralamak için yetersiz!\nAraba findex puanı : ' + carFindexScore);
      this.router.navigate(['cars']);
    }
  }

  // tslint:disable-next-line:typedef
  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe((response) => {
      this.currentCar = response.data[0];
      this.isLoaded = true;
    });
  }

  // tslint:disable-next-line:typedef
  createRental() {
    this.rentalService.checkIfCarReturned(this.currentCar.carId).subscribe((response) => {
      this.rental.carId = this.currentCar.carId;
      this.rental.customerId = this.customerService.getCurrentUser().customerId;
      this.rental.rentDate = this.rentDate;
      this.rental.returnDate = this.returnDate;
      this.rental.carDailyPrice = this.currentCar.carDailyPrice;
      this.rentalService.setCurrentRental(this.rental);
      console.log(this.rental);
      this.toastrService.success('Ödeme sayfasına yönlendiriliyorsunuz.', 'İstek Başarılı');
      this.router.navigateByUrl('/payment');
    }, error => {
      this.toastrService.error('Kiralanmak istenen araba henüz teslim edilmemiş.', 'İstek Başarısız');
      this.router.navigateByUrl('/cars');
    });

  }
}
