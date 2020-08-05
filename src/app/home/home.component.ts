import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionService} from '../section/section.service';
import {Section} from '../section/section.interface';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  sections: Section[] = [];

  constructor(private sectionService: SectionService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.sectionService.sectionsChanged
      .pipe(take(1))
      .subscribe(
        (sections: Section[]) => {
          this.sections = sections;
        }
      );
    this.sectionService.getSections();
  }

  checkType(index: number): void {
    index === 1
      ? this.router.navigate([this.sections[1].actionLink], {queryParams: {type: 2}})
      : this.router.navigate([this.sections[index].actionLink]);
  }


}
