import { ActionReducerMap } from '@ngrx/store';

// import * as fromAuth from '../auth/store/auth.reducer';
import * as fromSignUp from '../auth/sign-up/store/sign-up.reducer';

export interface AppState {
  // auth: fromAuth.State;
  signUp: fromSignUp.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  // auth: fromAuth.authReducer,
  signUp: fromSignUp.signUpReducer
};
