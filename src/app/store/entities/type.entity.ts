import {Nsi, Value} from './abstract.entity';

export interface TypeEntity extends Nsi {
  id: string;
  values: Value[];
}
