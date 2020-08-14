import * as SighUpActions from './sign-up.actions';
import {User} from '../../user.model';
import clone from 'lodash/fp/clone';
import setWith from 'lodash/fp/setWith';

export interface State {
  user: User;
  section: number;
  isComplete: boolean;
}

const initialState: State = {
  user: new User(),
  section: 1,
  isComplete: false
};

export function signUpReducer(
  state = initialState,
  action: SighUpActions.SignUpActionsTypes
) {
  switch (action.type) {
    case SighUpActions.SET_DATA:

      const setIn = (path, newValue, obj) => setWith(clone, path, newValue, clone(obj));
      const newUserObject = setIn(action.payload.propertyName, action.payload.value, state.user);

      return {
        ...state,
        user: newUserObject,
        section: state.section,
        isComplete: false
      };

    case SighUpActions.INCREASE_SECTION:
      return {
        ...state,
        user: state.user,
        section: state.section + 1,
        isComplete: false
      };

    case SighUpActions.SUCCESS:
      return {
        ...state,
        user: state.user,
        section: state.section + 1,
        isComplete: true
      };

    case SighUpActions.FAILED:
      return {
        ...state,
        user: null,
        section: 1,
        isComplete: false
      };

    default:
      return state;
  }
}
