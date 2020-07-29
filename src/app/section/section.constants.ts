import {Section, SectionItem} from './section.interface';

export const CARD_SECTION: Section = {
  title: 'About us',
  iconUrl: 'string',
  actionLink: 'string',
  items: [
    new SectionItem(
      '1887-1890s',
      'https://www.coca-colacompany.com/au/news/trace-the-130-year-evolution-of-the-coca-cola-logo',
      'https://www.coca-colacompany.com/content/dam/journey/au/en/private/2016/05/1887-1890s-inserting-the-trademark-187-110-ec766a25.png',
      'On January 31, 1893, the logo was trademarked with the U.S. Patent Office. The words "Trade mark" are written in the tail of the "C" in Coca.'
    ),
    new SectionItem(
      '1958-1960s',
      'https://www.coca-colacompany.com/au/news/trace-the-130-year-evolution-of-the-coca-cola-logo',
      'https://www.coca-colacompany.com/content/dam/journey/au/en/private/2016/05/1958-1960s-a-fishy-shape-187-110-ec766f19.jpg',
      'This period sees the script placed inside an Arciform shape, which looks like an arch. The Arciform sign (better known as the “Fishtail” sign) was unveiled in 1958. Within a year, the Arciform design was used in copy, signage, cartoons and on vending machines.',
    ),
    new SectionItem(
      '2016',
      'https://www.coca-colacompany.com/au/news/trace-the-130-year-evolution-of-the-coca-cola-logo',
      'https://www.coca-colacompany.com/content/dam/journey/au/en/private/2016/05/2016-taste-the-feeling-187-110-ec767734.jpg',
      'Taking the best from both worlds, the “Taste the Feeling” campaign brought Coca-Colas One Brand strategy to life combining the old with the new.')
  ],
  description: ''
};

export const HOME_SECTION_2: Section = {
  title: '',
  iconUrl: 'string',
  actionLink: 'string',
  items: [
    new SectionItem('', ''),
    new SectionItem('', '', ''),
    new SectionItem('', '', '', '')],
  description: ''
};

export const OTHER_SECTION: Section = {
  title: '',
  iconUrl: 'string',
  actionLink: 'string',
  items: [
    new SectionItem('', ''),
    new SectionItem('', '', ''),
    new SectionItem('', '', '', '')
  ],
  description: ''
};
