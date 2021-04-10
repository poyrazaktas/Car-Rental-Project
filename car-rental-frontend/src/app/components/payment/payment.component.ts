import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {BankService} from '../../services/bank.service';
import {CardInformation} from '../../models/cardInformation';
import {RentalService} from '../../services/rental.service';
import {Rental} from '../../models/rental';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  myCardInfo: CardInformation = new CardInformation();
  cardId: string;
  cardCvc: string;
  currentRental: Rental;

  constructor(private toastrService: ToastrService, private bankService: BankService,
              private rentalService: RentalService, private router: Router, private location: Location) {
  }

  ngOnInit(): void {
    this.currentRental = this.rentalService.getCurrentRental();
  }

  // tslint:disable-next-line:typedef
  checkCardInfo() {
    this.myCardInfo.cardId = this.cardId;
    this.myCardInfo.cardCvc = this.cardCvc;
    this.bankService.checkCardInfo(this.myCardInfo).subscribe((response) => {
      this.toastrService.success(response.message);
      this.pay();
    }, error => {
      this.toastrService.error('Kart bilgileri geçersiz.');
    });
  }

  // tslint:disable-next-line:typedef
  pay() {
    // Günlük Kira * Kiralanacak Gün Sayısı
    const price = this.currentRental.carDailyPrice * Math.abs(
      new Date(this.currentRental.returnDate).getDate() -
      new Date(this.currentRental.rentDate).getDate());
    this.bankService.pay(price).subscribe((response) => {
      this.toastrService.success(response.message);
      this.rentACar();
    }, error => {
      this.toastrService.error('Bakiye yeterli değil.', 'Ödeme başarısız.');
      this.location.back();
    });
  }

  // tslint:disable-next-line:typedef
  rentACar() {
    this.rentalService.rentACar(this.currentRental).subscribe((response) => {
      this.toastrService.success(response.message);
      this.router.navigateByUrl('/rentals');
    }, error => {
      this.toastrService.error('Kiralama eklenemedi.', 'Beklenemyen Hata');
    });
  }
}
