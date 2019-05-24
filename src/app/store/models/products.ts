import {BaseEntity} from './abstract.model';

export interface Product extends BaseEntity {
  id: string;
  price: number;
  order: number;
  service: string;
}

export interface SelectedProduct extends BaseEntity {
  id: string;
  attraction: string;
  price: number;
  order: number;
  service: string;
}
