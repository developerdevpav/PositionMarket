import {convertArrayNsiByLanguage, getStringFromArrayValuesByLanguage} from '../store/selectors/selectors';
import {Nsi} from '../store/models/abstract.model';

export interface BaseEntity {
  uuid: string;
}

export class NsiUI implements BaseEntity {

  constructor(public value: string, public uuid: string) {}

}

export class ProductUI {

  constructor(public price: number, public service: NsiUI) {}

}

export class AttractionUI implements BaseEntity {

  constructor(public title: string,
              public image: string,
              public link: string,
              public tags: NsiUI[],
              public types: NsiUI[],
              public products: ProductUI[],
              public uuid: string) {
  }

}
