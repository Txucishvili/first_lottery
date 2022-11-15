import React, { createElement, useEffect, useState } from 'react'
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
import {AnimatePresence, motion} from 'framer-motion';

const MobileMenuTroggler = ({ onClick }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
  }, [])

  const onOpen = (e) => {
    setOpen(true);
    onClick && onClick();
  }

  const onMenuAction = (e) => {
    console.log('object')
    switch (e) {
      case 'close':
        setOpen(false);
        break;
    
      default:
        break;
    }
  }

  return <div style={{zIndex: 2}} className='appBurger flxAll'>
    <AnimatePresence>{open ? 
      <motion.div
        style={{position: 'fixed', top: 0, width: '100%', height: '100%' }}
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

const HeaderLogoArea = () => {
  const { width } = useWindowSize();
  return <>
    {width < 790 ? <MobileMenuTroggler /> : ''}
    <div className={styles.logoArea}>
      <Link href={'/'} legacyBehavior>
        <a>
          <Logo />
        </a>
      </Link>
    </div>
    {width < 790 ? <MobileUserMenu /> : ''}
  </>
}

export default function Header() {
  // const { width } = useWindowSize();

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
