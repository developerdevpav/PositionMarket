import {DevpavProductTypeServiceInputProps} from '../components/users/catalog/devpav-product-type-service/devpav-product-type-service.component';
import {TypeServiceEnum} from '../store/models/type-service';

export interface BaseEntity {
  uuid: string;
}



export class ProductUI {

  constructor(public id: string,
              public price: number,
              public attractionId: string,
              public service: TypeServiceUI,
              public order: number) {}

}

export interface PositionByLanguageForCatalog {
  id: string;
  title: string;
  description: string;
  tags: NsiUI[];
  types: NsiUI[];
  images: ImageUI[];
  image: ImageUI;
  products: ProductUI[];
  options: OptionsWrapper[];
}

export interface OptionsWrapper {
  type: DevpavProductTypeServiceInputProps;
  services: DevpavProductTypeServiceInputProps[];
}

export class NsiUI {
  constructor(public id: string, public title: string) {}
}

export class ImageUI {
  constructor(public id: string | number, public index: number, public url: string) {}
}

export class TypeServiceUI {
  constructor(public id: string,
              public title: string,
              public description: string,
              public type: TypeServiceEnum) {}
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
