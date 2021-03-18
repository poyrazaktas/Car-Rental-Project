import {Pipe, PipeTransform} from '@angular/core';
import {Color} from '../models/color';

@Pipe({
  name: 'filterColors'
})
export class FilterColorsPipe implements PipeTransform {

  transform(value: Color[], filterText: string): Color[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText ? value.filter((color: Color) => color.name.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
