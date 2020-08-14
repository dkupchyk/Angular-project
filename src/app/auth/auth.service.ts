import {BehaviorSubject} from 'rxjs';

export class AuthService {
  userChanged = new BehaviorSubject(null);
}
