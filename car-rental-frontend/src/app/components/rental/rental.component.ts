import {Component, OnInit} from '@angular/core';
import {RentalService} from 'src/app/services/rental.service';
import {Rental} from 'src/app/models/rental';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  isDataLoaded = false;

  constructor(private rentalService: RentalService) {
  }

  ngOnInit(): void {
    this.getRentalsDetails();
  }

  // tslint:disable-next-line:typedef
  getRentalsDetails() {
    this.rentalService.getRentalDetails().subscribe((response) => {
      this.rentals = response.data;
      this.isDataLoaded = true;
    });
  }
}
