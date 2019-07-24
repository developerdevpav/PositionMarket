import {TableSetting} from './table-service-position.component';

export const catalogItemTableSetting: TableSetting = {
  hiddenActionBtn: true,
  titleActionBtn: 'ADD_TO_CART'
};

export class CartItemTableSetting implements TableSetting {
  public readonly hiddenActionBtn: true;
  public readonly titleActionBtn: 'ORDER_ONE';
}
