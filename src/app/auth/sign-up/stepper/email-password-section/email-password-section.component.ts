import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../auth.service";
import {Store} from "@ngrx/store";
import {SignUpComponent} from "../../sign-up.component";
import * as fromApp from "../../../../store/app.reducer";
import * as SignUpActions from "../../store/sign-up.actions";

@Component({
  selector: 'app-email-password-section',
  templateUrl: './email-password-section.component.html',
  styleUrls: ['./email-password-section.component.less']
})
export class EmailPasswordSectionComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private store: Store<fromApp.AppState>,
              private signUpComponent: SignUpComponent) {
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup): void {
    this.signUpComponent.sendData('email', form.value.email);
    this.signUpComponent.sendData('password', form.value.password);
    this.store.dispatch(new SignUpActions.Success());
  }

}
