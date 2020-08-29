export const MARITAL_STATUS_OPTIONS = [
  'Married',
  'Widowed',
  'Separated',
  'Divorced',
  'Single'
];

export const POSITION_OPTIONS = [
  'Administrative Assistant',
  'Receptionist',
  'Office Manager',
  'Auditing Clerk',
  'Bookkeeper',
  'Account Executive',
  'Branch Manager',
  'Business Manager'
];

export const EDUCATION_CENTERS = [
  'O.O. Bogomolets National Medical University',
  'Kiev Medical University of UAFM',
  'Academy of Advocacy of Ukraine',
  'Bogomolets National Medical University of Ukraine',
  'Borys Grinchenko Kyiv University',
  'Economics Education and Research Consortium',
  'International Christian University – Kiev',
  'International Institute of Business',
  'International Solomon University',
  'Interregional Academy of Personnel Management',
  'KROK University',
  'Kyiv International University',
  'Kiev Military Institute of Control and Signals',
  'Kyiv National Economic University',
  'Kyiv National Linguistic University',
  'Kyiv National University of Construction and Architecture(KNUCA)',
  'Kyiv National University of Technology and Design(KNUTD)',
  'Kyiv National University of Trade and Economics',
  'Kyiv School of Economics',
  'Kyiv Polytechnic Institute',
  'Kiev State Tchaikovsky Academy of Music',
  'Kyiv University for Market Relations',
  'The National Academy of Fine Arts and Architecture',
  'National Academy of Management',
  'National University of Defense of Ukraine',
  'National Aviation University',
  'National Pedagogical Dragomanov University',
  'National University of Kyiv-Mohyla Academy',
  'National University of Food Technologies',
  'National University of Theatre, Film and TV of Karpenko-Kary',
  'State University of Information and Communication Technologies',
  'Taras Shevchenko National University of Kyiv',
  'Open International University of Human Development "Ukraine"',
  'Wisconsin International University in Ukraine',
  'National University of Life and Environmental Sciences of Ukraine',
  'International European University',
  'Ukraine Open University',
  'Kyiv National University of Culture and Arts'
];

export const YEARS = generateYearsArray();

function generateYearsArray(): string[] {
  const array = [];
  for (let i = 2030; i > 1980; i--){
    array.push(i);
  }
  return array;
}
