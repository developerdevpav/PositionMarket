import {BaseEntity} from './abstract.model';

export interface PositionImageModel extends BaseEntity {
  image: string;
  mainImage: boolean;
  url: string;
}
