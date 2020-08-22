import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {take} from 'rxjs/operators';
import {Subscription} from 'rxjs';

export class City {
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

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.initForm();
    this.initCitiesArray();
    // this.http.get('../constants/cities.constant.json')
    //   .pipe(take(1))
    //   .subscribe((data: City[]) => this.citiesNames = data.map(city => city.name));
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
    this.citiesNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
      'Connecticut', 'Delaware', 'District of Columbia', 'Florida'
      , 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky'
      , 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
      'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
      'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
      'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington',
      'West Virginia', 'Wisconsin', 'Wyoming'];
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
