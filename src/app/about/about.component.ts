import {Component, OnInit} from '@angular/core';
import {SectionService} from '../section/section.service';
import {Section} from '../section/section.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  cardSection: Section;
  carouselSection: Section;

  constructor(private sectionService: SectionService) {
  }

  ngOnInit(): void {
    this.cardSection = this.sectionService.getSection(0);
    this.carouselSection = this.sectionService.getSection(1);
  }

  onButtonClicked(): void {

  }

}
