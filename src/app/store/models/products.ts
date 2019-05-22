import {BaseEntity} from './abstract.model';

export interface Product extends BaseEntity {
  id: string;
  price: number;
  order: number;
  service: string;
}
