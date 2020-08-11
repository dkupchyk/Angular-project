import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  links = [
    {link: 'home', title: 'Home', visible: true},
    {link: 'about', title: 'About', visible: false},
    {link: 'contact', title: 'Contact', visible: false},
    {link: 'users', title: 'Users', visible: false},
    {link: 'log-in', title: 'Authorization', visible: true}
  ];

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.userChanged
      .subscribe(user => {
        if (user) this.changeLinkVisibility(true);
      });
  }

  changeLinkVisibility(value: boolean) {
    for (let link of this.links) {
      link.visible = value;
    }
  }
}
