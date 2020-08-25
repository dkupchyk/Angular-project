import {Component, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import * as citiesJsonData from '../constants/cities.constant.json';
import {Router} from '@angular/router';
import {ModalService} from '../modal/modal.service';

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
  @Output() eventEmitter = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private modalService: ModalService) {
  }

  ngOnInit(): void {
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

  onSubmit(): void {
    const resultArray: {title: string, value: any}[] = [
      {title: 'City', value: this.autocompleteForm.get('city').value},
      {title: 'Pick up date', value: this.autocompleteForm.get('pickUpDate').value},
      {title: 'Pick up time', value: this.autocompleteForm.get('pickUpTime').value},
      {title: 'Drop off date', value: this.autocompleteForm.get('dropOffDate').value},
      {title: 'Drop off time', value: this.autocompleteForm.get('dropOffTime').value},
      {title: 'Age', value: this.autocompleteForm.get('age').value}
    ];
    this.modalService.modalData = resultArray;
    this.router.navigate(['result']);
  }
}
