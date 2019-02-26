import {BaseEntity, Value} from './abstract.model';
import {Type} from './type.model';
import {Tag} from './tag.model';
import {Product} from './products';

export interface AttractionModel extends BaseEntity {
  title: Value[];
  link: string;
  image: string;
  tags: Tag[];
  types: Type[];
  products: Product[];
}
