import {Action} from '@ngrx/store';

export enum LanguageActions {
  SET_LANGUAGE = '[Language] Load Tags',
}


export class SetLanguage implements Action {
  readonly type = LanguageActions.SET_LANGUAGE;

  constructor(public payload: string) {}
}

export type LanguageAction = SetLanguage;
