import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthService} from "../../../auth.service";
import {SignUpComponent} from "../../sign-up.component";
import * as fromApp from "../../../../store/app.reducer";
import * as SignUpActions from "../../store/sign-up.actions";

@Component({
  selector: 'app-name-section',
  templateUrl: './name-section.component.html',
  styleUrls: ['./name-section.component.less']
})
export class NameSectionComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private store: Store<fromApp.AppState>,
              private signUpComponent: SignUpComponent) {
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup): void {
    this.signUpComponent.sendData('firstName', form.value.firstName);
    this.signUpComponent.sendData('lastName', form.value.lastName);
    this.store.dispatch(new SignUpActions.IncreaseSection());
  }
}
