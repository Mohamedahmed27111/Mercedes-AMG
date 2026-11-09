// All page content lives here so the components stay purely presentational.
// Figures are through the end of the 2025 season (matches the W16 imagery).

export const navItems = [
  { href: '#about', label: 'Team', id: 'about' },
  { href: '#history', label: 'History', id: 'history' },
  { href: '#drivers', label: 'Drivers', id: 'drivers' },
  { href: '#car', label: 'Car', id: 'car' },
  { href: '#results', label: 'Results', id: 'results' },
  { href: '#partners', label: 'Partners', id: 'partners' },
];

export const heroFacts = [
  { value: '1954', label: 'First Silver Arrows GP' },
  { value: '8', label: 'Straight constructors’ titles' },
  { value: '2', label: 'UK sites: Brackley & Brixworth' },
  { value: 'W16', label: 'Current chassis' },
];

export const marqueeItems = [
  'Silver Arrows',
  'Brackley',
  'Brixworth',
  'Eight in a row',
  'Hybrid era',
  'Petronas Green',
  'Since 1954',
];

export const about = {
  eyebrow: '01 / The Team',
  title: 'Two factories. One silver car.',
  paragraphs: [
    'Mercedes-AMG PETRONAS Formula One Team designs, builds and races its cars in Brackley, Northamptonshire. Not far away in Brixworth, Mercedes-AMG High Performance Powertrains builds the hybrid power unit that sits behind the driver. Chassis and engine are developed as one package, which is the main reason it works.',
    'The team took the 2014 hybrid regulations and turned them into the most dominant stretch the sport has seen: eight Constructors’ titles in a row, seven Drivers’ titles, and a run of race wins that other teams are still measured against. The ground-effect cars since 2022 have been a harder story, and the team has rebuilt around a younger line-up.',
  ],
  facts: [
    ['Headquarters', 'Brackley, Northamptonshire, UK'],
    ['Power unit', 'Brixworth (HPP), UK'],
    ['Team Principal & CEO', 'Toto Wolff'],
    ['Ownership', 'Mercedes-Benz, INEOS, Toto Wolff (one third each)'],
    ['Team colours', 'Silver, black & PETRONAS green'],
    ['People', '2,000+ across both sites'],
  ],
};

export const timeline = [
  {
    year: '1954',
    title: 'The Silver Arrows arrive',
    text: 'Mercedes-Benz returns to Grand Prix racing at Reims. Juan Manuel Fangio wins on debut in the streamlined W196.',
  },
  {
    year: '1955',
    title: 'Second title, then a pause',
    text: 'Fangio takes a second world title and Stirling Moss wins the British GP with Fangio right behind. Mercedes withdraws from racing at the end of the season.',
  },
  {
    year: '2010',
    title: 'Back as a works team',
    text: 'Mercedes buys the Brawn GP outfit, the team that had just won both 2009 titles, and returns with Michael Schumacher and Nico Rosberg.',
  },
  {
    year: '2014',
    title: 'The hybrid era begins',
    text: 'With Lewis Hamilton alongside Rosberg and the new V6 turbo hybrid, Mercedes wins 16 of 19 races and the first of eight Constructors’ titles.',
  },
  {
    year: '2016',
    title: 'Rosberg takes the crown',
    text: 'Nico Rosberg beats Hamilton by five points in a season-long fight, then retires days after clinching his only title.',
  },
  {
    year: '2021',
    title: 'Number eight',
    text: 'Eight straight Constructors’ titles, a record no team had managed. Hamilton and Valtteri Bottas deliver it amid a title fight decided on the final lap.',
  },
  {
    year: '2022',
    title: 'A new rulebook',
    text: 'Ground-effect cars bring porpoising. Mercedes grinds through the season and George Russell wins in São Paulo to end the winless run.',
  },
  {
    year: '2025',
    title: 'A new generation',
    text: 'Hamilton leaves after 12 seasons. Russell leads the team and 18-year-old Kimi Antonelli steps up from the junior programme; the W16 wins in Canada and Singapore.',
  },
];

export const stats = [
  { value: 8, suffix: '', label: 'Constructors’ titles', note: 'Consecutive, 2014–2021' },
  { value: 7, suffix: '', label: 'Drivers’ titles', note: 'Hamilton six, Rosberg one' },
  { value: 120, suffix: '+', label: 'Grand Prix wins', note: 'Since returning in 2010' },
  { value: 50, suffix: '%+', label: 'Thermal efficiency', note: 'First F1 engine past the mark' },
];

// Constructors’ standing and wins by season (works team).
export const seasons = [
  { year: 2013, wins: 3, pos: 2 },
  { year: 2014, wins: 16, pos: 1 },
  { year: 2015, wins: 16, pos: 1 },
  { year: 2016, wins: 19, pos: 1 },
  { year: 2017, wins: 12, pos: 1 },
  { year: 2018, wins: 11, pos: 1 },
  { year: 2019, wins: 15, pos: 1 },
  { year: 2020, wins: 13, pos: 1 },
  { year: 2021, wins: 9, pos: 1 },
  { year: 2022, wins: 1, pos: 3 },
  { year: 2023, wins: 0, pos: 2 },
  { year: 2024, wins: 4, pos: 4 },
  { year: 2025, wins: 2, pos: 2 },
];

export const drivers = [
  {
    number: '63',
    first: 'George',
    last: 'Russell',
    role: 'Lead driver',
    country: 'United Kingdom',
    bio: 'A GP3 and Formula 2 champion in consecutive years, Russell cut his teeth at Williams before joining Mercedes in 2022. He took his first win in Brazil that year and has become the face of the team’s rebuild, as well as a director of the drivers’ association.',
    facts: [
      ['Born', '15 Feb 1998, King’s Lynn'],
      ['F1 debut', '2019 Australian GP'],
      ['With Mercedes', '2022 – present'],
      ['Grand Prix wins', '5'],
      ['First win', '2022 São Paulo GP'],
    ],
    image: 'george',
  },
  {
    number: '12',
    first: 'Kimi',
    last: 'Antonelli',
    role: 'Rising talent',
    country: 'Italy',
    bio: 'Signed to the Mercedes junior programme at 12, Antonelli skipped Formula 2 and moved straight to F1 in 2025 at just 18, the youngest driver the team has ever fielded. He took his first podium in Canada and is the long-term bet on the road after Hamilton.',
    facts: [
      ['Born', '25 Aug 2006, Bologna'],
      ['F1 debut', '2025 Australian GP'],
      ['With Mercedes', 'Junior since 2018'],
      ['First podium', '2025 Canadian GP (P3)'],
      ['Previous series', 'Formula Regional, F4'],
    ],
    image: null,
  },
];

export const legend = {
  name: 'Lewis Hamilton',
  years: '2013 – 2024',
  text: 'Twelve seasons, six of his seven world titles and a career-defining partnership with the team. His last Mercedes win came at Spa in 2024.',
  figures: [
    { value: '6', label: 'Titles with Mercedes' },
    { value: '84', label: 'Wins' },
    { value: '78', label: 'Pole positions' },
  ],
};

export const car = {
  name: 'F1 W16',
  season: '2025',
  intro:
    'The W16 was the final car of the current regulations: a stability-focused evolution of the W15, built to give Russell and Antonelli a platform they could trust in every corner type.',
  groups: [
    {
      title: 'Power unit',
      rows: [
        ['Engine', 'Mercedes-AMG F1 M16 E Performance'],
        ['Layout', '1.6 L V6 turbo, 90°, hybrid'],
        ['Rev limit', '15,000 rpm'],
        ['Fuel flow', '100 kg/h maximum'],
        ['Energy recovery', 'MGU-K + MGU-H'],
      ],
    },
    {
      title: 'Chassis',
      rows: [
        ['Monocoque', 'Carbon-fibre composite'],
        ['Gearbox', '8-speed seamless, 1 reverse'],
        ['Wheels', '18 inch, Pirelli'],
        ['Minimum weight', '800 kg with driver'],
        ['Brakes', 'Carbon discs, 6-piston calipers'],
      ],
    },
    {
      title: 'Performance',
      rows: [
        ['Top speed', 'Around 350 km/h'],
        ['0–100 km/h', 'About 2.6 s'],
        ['Thermal efficiency', 'Over 50%'],
        ['Downforce', 'More than the car’s own weight'],
      ],
    },
  ],
};

export const partners = [
  {
    tier: 'Principal partners',
    items: ['PETRONAS', 'INEOS', 'Mercedes-AMG'],
  },
  {
    tier: 'Technology',
    items: ['Qualcomm Snapdragon', 'AMD', 'CrowdStrike', 'TeamViewer', 'Solera', 'Signify'],
  },
  {
    tier: 'Official suppliers',
    items: ['Pirelli', 'IWC Schaffhausen', 'Tommy Hilfiger', 'Einhell'],
  },
];

export const ownership = [
  { name: 'Mercedes-Benz Group', share: 33.3 },
  { name: 'INEOS', share: 33.3 },
  { name: 'Toto Wolff', share: 33.4 },
];

export const footerCols = [
  {
    title: 'Team',
    links: [
      ['About', '#about'],
      ['History', '#history'],
      ['Drivers', '#drivers'],
    ],
  },
  {
    title: 'Car',
    links: [
      ['The W16', '#car'],
      ['Results', '#results'],
      ['Partners', '#partners'],
    ],
  },
];
