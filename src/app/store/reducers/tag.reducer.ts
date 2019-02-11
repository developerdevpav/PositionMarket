import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Tag } from '../models/tag.model';
import { TagActions, TagActionTypes } from '../actions/tag.actions';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Value} from '../models/abstract.model';
import {Language} from '../models/language.model';
import {NsiUI} from '../models/ui.model';

export interface State extends EntityState<Tag> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Tag> = createEntityAdapter<Tag>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function tagReducer(
  state = initialState,
  action: TagActions
): State {
  switch (action.type) {
    case TagActionTypes.AddTag: {
      return adapter.addOne(action.payload.tag, state);
    }

    case TagActionTypes.UpsertTag: {
      return adapter.upsertOne(action.payload.tag, state);
    }

    case TagActionTypes.AddTags: {
      return adapter.addMany(action.payload.tags, state);
    }

    case TagActionTypes.UpsertTags: {
      return adapter.upsertMany(action.payload.tags, state);
    }

    case TagActionTypes.UpdateTag: {
      return adapter.updateOne(action.payload.tag, state);
    }

    case TagActionTypes.UpdateTags: {
      return adapter.updateMany(action.payload.tags, state);
    }

    case TagActionTypes.DeleteTag: {
      return adapter.removeOne(action.payload.id, state);
    }

    case TagActionTypes.DeleteTags: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case TagActionTypes.LoadTags: {
      return adapter.addAll(action.payload.tags, state);
    }

    case TagActionTypes.ClearTags: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const getTagSelectorState = createFeatureSelector<State>('tags');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(getTagSelectorState);


export const selectNsiByLanguage = createSelector(
  selectAll,
  (array: Tag[], props) => {
    console.log(array);
    if ( array === undefined || array.length === 0 ) {
      return [];
    }

    return array.map(value => {
      console.log(props); // undefined
      let valueNsi = value.values.find(val => val.language === props.language);
      console.log(valueNsi);
      if ( !valueNsi ) {
        valueNsi = props.language === Language.RU ?
          {
            language: Language.RU,
            value: 'Неопределено (Ру)'
          } : {
            language: Language.EN,
            value: 'Undefined (En)'
          };
      }
      return  {
        uuid: value.id,
        value: valueNsi.value
      };
    });
  }
);
