import {Component, OnInit} from '@angular/core';
import {HIDE_TEXT_CONSTANT, SHOW_TEXT_CONSTANT} from './constants/content.constant';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.less']
})
export class OtherComponent implements OnInit {
  buttonClicked = false;
  hideText = HIDE_TEXT_CONSTANT;
  showText = SHOW_TEXT_CONSTANT;

  constructor() {
  }

  ngOnInit(): void {
  }

  onButtonClicked() {
    this.buttonClicked = !this.buttonClicked;
  }
}
