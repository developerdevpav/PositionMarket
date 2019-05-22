import {createSelector} from '@ngrx/store';
import * as typeservices from '../reducers/type-service.reducer';
import * as converter from './converter';
import {TypeService} from '../models/type-service.model';
import {selectCurrentLanguage, selectLanguage} from './language.selectors';
import {Dictionary} from '@ngrx/entity';
import {Language} from '../models/language.model';

export const selectTypeServiceById = createSelector(
  typeservices.selectEntities,
  (array, props) => {
    return array[props.id];
  }
);

export const selectTypeServicesByLanguage = createSelector(
  selectCurrentLanguage,
  typeservices.selectAll,
  (lang: Language, array: TypeService[]) => {
    return array.map(value => {
      return converter.convertTypeServiceByLanguage(value, lang);
    });
  }
);

export const selectTypeServiceByLanguageAndByLanguage = createSelector(
  selectCurrentLanguage,
  typeservices.selectEntities,
  (language, array, props) => {
    return converter.convertTypeServiceByLanguage(array[props.id], language);
  }
);

export const selectTypeServiceByIds = createSelector(
  typeservices.selectEntities,
  (array: Dictionary<TypeService>, props: string[]) => {
    return props.map(uuid => array[uuid]);
  }
);

export const selectTypeServiceByLanguageAndByIds = createSelector(
  selectLanguage,
  typeservices.selectEntities,
  (language, array: Dictionary<TypeService>, props: string[]) => {
    const newArray: TypeService[] = props.map(uuid => array[uuid]);
    return converter.convertArrayTypeServiceByLanguage(newArray, language);
  }
);
