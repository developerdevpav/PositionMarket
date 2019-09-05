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
