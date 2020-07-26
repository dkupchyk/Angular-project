import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
    this.formChanges();
  }

  initForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      topic: ['', Validators.required],
      message: ['', Validators.required],
      checkAge: [false]
    });
  }

  formChanges(): void {
    this.contactForm.get('checkAge').valueChanges
      .subscribe(value => {
        value
          ? this.contactForm.addControl('age', new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)]))
          : this.contactForm.removeControl('age');
        this.contactForm.updateValueAndValidity();
      });
  }

  resetForm(): void {
    this.contactForm.reset();
  }

}
