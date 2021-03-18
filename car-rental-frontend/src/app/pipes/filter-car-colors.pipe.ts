import {Pipe, PipeTransform} from '@angular/core';
import {Car} from '../models/car';
import {Color} from '../models/color';

@Pipe({
  name: 'filterCarColors'
})
export class FilterCarColorsPipe implements PipeTransform {

  transform(value: Car[], currentColor: Color): Car[] {

    return currentColor ? value.filter((car: Car) => car.colorId === currentColor.id) : value;

  }

}
