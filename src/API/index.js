function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomName = () => {
  const firstLetter = String.fromCharCode(getRndInteger(4304, 4336));
  return `${firstLetter}.${String.fromCharCode(getRndInteger(4304, 4336))}`
}

const withUniqueNumber = () => {
  return new Date(`${getRndInteger(10, 12)}, ${getRndInteger(1, 25)}, 2022`).getTime();
}

export const WinnerListAPI =
{
  "data": Array(128).fill(null).map((i, k) => {
    return {
      name: getRandomName(),
      id: k,
      winningDate: withUniqueNumber(),
      winNumber: getRndInteger(10000, 1000000)
    }
  })
}



export const NavigationList = [
  { slug: 'ticket', name: 'ბილეთები' },
  { slug: 'lastwinner', name: 'გათამაშების ისტორია' }
]

export const HeaderNavigation = [
  {
    slug: 'lottery_raffle',
    name: 'ლოტოს გათამაშება'
  },
  {
    slug: 'vouchers',
    name: 'ვაუჩერები'
  },
  {
    slug: 'medical',
    name: 'მედიქალი'
  },
  {
    slug: 'online_market',
    name: 'ონლაინ მაღაზია'
  },
  {
    slug: 'virtual_tour',
    name: 'ვირტუალური ტური'
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
    { text: 'კონტაქტი', slug: '', info: '' },
  ],
  users: [
    { text: 'წესები და პირობები', slug: '', info: '' },
    { text: 'კონფიდენციალურობა', slug: '', info: '' },
    { text: 'როგორ ვითამაშო', slug: '', info: '' },
  ]
};