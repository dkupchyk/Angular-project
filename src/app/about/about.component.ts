import {Component, OnDestroy, OnInit} from '@angular/core';
import {SectionService} from '../section/section.service';
import {Section} from '../section/section.interface';
import {ActivatedRoute} from '@angular/router';
import {HIDE_GALLERY_CONSTANT, SHOW_GALLERY_CONSTANT} from './constants/content.constant';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  cardSection: Section;
  carouselSection: Section;
  buttonText = this.showText;
  typeParam: string;

  constructor(private sectionService: SectionService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sectionService.sectionsChanged
      .pipe(take(1))
      .subscribe(
        (sections: Section[]) => {
          this.cardSection = sections[0];
          this.carouselSection = sections[1];
        }
      );

    this.sectionService.getSections();

    this.route.queryParams
      .pipe(take(1))
      .subscribe(params => {
        this.typeParam = params['type'];
      });

    if (this.typeParam === '2') {
      this.buttonText = this.hideText;
    }
  }

  get hideText(): string {
    return HIDE_GALLERY_CONSTANT;
  }

  get showText(): string {
    return SHOW_GALLERY_CONSTANT;
  }

}
