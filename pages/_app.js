import '../styles/globals.scss'
import styles from '../styles/components/layout.module.scss';
import SmallHeader from '../src/components/Header/SmallHeader';
import Header from '../src/components/Header/Header';


const navList = [
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


const LanguageList = [
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

function MyApp({ Component, pageProps }) {
  return <div className={styles.appLayout}>
    <div className={styles.wrap}>
      <SmallHeader languages={LanguageList} navigation={navList} />
      <Header />
      <Component />
    </div>
  </div>
}

export default MyApp
