import * as tag from '../reducers/tag.reducer';
import * as type from '../reducers/type.reducer';
import * as typeservices from '../reducers/type-service.reducer';
import * as attraction from '../reducers/attraction.reducer';
import {LanguageState} from '../reducers/language.reducer';
import {createSelector} from '@ngrx/store';
import {Tag} from '../models/tag.model';
import {Nsi, Value} from '../models/abstract.model';
import {Language} from '../models/language.model';
import {TypeService} from '../models/type-service.model';
import {AttractionModel} from '../models/attraction-model';
import {Product} from '../models/products';
import {AttractionUI} from '../../ui/models';

export interface AppState {
  language: LanguageState;
}

export const selectLanguage = (state: AppState) => state.language;

export const selectTagsByLanguage = createSelector(
  selectLanguage,
  tag.selectAll,
  (lang: LanguageState, array: Tag[]) => {
    return array.map(value => {
      return convertNsiByLanguage(value, lang.language);
    });
  }
);

export const selectAttractionById = createSelector(
  attraction.selectEntities,
  (array, props) => {
    console.log(`${props.id} props`);
    return array[props.id];
  }
);

export const selectAttractionsByLanguage = createSelector(
  selectLanguage,
  attraction.selectAll,
  (lang: LanguageState, array: AttractionModel[]) => {
    return array.map(value => {
      return new AttractionUI(
        getStringFromArrayValuesByLanguage(value.title, lang.language),
        value.image,
        value.link,
        convertArrayNsiByLanguage(value.tags, lang.language),
        convertArrayNsiByLanguage(value.types, lang.language),
        convertProducts(value.products, lang.language),
        value.id
      );
    });
  }
);

export const selectAttractionsByLanguageArrayList = createSelector(
  selectLanguage,
  attraction.selectAll,
  (lang: LanguageState, array: AttractionModel[]) => {
    return array.map(value => {
      return { uuid: value.id, value:  getStringFromArrayValuesByLanguage(value.title, lang.language)};
    });
  }
);

export const selectTagById = createSelector(
  tag.selectEntities,
  (array, props) => {
    return array[props.id];
  }
);

export const selectTypeById = createSelector(
  type.selectEntities,
  (array, props) => {
    return array[props.id];
  }
);

export const selectTypeServiceById = createSelector(
  typeservices.selectEntities,
  (array, props) => {
    return array[props.id];
  }
);

export const selectTypesByLanguage = createSelector(
  selectLanguage,
  type.selectAll,
  (lang: LanguageState, array: Tag[]) => {
    return array.map(value => {
      return convertNsiByLanguage(value, lang.language);
    });
  }
);

export const selectTypeServicesByLanguage = createSelector(
  selectLanguage,
  typeservices.selectAll,
  (lang: LanguageState, array: TypeService[]) => {
    console.log(lang.language, array);
    return array.map(value => {
      return convertNsiByLanguage(value, lang.language);
    });
  }
);

export function convertArrayNsiByLanguage<T extends Nsi>(array: T[], language: Language) {
  return array.map(value => convertNsiByLanguage(value, language));
}

export function convertNsiByLanguage<T extends Nsi>(object: T, language: Language) {
  return {
    uuid: object.id,
    value: getStringFromArrayValuesByLanguage(object.values, language)
  };
}

export function getStringFromArrayValuesByLanguage(array: Value[], language: Language) {
  let valueString;

  if (array) {
    valueString = array.find(value => value.language === language).value;
  }

  if (!valueString) {
    valueString = Language.EN === language ? 'undefined' : 'Неопределено';
  }

  return valueString;
}

export function convertProducts<T extends Product>(array: Product[], language: Language) {
  return array.map(value => convertProduct(value, language));
}

export function convertProduct<T extends Product>(object: Product, language: Language) {
  return {
    price: object.price,
    service: convertNsiByLanguage(object.service, language)
  };
}
