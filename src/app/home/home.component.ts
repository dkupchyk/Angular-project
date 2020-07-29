import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  changeRoute(link: string): void {
    this.router.navigate([link]);
  }

}
