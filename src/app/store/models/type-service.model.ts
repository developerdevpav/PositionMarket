import {Nsi, Value} from './abstract.model';

export interface TypeService extends Nsi {
  id: string;
  values: Value[];
}
