import {Component, OnInit} from '@angular/core';
import {User} from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  primaryUserArray: User[] = [];
  filteredUserArray: User[] = [];

  buttonClicked = false;

  constructor() {
  }

  ngOnInit(): void {
    this.generateArray();
  }

  generateArray(): void {
    const firstNamesArray = ['John', 'Alexa', 'Max', 'Vika', 'Andrew'];
    const lastNamesArray = ['Trevino', 'Hamilton', 'Newman', 'Henderson', 'Erickson'];
    const citiesArray = ['Los-Angeles', 'Kyiv', 'Oslo', 'Sydney', 'Copenhagen'];

    for (let i = 0; i < 20; i++) {
      this.primaryUserArray.push(
        new User(
          firstNamesArray[Math.floor(Math.random() * 5)],
          lastNamesArray[Math.floor(Math.random() * 5)],
          citiesArray[Math.floor(Math.random() * 5)],
          Math.floor(Math.random() * 50) + 1
        ));
    }
  }

  onButtonClicked(): void {
    this.buttonClicked = !this.buttonClicked;
  }

}
