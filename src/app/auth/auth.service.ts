import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  userChanged = new BehaviorSubject(null);
}
