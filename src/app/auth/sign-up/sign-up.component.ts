import {Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {User} from '../user.model';
import {AuthService} from '../auth.service';
import * as SignUpActions from './store/sign-up.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit {
  sectionsIcons: string[] = [
    '../../assets/icons/1.svg',
    '../../assets/icons/2.svg',
    '../../assets/icons/3.svg'
  ];
  section = 1;
  userObs: Observable<{ user: User, section: number, isComplete: boolean }>;
  userData: User;
  @Output() userDataEmitter = new EventEmitter<User>();

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.userObs = this.store.select('signUp');
    this.userObs
      .subscribe(stateData => {
        this.section = stateData.section;
        if (stateData.isComplete) {
          this.userData = stateData.user;
          this.changePath('');
          this.authService.userChanged.next(this.userData);
        }
      });
  }

  changePath(path: string): void {
    this.router.navigate([path]);
  }

  public sendData(property: string, value: any): void {
    this.store.dispatch(new SignUpActions.SetData(
      {
        propertyName: property,
        value: value
      }
    ));
  }

}
