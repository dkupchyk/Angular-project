import {Subject} from 'rxjs';
import {Section} from './section.interface';
import {CARD_SECTION, HOME_SECTION_2, OTHER_SECTION} from './section.constants';

export class SectionService {
  sections: Section[] = [];
  sectionsChanged = new Subject<Section[]>();

  constructor() {
    this.sections.push(CARD_SECTION);
    this.sections.push(HOME_SECTION_2);
    this.sections.push(OTHER_SECTION);
  }

  getSections(): void {
    return this.sectionsChanged.next(this.sections);
  }

}
