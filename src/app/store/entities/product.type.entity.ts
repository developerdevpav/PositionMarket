import {Nsi, TypeServiceEnum, Value} from './abstract.entity';

export interface ProductTypeEntity extends Nsi {
  description: Value[];
  type: TypeServiceEnum;
}
