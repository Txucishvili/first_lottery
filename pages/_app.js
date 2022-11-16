import '../styles/globals.scss'
import styles from '../styles/components/layout.module.scss';
import SmallHeader from '../src/components/Header/SmallHeader';
import Header from '../src/components/Header/Header';
import Navigation from '../src/components/Header/Navigation';
import { Modal, ModalWrapper } from '../src/Shared/Modal';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { isServer } from '../src/utils';
import { ThemeProvider } from 'styled-components';
import Footer from '@/components/Footer/Footer';
import { footerNavList, HeaderNavigation, LanguageList, NavigationList } from 'src/API';
import { AppContextProvider } from 'src/store';
import { MobileMenu } from '@/components/Header/MobileNavigations';


function MyApp(props) {
  const { Component, pageProps, navigations } = props;

  return <AppContextProvider initialValue={{...navigations}}>
    <div className={styles.appLayout}>
      <div className={styles.wrap}>
        <div className='sticky-header'>
          <SmallHeader languages={[]} navigation={[]} />
          <Header />
          <Navigation navigation={[]} />
        </div>

        <div className='pageWrap'>
          <Component {...pageProps} />
        </div>
        <Footer navigation={[]} />
      </div>
    </div>
  </AppContextProvider>
}

MyApp.getInitialProps = async () => {

  const headerNavigation = HeaderNavigation;
  const appNavigation = NavigationList;
  const footerNavigation = footerNavList;
  const languages = LanguageList;

  return {
    navigations: {
      headerNavigation,
      appNavigation,
      footerNavigation,
      languages
    }
  }
}

export default MyApp
