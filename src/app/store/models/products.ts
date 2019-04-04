import {BaseEntity} from './abstract.model';
import {TypeService} from './type-service.model';

export interface Product extends BaseEntity {
  id: string;
  price: number;
  service: string;
}
