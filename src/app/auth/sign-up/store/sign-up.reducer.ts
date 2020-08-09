// import * as SighUpActions from './sign-up.actions';
// import {User} from "../../user.model";
//
// export interface State {
//   user: User;
//   section: number;
// }
//
// const initialState: State = {
//   user: null,
//   section: 1
// };
//
// export function signUpReducer(
//   state = initialState,
//   action: SighUpActions.SignUpActionsTypes
// ) {
//   switch (action.type) {
//     case SighUpActions.NEXT:
//       const user = new User(
//         action.payload.user.email,
//         action.payload.user.id,
//         action.payload.user.token,
//         action.payload.user.
//       );
//       return {
//         ...state,
//         user,
//         section = 1
//       };
//     case SighUpActions.FINISH:
//       return {
//         ...state,
//         user: null
//       };
//     default:
//       return state;
//   }
// }
