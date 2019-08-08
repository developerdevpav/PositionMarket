import {BaseEntity} from '../models/abstract.model';

export interface ProductEntity extends BaseEntity {
  price?: number;
  order?: number;
  positionId?: string;
  service: string;
}
