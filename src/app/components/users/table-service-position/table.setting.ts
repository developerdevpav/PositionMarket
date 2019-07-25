import {EnumPlaceTable, EnumTypeActionBtn, TableSetting} from './table-service-position.component';

export const catalogItemTableSetting: TableSetting = {
  hiddenActionBtn: true,
  titleActionBtn: 'ADD_TO_CART',
  typeActionBtn: EnumTypeActionBtn.PRIMARY,
  place: EnumPlaceTable.CATALOG
};

export const cartItemTableSetting: TableSetting = {
  hiddenActionBtn: true,
  titleActionBtn: 'ORDER_ONE',
  typeActionBtn: EnumTypeActionBtn.PRIMARY,
  place: EnumPlaceTable.CART
};
