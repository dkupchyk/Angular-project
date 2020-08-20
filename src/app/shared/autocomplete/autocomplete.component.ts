import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {take} from 'rxjs/operators';

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
export class AutocompleteComponent implements OnInit {
  autocompleteForm: FormGroup;
  citiesNames: string[] = [];
  showDropdown = false;

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
    this.citiesNames = [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado'
    ];
  }

  toogleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  getCityValue(): string {
    return this.autocompleteForm.value.city;
  }
}
