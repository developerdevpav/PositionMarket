export interface Nsi {
  id: string;
  values: Value[];
}

export interface Value {
  language: string;
  value: string;
}
