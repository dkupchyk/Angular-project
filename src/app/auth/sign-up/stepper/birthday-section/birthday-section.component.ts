import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../auth.service';
import {Store} from '@ngrx/store';
import {SignUpComponent} from '../../sign-up.component';
import * as fromApp from '../../../../store/app.reducer';
import * as SignUpActions from '../../store/sign-up.actions';
import {ValidateDate} from '../../../../shared/constants/validators.constant';

@Component({
  selector: 'app-birthday-section',
  templateUrl: './birthday-section.component.html',
  styleUrls: ['./birthday-section.component.less']
})
export class BirthdaySectionComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private store: Store<fromApp.AppState>,
              private signUpComponent: SignUpComponent) {
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      dateOfBirth: ['', [Validators.required, ValidateDate(Date.now())]]
    });
  }

  onSubmit(form: FormGroup): void {
    this.signUpComponent.sendData('dateOfBirth', form.value.dateOfBirth);
    this.store.dispatch(new SignUpActions.IncreaseSection());
  }
}
