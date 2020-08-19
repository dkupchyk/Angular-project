import {Action} from '@ngrx/store';
import {Payload} from './payload.interface';

export const SET_DATA = 'SET_DATA';
export const INCREASE_SECTION = 'INCREASE_SECTION';
export const SUCCESS = 'SUCCESS';
export const FAILED = 'FAILED';

export type SignUpActionsTypes
  = SetData
  | IncreaseSection
  | Success
  | Failed;

export class SetData implements Action {
  readonly type = SET_DATA;

  constructor(public payload: Payload) {
  }
}

export class IncreaseSection implements Action {
  readonly type = INCREASE_SECTION;
}

export class Success implements Action {
  readonly type = SUCCESS;
}

export class Failed implements Action {
  readonly type = FAILED;
}
