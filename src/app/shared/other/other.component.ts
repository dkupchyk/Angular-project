import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.less']
})
export class OtherComponent implements OnInit {
  buttonClicked = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onButtonClicked() {
    this.buttonClicked = !this.buttonClicked;
  }
}
