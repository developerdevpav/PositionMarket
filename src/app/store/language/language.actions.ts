import {Action} from '@ngrx/store';

export enum LanguageActionTypes {
  SET_LANGUAGE = '[Language] Load Languages'
}

export class SetLanguageAction implements Action {
  readonly type = LanguageActionTypes.SET_LANGUAGE;

  constructor(public language: string) {}
}


export type LanguageActions = SetLanguageAction;
