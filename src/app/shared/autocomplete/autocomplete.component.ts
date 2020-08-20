import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less']
})
export class AutocompleteComponent implements OnInit {
  autocompleteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
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
}
