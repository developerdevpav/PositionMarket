import {BaseEntity} from './abstract.entity';

export interface ProductEntity extends BaseEntity {
  price?: number;
  order?: number;
  positionId?: string;
  service: string;
}
