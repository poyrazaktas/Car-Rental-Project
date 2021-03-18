import {Pipe, PipeTransform} from '@angular/core';
import {Car} from '../models/car';
import {Brand} from '../models/brand';

@Pipe({
  name: 'filterCarBrands'
})
export class FilterCarBrandsPipe implements PipeTransform {

  transform(value: Car[], currentBrand: Brand): Car[] {

    return currentBrand ? value.filter((car) => car.brandId === currentBrand.id) : value;

  }

}
