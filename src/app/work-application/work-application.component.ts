import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AutocompleteSettings} from '../shared/interfaces/autocomplete-settings.interface';
import {ValidateDate} from '../shared/constants/validators.constant';
import {PHONE_NUMBERS} from '../shared/constants/patterns.constant';
import {EDUCATION_CENTERS, MARITAL_STATUS_OPTIONS, POSITION_OPTIONS, YEARS} from '../shared/constants/work-application-form.constants';
import {Router} from '@angular/router';
import {SectionService} from '../section/section.service';
import {ModalService} from '../shared/modal/modal.service';

@Component({
  selector: 'app-work-application',
  templateUrl: './work-application.component.html',
  styleUrls: ['./work-application.component.less']
})
export class WorkApplicationComponent implements OnInit {
  applicationForm: FormGroup;
  personalInfoGroup: FormGroup;
  educationGroup: FormGroup;
  workingExperienceGroup: FormGroup;

  maritalStatusOptions = MARITAL_STATUS_OPTIONS;
  positionOptions = POSITION_OPTIONS;
  settings: AutocompleteSettings = {
    placeholder: 'Name',
    symbolsToShow: 1,
    customClass: ''
  };

  educationCenters: string[] = EDUCATION_CENTERS;
  educationCenter: string;
  years: string[] = YEARS;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private modalService: ModalService) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.applicationForm = this.formBuilder.group({
      personalInfo: this.initPersonalInfoGroup(),
      education: this.initEducationGroup(),
      workingExperience: this.initWorkingExperienceGroup()
    });
  }

  initPersonalInfoGroup(): FormGroup {
    this.personalInfoGroup = this.formBuilder.group({
      fullName: ['', Validators.required],
      dateOfBirth: ['', [Validators.required, ValidateDate(Date.now())]],
      phoneNumber: ['', [Validators.required, Validators.pattern(PHONE_NUMBERS)]],
      address: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required]
    });
    return this.personalInfoGroup;
  }

  initEducationGroup(): FormGroup {
    this.educationGroup = this.formBuilder.group({
      entryYear: ['', Validators.required],
      finishYear: ['', Validators.required],
      degree: ['', Validators.required]
    });
    return this.educationGroup;
  }

  initWorkingExperienceGroup(): FormGroup {
    this.workingExperienceGroup = this.formBuilder.group({
      lastWorkingPlace: ['', Validators.required],
      lastPosition: ['', Validators.required],
      startWorkingYear: ['', Validators.required],
      endWorkingYear: ['', Validators.required],
      reasonForLeaving: ['', Validators.required]
    });
    return this.workingExperienceGroup;
  }

  getValue(value): void {
    this.educationCenter = value;
  }

  onSubmit(): void {
    const resultArray: { title: string, value: any }[] = [];
    this.getPersonalData().forEach(control => {
      resultArray.push(control);
    });

    this.modalService.modalData = resultArray;
    this.router.navigate(['result']);
  }

  getPersonalData(): { title: string, value: any }[] {
    return [
      {
        title: 'Full name',
        value: this.applicationForm.get('personalInfo').get('fullName').value
      },
      {
        title: 'Date of birth',
        value: this.applicationForm.get('personalInfo').get('dateOfBirth').value
      },
      {
        title: 'Phone number',
        value: this.applicationForm.get('personalInfo').get('phoneNumber').value
      },
      {
        title: 'Address',
        value: this.applicationForm.get('personalInfo').get('address').value
      },
      {
        title: 'Marital status',
        value: this.applicationForm.get('personalInfo').get('maritalStatus').value
      },
      {
        title: 'Email',
        value: this.applicationForm.get('personalInfo').get('email').value
      },
      {
        title: 'Position',
        value: this.applicationForm.get('personalInfo').get('position').value
      }
    ];
  }

  getAllData(): { title: string, value: any }[] {
    return [
      {title: 'Personal information', value: this.applicationForm.get('personalInfo').value},
      {title: 'Education', value: this.applicationForm.get('education').value},
      {title: 'Working experience', value: this.applicationForm.get('workingExperience').value}
    ];
  }
}
