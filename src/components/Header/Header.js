import React, { cloneElement, createElement, useEffect, useRef, useState } from 'react'
import { classNames } from '../../utils/classnames'
import styles from '../../../styles/components/header.module.scss';
import mobileMenuStyle from '../../../styles/components/mobilemenu.module.scss';
import Logo from '../../Logo';
import Search from '../Search';
import Button from '../../Shared/Button';
import Link from 'next/link';
import IconWrap from '../IconWrap';
import { BurgerMenu, UserIcon } from '../../icons';
import useWindowSize from 'src/hooks/useWindowSize';
import { isServer } from 'src/utils';
import ReactDOM from 'react-dom';
import { MobileMenu, MobileUserMenu } from './MobileNavigations';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { PortalWrapper } from '../PortalTransition';
import { useClient, useScrollDirection } from 'src/hooks';

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
      <IconWrap size={22} name="UserIcon" />
    </Button>
  </div>
}

const HeaderLogoArea = () => {
  return <>
    <MobileMenuTroggler />
    <div className={styles.logoArea}>
      <Link href={'/'} legacyBehavior>
        <a>
          <Logo />
        </a>
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
  const scrollPrev = useRef(0);

  const handleScroll = (e) => {
    console.log('---', e)
  }

  useEffect(() => {
    if (rendered) {
      if (width <= 900) {
        if (!hasLisener) {
          setLisner(true)
        }
      } else {
        if (hasLisener) {
          setLisner(false)
        }
      }

    }
  }, [hasLisener, rendered, width]);

  useEffect(() => {
    if (!hasLisener) {
      return;
    }

    function handleScroll(event) {
      const value = (document.body.getBoundingClientRect()).top < scrollSize;
      console.log('object', (document.body.getBoundingClientRect()).top, scrollSize)
      setScroll((document.body.getBoundingClientRect()).top)
      setDirection(value ? 1 : -1);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasLisener, scrollSize]);


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

  return <AnimatePresence>
    {(scrollSize < 200) && scrollDirection == -1 && (
      <motion.div
        initial={'inactive'}
        variants={variants}
        animate={width <= 900 ? "active" : "inactive"}
        exit={{...variants.inactive}}
        onAnimationComplete={() => {
          
        }}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
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
            <Search />
          </SearchWrap>
        </div>
        <div className={styles.authArea}>
          <Button variant="text">
            <IconWrap name="UserIcon" size={22} />
            <span>შესვლა</span>
          </Button>
        </div>

      </div>
    </div>
  )
}
