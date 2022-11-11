import '../styles/globals.scss'
import styles from '../styles/components/layout.module.scss';
import SmallHeader from '../src/components/Header/SmallHeader';
import Header from '../src/components/Header/Header';
import Navigation from '../src/components/Header/Navigation';
import { Modal, ModalWrapper } from '../src/Shared/Modal';
import { useEffect } from 'react';
import { isServer } from '../src/utils';
import { ThemeProvider } from 'styled-components';
import Footer from '@/components/Footer/Footer';


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

const NavigationList = [
  { slug: 'ticket', name: 'ბილეთები' },
  { slug: 'lastwinner', name: 'გათამაშების ისტორია' }
]

const footerNavList = {
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

function MyApp({ Component, pageProps }) {


  return <div className={styles.appLayout}>
    <div className={styles.wrap}>
      <div className='sticky-header'>
        <SmallHeader languages={LanguageList} navigation={navList} />
        <Header />
        <Navigation navigation={NavigationList} />
      </div>
      <div className='pageWrap'>
        <Component {...pageProps} />
      </div>
      <Footer navigation={footerNavList} />
      {/* <ModalWrapper ref={(ref) => (modalRef = ref)} /> */}
      {/* <div suppressHydrationWarning id="modals">
          {isServer ? null : <div suppressHydrationWarning id="modalsWrap"></div>}
        </div> */}
    </div>
  </div>
}

export default MyApp
