import {TypeServiceEnum} from './type-service';
import {ProductUI} from '../../ui/models';

export interface EntityTypeServiceEnumToProduct {
  type: TypeServiceEnum;
  values: ProductUI[];
}
