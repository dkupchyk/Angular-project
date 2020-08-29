import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-invalid-form-input',
  templateUrl: './invalid-form-input.component.html',
  styleUrls: ['./invalid-form-input.component.less'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class InvalidFormInputComponent {
  @Input() formName: FormGroup;
  @Input() inputProperty: string;
  @Input() message: string;
}
