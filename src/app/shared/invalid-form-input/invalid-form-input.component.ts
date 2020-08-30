import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-invalid-form-input',
  templateUrl: './invalid-form-input.component.html',
  styleUrls: ['./invalid-form-input.component.less'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class InvalidFormInputComponent implements OnInit {
  @Input() formName: FormGroup[];
  @Input() inputProperty: string;
  @Input() message: string;

  formPath: FormGroup;

  ngOnInit(): void {
    this.formPath = this.formName[0];
    for (let i = 1; i < this.formName.length; i++) {
      this.formPath.get(this.formName[i].toString());
    }
    this.formPath.get(this.inputProperty);
  }
}
