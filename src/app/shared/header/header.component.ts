import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  links = [
    {link: 'home', title: 'Home'},
    {link: 'contact', title: 'Contact'},
    {link: 'users', title: 'Users'}
  ];
}
