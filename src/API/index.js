import { getRndInteger } from "src/utils";


const getRandomName = () => {
  const firstLetter = String.fromCharCode(getRndInteger(4304, 4336));
  return `${firstLetter}.${String.fromCharCode(getRndInteger(4304, 4336))}`
}

const withUniqueNumber = () => {
  return new Date(`${getRndInteger(10, 12)}, ${getRndInteger(1, 25)}, 2022`).getTime();
}

export const WinnerListAPI =
{
  "data": Array(8).fill(null).map((i, k) => {
    return {
      name: getRandomName(),
      id: k,
      winningDate: withUniqueNumber(),
      winNumber: getRndInteger(10000, 1000000)
    }
  })
}



export const NavigationList = [
  { slug: '#1', name: 'ბილეთები' },
  { slug: '#2', name: 'გათამაშების ისტორია' },
  { slug: 'lastwinner', name: 'გამარჯვებულები' }
]

export const HeaderNavigation = [
  {
    href: 'https://optimoml.geopay.ge/index.php',
    slug: 'online_market',
    name: 'მაღაზია'
  },
  {
    href: 'https://medical.pirveli.ge',
    slug: 'medical',
    name: 'მედიქალი'
  },
  {
    href: 'https://vouchers.pirveli.ge',
    slug: 'vouchers',
    name: 'ვაუჩერები'
  },
  {
    href: '/',
    slug: 'lottery',
    name: 'გათამაშება'
  },
  {
    href: 'https://games.geopay.ge/index.php',
    slug: 'games',
    name: 'თამაშები'
  }
];


export const LanguageList = [
  {
    name: 'Georgian',
    slug: 'ge',
    flag: 'img'
  }, {
    name: 'English',
    slug: 'um',
    flag: 'img'
  }, {
    name: 'Spain',
    slug: 'un',
    flag: 'img'
  },
]

export const footerNavList = {
  about: [
    { text: 'ვინ ვართ ჩვენ', slug: '', info: '' },
    { text: 'F.A.Q', slug: '', info: '' },
    { text: 'მისმართი', slug: '', info: '' },
    { text: 'გუნდი', slug: '', info: '' },
    { text: 'კონტაქტი', slug: '', info: '' },
  ],
  users: [
    { text: 'წესები და პირობები', slug: '', info: '' },
    { text: 'კონფიდენციალურობა', slug: '', info: '' },
    { text: 'როგორ ვითამაშო', slug: '', info: '' },
  ]
};