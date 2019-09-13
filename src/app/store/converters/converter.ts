import {Nsi, Value} from '../entities/abstract.entity';
import {Language} from '../language/language.model';
import {INsiLanguage} from '../entities/present.entities';
import Optional from '../../shared/utils/common/optional';
import {isEquals, isNonPresent, isPresent} from '../../shared/utils/common/common';

export const convertValues = (values: Value[], language: Language): Optional<string> => {
  const optionalValues = Optional.ofNullable(values);

  if (optionalValues.isNonPresent()) {
    return Optional.empty();
  }

  const findPredicate = value => isPresent(value) && isEquals(value.language, language);

  const foundValue = optionalValues.get().find(findPredicate);

  const optionalFoundValue = Optional.ofNullable(foundValue);
  if (optionalFoundValue.isNonPresent()) {
    return Optional.empty();
  }

  return optionalFoundValue.map(value => value.value);
};

export const convertNsi = <T extends Nsi>(entity: T, language: Language): Optional<INsiLanguage> => {
  const optionalEntity = Optional.ofNullable(entity);

  if (optionalEntity.isNonPresent()) {
    return Optional.empty();
  }

  const id = optionalEntity.get().id;
  const value = convertValues(optionalEntity.get().values, language).orElse('');

  return Optional.of({ id, value });
};

export const convertArrayNsi = <T extends Nsi>(entities: T[], language: Language): INsiLanguage[] => {
  if (isNonPresent(entities)) {
    return [];
  }

  const filterObjectIsPresent = object => isPresent(object);

  const mapFunction = entity => {
    const id = entity.id;
    const value = convertValues(entity.values, language).orElse('');
    return {id, value};
  };

  return entities.filter(filterObjectIsPresent).map(mapFunction);
};
