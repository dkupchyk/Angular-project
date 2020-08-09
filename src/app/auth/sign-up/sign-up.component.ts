import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
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

  onHandleError(): void {
    this.error = null;
  }

  onSubmit(form: FormGroup): void {
    this.section++;
    form.reset();
  }

  changeToSignUpView(): void {
    this.router.navigate(['sign-up']);
  }

  nextSection() {
    this.section++;
  }

}
