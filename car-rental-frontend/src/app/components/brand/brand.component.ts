import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Brand} from '../../models/brand';
import {BrandService} from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  isDataLoaded = false;
  filterText = '';

  constructor(private brandService: BrandService) {
  }

  ngOnInit(): void {
    this.getBrands();
  }

  // tslint:disable-next-line:typedef
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.isDataLoaded = true;
    });
  }

  // tslint:disable-next-line:typedef
  setCurrentBrand(brand: Brand) {
    this.brandService.setCurrentBrand(brand);
  }
}
