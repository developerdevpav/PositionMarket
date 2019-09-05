import {Nsi, Value} from '../../entities/abstract.entity';
import {Language} from '../../language/language.model';
import {isEquals, isNonPresent, isPresent} from 'src/app/util/util.common';
import {NsiLanguage} from '../../entities/present.entities';

export const convertValues = (values: Value[], language: Language): string => {
    if ( isNonPresent(values) ) return null;

    const foundValue = values.find(value => isPresent(value) && isEquals(value.language, language));

    if ( isNonPresent(foundValue) )
        return null;

    return foundValue.value;
}

export const convertNsi = <T extends Nsi>(entity: T, language: Language): NsiLanguage => {
    if ( isNonPresent(entity) ) return null;

    return {
        id: entity.id,
        value: convertValues(entity.values, language)
    } as NsiLanguage;
}

export const convertArrayNsi = <T extends Nsi>(entites: T[], language: Language): NsiLanguage[] => {
    if ( isNonPresent(entites) ) return entites;

    return entites.map(entity => ({ id: entity.id, value: convertValues(entity.values, language)} as NsiLanguage));
}
