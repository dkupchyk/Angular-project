import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidateDate} from '../shared/constants/validators.constant';

@Component({
  selector: 'app-work-application',
  templateUrl: './work-application.component.html',
  styleUrls: ['./work-application.component.less']
})
export class WorkApplicationComponent implements OnInit {

  applicationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.applicationForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      dateOfBirth: ['', [Validators.required, ValidateDate(Date.now())]],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      maritalStatus:  ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required],

    });
  }

  onSubmit(): void {

  }
}
