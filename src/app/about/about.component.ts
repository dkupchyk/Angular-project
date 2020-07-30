import {Component, OnDestroy, OnInit} from '@angular/core';
import {SectionService} from '../section/section.service';
import {Section} from '../section/section.interface';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {HIDE_GALLERY_CONSTANT, SHOW_GALLERY_CONSTANT} from './constants/content.constant';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit, OnDestroy {
  cardSection: Section;
  carouselSection: Section;

  typeParam: string;
  subscription: Subscription;

  buttonClicked = false;
  buttonText = this.showText;

  constructor(private sectionService: SectionService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sectionService.sectionsChanged.subscribe(
      (sections: Section[]) => {
        this.cardSection = sections[0];
        this.carouselSection = sections[1];
      }
    );

    this.sectionService.getSections();

    this.subscription = this.route.queryParams.subscribe(params => {
      this.typeParam = params['type'];
    });

    if (this.typeParam === '2') {
      this.buttonClicked = true;
      this.buttonText = this.hideText;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get hideText(): string {
    return HIDE_GALLERY_CONSTANT;
  }

  get showText(): string {
    return SHOW_GALLERY_CONSTANT;
  }

}
