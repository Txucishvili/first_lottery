import React, { cloneElement, createElement, useEffect, useRef, useState } from 'react'
import { classNames } from '../../utils/classnames'
import styles from '../../../styles/components/header.module.scss';
import mobileMenuStyle from '../../../styles/components/mobilemenu.module.scss';
import Logo from '../../Logo';
import Search from '../Search';
import Button from '../../Shared/Button';
import Link from 'next/link';
import IconWrap from '../IconWrap';
import useWindowSize from 'src/hooks/useWindowSize';
import { isServer } from 'src/utils';
import ReactDOM from 'react-dom';
import { MobileMenu, MobileUserMenu } from './MobileNavigations';
import { AnimatePresence, motion, useAnimationControls, useScroll } from 'framer-motion';
import { PortalWrapper } from '../PortalTransition';
import { useClient, useScrollDirection } from 'src/hooks';
import UserInfo from '@/components/UserInfo'

const MobileMenuTroggler = ({ onClick }) => {
  const [open, setOpen] = useState(false)
  const isActive = useRef(open);
  const animation = useRef();

  useEffect(() => {
    if (typeof document == 'undefined') {
      return;
    }
    if (open) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
  }, [open])

  const onOpen = (e) => {
    setOpen(true);
    isActive.current = true;
    onClick && onClick();
  }

  const onMenuAction = (e) => {
    switch (e) {
      case 'close':
        setOpen(false);
        break;
      default:
        break;
    }
  }

  return <div className={classNames(styles.appBurger, { [styles.active]: isActive.current })}>
    <PortalWrapper>
      <AnimatePresence>
        {open ?
          <motion.div
            className={mobileMenuStyle.overlayWrap}
            animate={{ left: ['-100vh', '0vh'] }}
            exit={{ left: ['0vh', '-100vh'] }}
          >
            <MobileMenu onAction={onMenuAction} />
          </motion.div>
          : null}
      </AnimatePresence>
    </PortalWrapper>
    <Button onClick={onOpen} variant="text" reset width={35} height={35}>
      <IconWrap size={20} name="BurgerMenu" />
    </Button>
  </div>
}

const MobileUserToggler = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (typeof document == 'undefined') {
      return;
    }
    if (open) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
  }, [open])

  return <div className={classNames(styles.mobileUserInfo, 'flxAll', { [styles.active]: open })}>
    <PortalWrapper>
      <AnimatePresence>
        {open ? <motion.div
          className={mobileMenuStyle.overlayWrap}
          animate={{ right: ['-100vh', '0vh'] }}
          exit={{ right: ['0vh', '-100vh'] }}
        >
          <MobileUserMenu
            onAction={(e) => {
              if (e == 'close') setOpen(false)
            }}
          />
        </motion.div> : null}
      </AnimatePresence>
    </PortalWrapper>

    <Button onClick={() => setOpen(true)} variant="text" reset width={35} height={35}>
      <IconWrap size={22} name='User' />
    </Button>
  </div>
}

const HeaderLogoArea = () => {
  return <>
    <MobileMenuTroggler />
    <div className={styles.logoArea}>
      <Link href={'/'} prefetch={false}>
          <Logo />
      </Link>
    </div>
    <MobileUserToggler />
  </>
}



const SearchWrap = (props) => {
  const { children } = props;

  const { isClient: rendered } = useClient();
  const { width } = useWindowSize();
  const [hasLisener, setLisner] = useState(false);
  const [scrollSize, setScroll] = useState(null);
  const [scrollDirection, setDirection] = useState(-1);
  const header = useAnimationControls({ height: 0 });
  const appHeader = useAnimationControls({ height: 0 });
  const [overflow, setOverflow] = useState('visible')


  useEffect(() => {
    if (rendered && header) {
      if (width <= 768) {
        if (!hasLisener) {
          setLisner(true)
        }
      } else {
        header.start({ height: 'initial' })
        if (hasLisener) {
          setLisner(false)
        }
      }

    }
    if (width > 768) {
      // appHeader.start({
      //   height: 'initial'
      // })
    } else {

    }
  }, [hasLisener, header, rendered, width]);

  useEffect(() => {
    if (!hasLisener) {
      return;
    }

    function handleScroll(event) {
      const value = (document.body.getBoundingClientRect()).top < scrollSize;
      // console.log('object', (document.body.getBoundingClientRect()).top, scrollSize)
      setScroll((document.body.getBoundingClientRect()).top)
      setDirection(value ? 1 : -1);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasLisener, scrollSize]);

  useEffect(() => {
    if (scrollDirection == 1) {
      header.start({ height: 0 }).then(() => {
        setOverflow('hidden')

      })
    }
    if (scrollDirection == -1) {
      header.start({ height: 60 }).then(() => {
        setOverflow('visible')
      })
    }
  }, [header, scrollDirection, width])

  const variants = {
    active: {
      height: 59,
      opacity: 1,
    },
    inactive: {
      height: 0,
      opacity: 0,
    }
  }

  if (width <= 768) {
    return <motion.div
    // style={{ overflow: overflow }}
    // initial={{ height: 0 }}
    // animate={header}
    // onAnimationComplete={() => {

    // }}
    >
      <Search
        onFocuse={() => {
          console.log('on Focus preseve close')
        }}
        onActive={() => {
          console.log('on onActive preseve close')
        }}
        onChange={(e) => {
          console.log('on change', e)
        }}
      />
    </motion.div>
  }

  return <motion.div
  // initial={{ height: 0 }}
  // animate={appHeader}
  //   style={{ height: 0 }}
  >
    <Search
      onFocuse={() => {
        console.log('on Focus preseve close')
      }}
      onActive={() => {
        console.log('on onActive preseve close')
      }}
      onChange={(e) => {
        console.log('on change', e)
      }}
    />
  </motion.div>
}

export default function Header() {

  return (
    <div className={classNames(styles.content, 'flx')}>
      <div className={styles.wrap}>


        <div className={styles.leftArea}>
          <HeaderLogoArea />
        </div>
        <div className={styles.searchArea}>
          <SearchWrap>

          </SearchWrap>
        </div>
        <div className={styles.authArea}>
          <UserInfo />
          <Link href='https://auth.pirveli.ge/realms/xracoon-demo/protocol/openid-connect/auth?response_type=code&client_id=demo-client&scope=email%20profile%20roles%20openid&state=ozej6dlmtIpneeVt7QoGPy2zXJ9e6BNPdGltyKyn3X4%3D&redirect_uri=https://lot51.pirveli.ge&nonce=KAmXCp0jHrPiUph9D2p5yVwdpT5g3qWO0iCxqJFbiv0'>
              <Button variant="text">
                <IconWrap name="User" size={22} />
                <span>შესვლა</span>
              </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}
