import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from './user.model';
import {from, Observable, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

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
  private subscription: Subscription;

  constructor() {
  }

  ngOnInit(): void {
    this.usersArray = this.generateArray();
  }

  generateArray(): User[] {
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

    return this.primaryUserArray;
  }

  filterArray(): User[] {
    const observable = from(this.primaryUserArray);
    this.subscription = observable.pipe(filter((user: User) => user.age >= 18))
      .subscribe(    // <4>
        user => this.filteredUserArray.push(user),
        err => console.error(err),
        () => console.log('Completed')
      );

    return this.filteredUserArray;
  }

  onButtonClicked(): void {
    this.isFiltered = !this.isFiltered;
    this.isFiltered
      ? this.usersArray = this.filterArray()
      : this.usersArray = this.primaryUserArray;
  }

}
