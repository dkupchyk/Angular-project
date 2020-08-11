import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {take} from "rxjs/operators";
import * as fromApp from '../../store/app.reducer';
import * as SignUpActions from './store/sign-up.actions';
import {User} from "../user.model";
import {AuthService} from "../auth.service";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {
  signUpForm1: FormGroup;
  signUpForm2: FormGroup;
  signUpForm3: FormGroup;

  error: string = null;
  sectionsIcons: string[] = [
    '../../assets/icons/1.svg',
    '../../assets/icons/2.svg',
    '../../assets/icons/3.svg'
  ];
  section = 1;
  sectionAmount = 3;

  userObs: Observable<{ user: User, section: number }>;
  userData: User;
  @Output() userDataEmitter = new EventEmitter<User>()

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.initForm();
    this.userObs = this.store.select('signUp');
    this.userObs
      .subscribe(stateData => {
        this.section = stateData.section;
        console.log(this.section);
      });
  }

  initForm(): void {
    this.signUpForm1 = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    this.signUpForm2 = this.formBuilder.group({
      dateOfBirth: ['', Validators.required]
    });

    this.signUpForm3 = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup): void {

    if (form === this.signUpForm1) {
      this.sendData('firstName', form.value.firstName);
      this.sendData('lastName', form.value.lastName);
      this.store.dispatch(new SignUpActions.IncreaseSection());

    } else if (form === this.signUpForm2) {
      this.sendData('dateOfBirth', form.value.dateOfBirth);
      this.store.dispatch(new SignUpActions.IncreaseSection());

    } else {
      this.sendData('email', form.value.email);
      this.sendData('password', form.value.password);
      this.store.dispatch(new SignUpActions.IncreaseSection());
    }

    if (this.section === this.sectionAmount + 1) {
      this.userObs
        .pipe(take(1))
        .subscribe(userData => {
          this.userData = userData.user;
          this.changePath('');
          this.authService.userChanged.next(this.userData);
        });
    }

    form.reset();
  }

  sendData(property: string, value: any): void {
    this.store.dispatch(new SignUpActions.SetData(
      {
        propertyName: property,
        value: value
      }
    ));
  }

  changePath(path: string): void {
    this.router.navigate([path]);
  }


}
