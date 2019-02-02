import {Nsi, Value} from './abstract.model';

export interface Type extends Nsi {
  id: string;
  values: Value[];
}
