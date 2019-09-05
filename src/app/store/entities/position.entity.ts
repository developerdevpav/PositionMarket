import {BaseEntity, Value} from './abstract.entity';
import {TagEntity} from './tag.entity';
import {TypeEntity} from './type.entity';
import {ProductEntity} from './product.entity';

export interface PositionEntity extends BaseEntity {
  title: Value[];
  images?: string[];
  tags?: TagEntity[];
  types?: TypeEntity[];
  products?: ProductEntity[];
}
