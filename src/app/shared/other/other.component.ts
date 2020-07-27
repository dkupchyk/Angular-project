import {Component, OnInit} from '@angular/core';
import {HIDE_TEXT_CONSTANT, SHOW_TEXT_CONSTANT} from './constants/content.constant';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.less']
})
export class OtherComponent implements OnInit {
  buttonClicked = false;
  buttonText = this.showText;

  constructor() {
  }

  ngOnInit(): void {
  }

  get hideText(): string {
    return HIDE_TEXT_CONSTANT;
  }

  get showText(): string {
    return SHOW_TEXT_CONSTANT;
  }

  onButtonClicked(): void {
    this.buttonClicked = !this.buttonClicked;
    this.buttonClicked
      ? this.buttonText = this.hideText
      : this.buttonText = this.showText;
  }
}
