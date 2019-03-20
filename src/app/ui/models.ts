export interface BaseEntity {
  uuid: string;
}

export class NsiUI implements BaseEntity {

  constructor(public value: string, public uuid: string) {}

}

export class ProductUI {

  constructor(public price: number, public service: string) {}

}

export class AttractionUI implements BaseEntity {

  constructor(public title: string,
              public image: string,
              public link: string,
              public tags: string[],
              public types: string[],
              public products: ProductUI[],
              public uuid: string) {
  }

}
