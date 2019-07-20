export interface BaseEntity {
  uuid: string;
}

export class NsiUI implements BaseEntity {

  constructor(public value: string, public uuid: string) {}

}

export class ProductUI {

  constructor(public id: string,
              public price: number,
              public attractionId: string,
              public service: TypeServiceUI) {}

}

export class TypeServiceUI {
  constructor(public id: string, public title: string, public description: string) {}
}

export interface ExpansionSwitcher {
  value: boolean;
  id: any;
}


export interface OptionDevpavCard {
  avatar: string;
  title: string;
  id: number | string;
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
