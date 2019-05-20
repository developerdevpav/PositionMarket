import {BaseEntity, Value} from './abstract.model';
import {Product} from './products';
import {PositionImageModel} from './position.image.model';

export interface AttractionModel extends BaseEntity {
  title: Value[];
  description: Value[];
  images: PositionImageModel[];
  tags: string[];
  types: string[];
  products: Product[];
}
