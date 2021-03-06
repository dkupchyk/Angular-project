import {Component, OnInit} from '@angular/core';
import {User} from './user.model';
import {from, Subscription} from 'rxjs';
import {filter, scan, take} from 'rxjs/operators';
import {CITIES_ARRAY, FIRST_NAME_ARRAY, LAST_NAME_ARRAY} from './constants/content.constant';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  usersArray: User[] = [];
  primaryUserArray: User[] = [];
  filteredUserArray: User[] = [];
  isFiltered = false;
  randomIndex = Math.floor(Math.random() * 5);

  constructor() {
  }

  ngOnInit(): void {
    this.usersArray = this.generateArray();
  }

  get firstNameArray(): string[] {
    return FIRST_NAME_ARRAY;
  }

  get lastNameArray(): string[] {
    return LAST_NAME_ARRAY;
  }

  get citiesArray(): string[] {
    return CITIES_ARRAY;
  }

  generateArray(): User[] {
    for (let i = 0; i < 20; i++) {
      this.primaryUserArray.push(
        new User(
          this.firstNameArray[this.randomIndex],
          this.lastNameArray[this.randomIndex],
          this.citiesArray[this.randomIndex],
          Math.floor(Math.random() * 50) + 1
        ));
    }

    return this.primaryUserArray;
  }

  filterArray(): User[] {
    const observable = from(this.primaryUserArray);
    observable.pipe(
      take(this.primaryUserArray.length),
      filter((user: User) => user.age >= 18))
      .subscribe(    // <4>
        user => this.filteredUserArray.push(user),
        err => console.error(err),
        () => console.log('Completed')
      );

    return this.filteredUserArray;
  }

  onButtonClicked(): void {
    this.isFiltered = !this.isFiltered;
    this.usersArray = this.isFiltered ? this.filterArray() : this.primaryUserArray;
  }

}
