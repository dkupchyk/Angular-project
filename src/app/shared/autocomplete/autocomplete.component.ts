import {Component, OnDestroy, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AutocompleteSettings} from '../interfaces/autocomplete-settings.interface';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less']
})
export class AutocompleteComponent implements OnInit, OnDestroy {
  @Input() settings: AutocompleteSettings;
  @Input() sourceArray: {title: string, value: any}[];
  @Output() resultValue = new EventEmitter<string>();

  autocompleteForm: FormGroup;
  showDropdown = false;
  subscription: Subscription;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  initForm(): void {
    this.autocompleteForm = this.formBuilder.group({
      autocompleteInput: ['', Validators.required]
    });
  }

  toogleDropdown(): void {
    this.subscription = this.autocompleteForm.get('autocompleteInput').valueChanges
      .subscribe(value => this.showDropdown = value.length > this.settings.symbolsToShow - 1);
  }

  getValue(): string {
    return this.autocompleteForm.value.autocompleteInput;
  }

  changeInput(value: any): void {
    this.autocompleteForm.get('autocompleteInput').setValue(value, {
      onlySelf: true
    });
    this.showDropdown = false;
    this.resultValue.emit(value);
  }
}
