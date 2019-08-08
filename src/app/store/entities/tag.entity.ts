import {Value} from '../models/abstract.model';
import {Nsi} from './abstract.entity';

export interface TagEntity extends Nsi {
  id: string;
  values: Value[];
}
