import {Nsi, Value} from './abstract.model';

export interface Tag extends Nsi {
  id: string;
  values: Value[];
}
