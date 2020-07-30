import {Section, SectionItem} from './section.interface';

export const CARD_SECTION: Section = {
  title: 'About us',
  iconUrl: '../../assets/icons/history-icon.svg',
  actionLink: '../about',
  items: [
    new SectionItem(
      '1887-1890s',
      'https://www.coca-colacompany.com/content/dam/journey/au/en/private/2016/05/1887-1890s-inserting-the-trademark-187-110-ec766a25.png',
      'https://www.coca-colacompany.com/au/news/trace-the-130-year-evolution-of-the-coca-cola-logo',
      'On January 31, 1893, the logo was trademarked with the U.S. Patent Office. The words "Trade mark" are written in the tail of the "C" in Coca.'
    ),
    new SectionItem(
      '1958-1960s',
      'https://www.coca-colacompany.com/content/dam/journey/au/en/private/2016/05/1958-1960s-a-fishy-shape-187-110-ec766f19.jpg',
      'https://www.coca-colacompany.com/au/news/trace-the-130-year-evolution-of-the-coca-cola-logo',
      'This period sees the script placed inside an Arciform shape, which looks like an arch. The Arciform sign (better known as the “Fishtail” sign) was unveiled in 1958. Within a year, the Arciform design was used in copy, signage, cartoons and on vending machines.',
    ),
    new SectionItem(
      '2016',
      'https://www.coca-colacompany.com/content/dam/journey/au/en/private/2016/05/2016-taste-the-feeling-187-110-ec767734.jpg',
      'https://www.coca-colacompany.com/au/news/trace-the-130-year-evolution-of-the-coca-cola-logo',
      'Taking the best from both worlds, the “Taste the Feeling” campaign brought Coca-Colas One Brand strategy to life combining the old with the new.')
  ],
  description: 'Look at our amazing history!'
};

export const HOME_SECTION_2: Section = {
  title: 'Gallery',
  iconUrl: '../../assets/icons/gallery-icon.svg',
  actionLink: '../about',
  items: [
    new SectionItem('1939-1940', 'https://static.wixstatic.com/media/c56b6a_2c14b9e629064a38b8f033d8539ec4f0~mv2.gif'),
    new SectionItem('1940-1949', 'https://static.wixstatic.com/media/c56b6a_a55d8e41c6b149fa94044d2f9da37dbb~mv2.gif'),
    new SectionItem('1941-1946', 'https://static.wixstatic.com/media/c56b6a_b1be4cc21642491d9540d2dbf00222f0~mv2.gif'),
    new SectionItem('1947-1955', 'https://static.wixstatic.com/media/c56b6a_67112187755f410695a72170b362a009~mv2.gif')
  ],
  description: 'Make sure to have a glance of our awesome gallery!'
};

export const OTHER_SECTION: Section = {
  title: 'Contact us',
  iconUrl: '../../assets/icons/contact-icon.svg',
  actionLink: '../contact',
  items: [
    new SectionItem('', ''),
    new SectionItem('', '', ''),
    new SectionItem('', '', '', '')
  ],
  description: 'Have any questions? Feel free to contact us!'
};
