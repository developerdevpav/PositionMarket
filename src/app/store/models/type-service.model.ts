import {Nsi, Value} from './abstract.model';
import {TypeServiceEnum} from './type-service';

export interface TypeService extends Nsi {
  id: string;
  values: Value[];
  description: Value[];
  type: TypeServiceEnum;
}
