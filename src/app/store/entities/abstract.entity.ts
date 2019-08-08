export interface BaseEntity {
  id: string;
}

export interface Value {
  language: string;
  value?: string;
}

export interface Nsi extends BaseEntity {
  values: Value[];
}

export enum TypeServiceEnum {
  RENT = 'RENT', DELIVERY = 'DELIVERY', PERSONAL = 'PERSONAL'
}
