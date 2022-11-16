import React, { createElement, useEffect, useRef, useState } from 'react'
import { classNames } from '../../utils/classnames'
import styles from '../../../styles/components/header.module.scss';
import mobileMenuStyle from '../../../styles/components/header.module.scss';
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
import { AnimatePresence, motion } from 'framer-motion';

const MobileMenuTroggler = ({ onClick }) => {
  const [open, setOpen] = useState(false)
  const isActive = useRef(open);
  const animation = useRef();

  useEffect(() => {
    return () => {
    }
  }, [])

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
    <AnimatePresence>
      {open ?
        <motion.div
          style={{ position: 'fixed', top: 0, width: '100%', height: '100%' }}
          animate={{ left: ['-100vh', '0vh'] }}
          exit={{ left: ['0vh', '-100vh'] }}
        >
          <MobileMenu onAction={onMenuAction} />
        </motion.div>
        : null}
    </AnimatePresence>
    <Button onClick={onOpen} variant="text" reset width={35} height={35}>
      <IconWrap size={20} name="BurgerMenu" />
    </Button>
  </div>
}

const MobileUserToggler = () => {
  const [open, setOpen] = useState(false)

  return <div className={classNames(styles.mobileUserInfo, 'flxAll', { [styles.active]: open })}>
    <AnimatePresence>
      {open ? <motion.div
        style={{ position: 'fixed', top: 0, width: '100%', height: '100%' }}
        animate={{ right: ['-100vh', '0vh'] }}
        exit={{ right: ['0vh', '-100vh'] }}
      >
        <MobileUserMenu onAction={(e) => {
          if (e == 'close') setOpen(false)
        }} />
      </motion.div> : null}
    </AnimatePresence>
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

export default function Header() {
  return (
    <div className={classNames(styles.content, 'flx')}>
      <div className={styles.wrap}>


        <div className={styles.leftArea}>
          <HeaderLogoArea />
        </div>
        <div className={styles.searchArea}>
          <Search />
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
