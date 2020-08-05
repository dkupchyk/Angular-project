import {Component, OnInit} from '@angular/core';
import {SubjectsTestingService} from './subjects-testing.service';

@Component({
  selector: 'app-subjects-testing',
  templateUrl: './subjects-testing.component.html',
  styleUrls: ['./subjects-testing.component.less']
})
export class SubjectsTestingComponent implements OnInit {

  constructor(private stService: SubjectsTestingService) {
  }

  ngOnInit(): void {
    this.stService.testSubject(this.stService.subject, true, '');
    this.stService.testSubject(this.stService.subject, false, '');

    this.stService.testSubject(this.stService.behaviourSubject, true, '');
    this.stService.testSubject(this.stService.behaviourSubject, false, '');

    this.stService.testSubject(this.stService.replaySubject, true, '');
    this.stService.testSubject(this.stService.replaySubject, false, '');

    this.stService.testSubject(this.stService.replaySubjectWithBuffer, true, ' with buffer size = 2');
    this.stService.testSubject(this.stService.replaySubjectWithBuffer, false, ' with buffer size = 2');

    this.stService.testSubject(this.stService.asyncSubject, true, '');
    this.stService.testSubject(this.stService.asyncSubject, false, '');
  }

}
