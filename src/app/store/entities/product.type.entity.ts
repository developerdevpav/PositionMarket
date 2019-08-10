import {Nsi, Value} from './abstract.entity';
import {TypeServiceEnum} from './constants';

export interface ProductTypeEntity extends Nsi {
  description: Value[];
  type: TypeServiceEnum;
}
