import {Nsi, Value} from './abstract.entity';

export interface TagEntity extends Nsi {
  id: string;
  values: Value[];
}
