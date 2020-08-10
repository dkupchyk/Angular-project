import {Action} from '@ngrx/store';

export const SET_DATA = 'SET_DATA';
export const INCREASE_SECTION = 'INCREASE_SECTION';

export type SignUpActionsTypes = SetData | IncreaseSection;

export class SetData implements Action {
  readonly type = SET_DATA;

  constructor(public payload: { propertyName: string, value: any }) {
  }
}

export class IncreaseSection implements Action {
  readonly type = INCREASE_SECTION;

  constructor() {
  }
}
