import '../styles/globals.scss'
import styles from '../styles/components/layout.module.scss';
import SmallHeader from '../src/components/Header/SmallHeader';
import Header from '../src/components/Header/Header';
import Navigation from '../src/components/Header/Navigation';
import { useEffect } from 'react';
import Footer from '@/components/Footer/Footer';
import { footerNavList, HeaderNavigation, LanguageList, NavigationList } from 'src/API';
import { AppContextProvider } from 'src/store';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

function MyApp(props) {
  const { Component, pageProps, navigations } = props;

  useEffect(() => {
    console.log('publicRuntimeConfig', VERSION)
    // !!!
    if (window.localStorage.getItem('scrollOptions')) {
      const opt = JSON.parse(window.localStorage.getItem('scrollOptions'));
      if (opt && opt.reload) {
        window.document.scrollingElement.scrollTop = Math.abs(opt.scroll);
        window.localStorage.setItem('scrollOptions', JSON.stringify({ ...opt, reload: false }));
      } else {}
    }

    window.addEventListener("beforeunload", alertUser);

    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const alertUser = (e) => {
    window.localStorage.setItem('scrollOptions', JSON.stringify({
      reload: true,
      scroll: (document.body.getBoundingClientRect()).top
    }))
  };

  return <AppContextProvider initialValue={{ ...navigations }}>
    <div className={styles.appLayout}>
      <div className={styles.wrap}>
        <div className='sticky-header'>
          <SmallHeader languages={[]} navigation={[]} />
          <Header />
          <Navigation navigation={[]} />
        </div>

        <div className='appContent'>
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
