import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';
import {POSITIVE_NUMBERS} from '../constants/patterns.constant';
import {Section} from '../../section/section.interface';
import {SectionService} from '../../section/section.service';
import {Router} from '@angular/router';
import {ModalService} from '../modal/modal.service';

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
              private router: Router,
              private sectionService: SectionService,
              private modalService: ModalService) {
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

  onSubmit(): void {
    const resultArray: { title: string, value: any }[] = [
      {title: 'Name', value: this.contactForm.get('name').value},
      {title: 'Email', value: this.contactForm.get('email').value},
      {title: 'Topic', value: this.contactForm.get('topic').value},
      {title: 'Message', value: this.contactForm.get('message').value}
    ];
    if (this.contactForm.get('age')) {
      resultArray.push({
        title: 'Age',
        value: this.contactForm.get('age').value
      });
    }
    this.modalService.modalData = resultArray;
    this.router.navigate(['result']);
  }

  get positiveNumbersPattern(): string {
    return POSITIVE_NUMBERS;
  }

}
