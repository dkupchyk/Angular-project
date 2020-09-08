import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {City} from '../shared/interfaces/city.interface';
import {ModalService} from '../shared/modal/modal.service';
import {AutocompleteSettings} from '../shared/interfaces/autocomplete-settings.interface';
import {CITIES} from '../shared/constants/cities.constant';
import {AGE_OPTIONS} from '../shared/constants/autocomplete-form.constants';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.less']
})
export class SearchFormComponent implements OnInit {
  settings: AutocompleteSettings = {
    placeholder: 'City',
    symbolsToShow: 3,
    customClass: ''
  };
  autocompleteForm: FormGroup;
  cities: City[] = CITIES;
  citiesNames: string[] = [];
  citiesResult: string;
  ageOptions = AGE_OPTIONS;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private modalService: ModalService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.initCitiesArray();
  }

  initForm(): void {
    this.autocompleteForm = this.formBuilder.group({
      pickUpDate: ['', Validators.required],
      pickUpTime: ['', Validators.required],
      dropOffDate: ['', Validators.required],
      dropOffTime: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  initCitiesArray(): void {
    this.citiesNames = this.cities.map(city => city.name);
  }

  changeAgeOption(e): void {
    this.changeValue('age', e.target.value);
  }

  changeValue(propertyName: string, value: any): void {
    this.autocompleteForm.get(propertyName).setValue(value, {
      onlySelf: true
    });
  }

  onSubmit(): void {
    const resultArray: { title: string, value: any }[] = [
      {title: this.settings.placeholder, value: this.citiesResult},
      {title: 'Pick up date', value: this.autocompleteForm.get('pickUpDate').value},
      {title: 'Pick up time', value: this.autocompleteForm.get('pickUpTime').value},
      {title: 'Drop off date', value: this.autocompleteForm.get('dropOffDate').value},
      {title: 'Drop off time', value: this.autocompleteForm.get('dropOffTime').value},
      {title: 'Age', value: this.autocompleteForm.get('age').value}
    ];
    this.modalService.modalData = resultArray;
    this.router.navigate(['result']);
  }

  getValue(value): void {
    this.citiesResult = value;
  }
}
