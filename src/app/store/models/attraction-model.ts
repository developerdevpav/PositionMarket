import {BaseEntity, Value} from './abstract.model';
import {Type} from './type.model';
import {Tag} from './tag.model';
import {Product} from './products';
import {PositionImageModel} from './position.image.model';

export interface AttractionModel extends BaseEntity {
  title: Value[];
  images: PositionImageModel[];
  tags: string[];
  types: string[];
  products: Product[];
}
