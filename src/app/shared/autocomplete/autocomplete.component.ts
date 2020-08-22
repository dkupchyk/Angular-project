import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import * as citiesJsonData from '../constants/cities.constant.json';

export interface City {
  country: string;
  geonameid: number;
  name: string;
  subcountry: string;
}

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less']
})
export class AutocompleteComponent implements OnInit, OnDestroy {
  autocompleteForm: FormGroup;
  citiesNames: string[] = [];
  showDropdown = false;
  citySub: Subscription;
  ageOptions = ['Under 18', '18-25', '25-40', 'Over 40'];
  cities: City[] = (citiesJsonData as any).default;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    console.log(this.cities);
    this.initForm();
    this.initCitiesArray();
  }

  ngOnDestroy(): void {
    this.citySub.unsubscribe();
  }

  initForm(): void {
    this.autocompleteForm = this.formBuilder.group({
      city: ['', Validators.required],
      pickUpDate: ['', Validators.required],
      pickUpTime: ['', Validators.required],
      dropOffDate: ['', Validators.required],
      dropOffTime: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  initCitiesArray(): void {
    this.citiesNames = this.cities.map((city) => {
      return city.name;
    });
  }

  toogleDropdown(): void {
    this.citySub = this.autocompleteForm.get('city').valueChanges.subscribe(value => {
      value.length > 2
        ? this.showDropdown = true
        : this.showDropdown = false;
    });
  }

  getCityValue(): string {
    return this.autocompleteForm.value.city;
  }

  changeCity(city: string): void {
    this.changeValue('city', city);
    this.showDropdown = false;
  }

  changeAgeOption(e): void {
    this.changeValue('age', e.target.value);
  }

  changeValue(propertyName: string, value: any): void {
    this.autocompleteForm.get(propertyName).setValue(value, {
      onlySelf: true
    });
  }

  resetForm(): void {
    this.autocompleteForm.reset();
  }
}
