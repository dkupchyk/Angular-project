import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionService} from '../section/section.service';
import {Section} from '../section/section.interface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {
  sections: Section[] = [];
  subscription: Subscription;

  constructor(private sectionService: SectionService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.subscription = this.sectionService.sectionsChanged.subscribe(
      (sections: Section[]) => {
        this.sections = sections;
      }
    );
    this.sectionService.getSections();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  checkType(index: number): void {
    index === 1
      ? this.router.navigate([this.sections[1].actionLink], {queryParams: {type: 2}})
      : this.router.navigate([this.sections[index].actionLink]);
  }


}
