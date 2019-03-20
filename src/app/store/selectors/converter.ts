import {Nsi, Value} from '../models/abstract.model';
import {Language} from '../models/language.model';
import {Product} from '../models/products';

export function convertArrayNsiByLanguage<T extends Nsi>(array: T[], language: Language) {
  return array.map(value => convertNsiByLanguage(value, language));
}

export function convertNsiByLanguage<T extends Nsi>(object: T, language: Language) {
  if ( !object ) {
    return null;
  }
  return {
    id: object.id,
    title: getStringFromArrayValuesByLanguage(object.values, language)
  };
}

export function getStringFromArrayValuesByLanguage(array: Value[], language: any): string {
  let valueString;

  if (array) {
    const objectFond = array.find(value => {
      console.log(`${value.language} === ${language.toString()}`);
      return value.language === language.language as string;
    });
    if ( objectFond ) {
      valueString = objectFond.value;
    }
  }

  if (!valueString) {
    valueString = Language.EN === language ? 'Undefined' : 'Неопределено';
  }

  return valueString;
}

export function convertProducts<T extends Product>(array: Product[], language: Language) {
  return array.map(value => convertProduct(value, language));
}

export function convertProduct<T extends Product>(object: Product, language: Language) {
  return {
    id: object.id,
    price: object.price,
    service: object.service
  };
}
