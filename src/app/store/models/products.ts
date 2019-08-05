import {BaseEntity} from './abstract.model';
import {TypeServiceEnum} from './type-service';

export interface Product extends BaseEntity {
  id: string;
  price: number;
  order: number;
  service: string;
}

export interface Nsi {
  id: string;
  values: Value[];
}

export interface Value {
  language: string;
  value: string;
}

export interface Tag extends Nsi {}

export interface Type extends Nsi {}

export interface TypeService extends Nsi {
  description: Value[],
  type: TypeServiceEnum;
}

export interface RootObject {
  description: Value[];
  id: string;
  images: Image[];
  products: Product[];
  rentPriceHour: number;
  tags: string[];
  title: Value[];
  types: string[];
}
