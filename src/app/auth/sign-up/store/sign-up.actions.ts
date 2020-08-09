import {Action} from '@ngrx/store';
import {User} from "../../user.model";

export const NEXT = 'NEXT';
export const FINISH = 'FINISH';

export type SignUpActionsTypes = Next | Finish;

export class Next implements Action {
  readonly type = NEXT;

  constructor(public payload: { user: User }) {}
}

export class Finish implements Action {
  readonly type = FINISH;

  constructor(public payload: { user: User }) {}
}

