import {Component, OnInit} from '@angular/core';
import {HIDE_TEXT_CONSTANT, SHOW_TEXT_CONSTANT} from './constants/content.constant';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.less']
})
export class OtherComponent implements OnInit {
  buttonClicked = false;
  buttonText = HIDE_TEXT_CONSTANT;

  constructor() {
  }

  ngOnInit(): void {
  }

  onButtonClicked(): void {
    this.buttonClicked = !this.buttonClicked;
    this.buttonClicked
      ? this.buttonText = HIDE_TEXT_CONSTANT
      : this.buttonText = SHOW_TEXT_CONSTANT;
  }
}
