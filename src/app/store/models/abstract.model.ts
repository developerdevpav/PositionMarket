export interface BaseEntity {
  id: string;
}
export interface Nsi extends BaseEntity {
  values: Value[];
}

export interface Value {
  language: string;
  value: string;
}
