import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';
import {POSITIVE_NUMBERS} from '../constants/patterns.constant';
import {Section} from '../../section/section.interface';
import {SectionService} from '../../section/section.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  contactSection: Section;
  private destroyStream = new Subject();

  constructor(private formBuilder: FormBuilder,
              private sectionService: SectionService) {
  }

  ngOnInit(): void {
    this.sectionService.sectionsChanged
      .pipe(take(1))
      .subscribe(
        (sections: Section[]) => {
          this.contactSection = sections[2];
        }
      );

    this.sectionService.getSections();

    this.initForm();
    this.formChanges();
  }

  ngOnDestroy(): void {
    this.destroyStream.next();
    this.destroyStream.complete();
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
      .pipe(takeUntil(this.destroyStream))
      .subscribe(value => {
        value
          ? this.contactForm.addControl('age', new FormControl('', [Validators.required, Validators.pattern(this.positiveNumbersPattern)]))
          : this.contactForm.removeControl('age');
        this.contactForm.updateValueAndValidity();
      });
  }

  resetForm(): void {
    this.contactForm.reset();
  }

  get positiveNumbersPattern(): string {
    return POSITIVE_NUMBERS;
  }

}
