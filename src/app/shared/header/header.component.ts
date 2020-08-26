import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {
  links = [
    {link: 'home', title: 'Home', visible: true},
    {link: 'autocomplete-testing', title: 'Autocomplete', visible: true},
    {link: 'about', title: 'About', visible: false},
    {link: 'contact', title: 'Contact', visible: false},
    {link: 'users', title: 'Users', visible: false},
    {link: 'log-in', title: 'Authorization', visible: true}
  ];
  userSub = new Subscription();

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userSub = this.authService.userChanged
      .subscribe(user => {
        if (user) {
          this.changeLinkVisibility(true);
        }
      });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  changeLinkVisibility(value: boolean): void {
    for (const link of this.links) {
      link.visible = value;
    }
  }
}
