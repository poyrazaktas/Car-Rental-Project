import { ResponseModel } from './responseModel';
import { Car } from './car';

export interface CarResponseModel extends ResponseModel {
  data: Car[];
}
