import {Nsi, TypeServiceEnum} from './abstract.entity';
import {Value} from '../models/abstract.model';

export interface ProductTypeEntity extends Nsi {
  description: Value[];
  type: TypeServiceEnum;
}
