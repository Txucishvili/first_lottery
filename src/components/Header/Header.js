import React from 'react'
import { classNames } from '../../utils/classnames'
import styles from '../../../styles/components/header.module.scss';
import Logo from '../../Logo';
import Search from '../Search';
import Button from '../../Shared/Button';
import Link from 'next/link';
import IconWrap from '../IconWrap';
import { BurgerMenu, UserIcon } from '../../icons';
import useWindowSize from 'src/hooks/useWindowSize';

const MobileNavigation = () => {
  return <div className='appBurger flxAll'>
    <Button variant="text" reset width={35} height={35}>
      <IconWrap size={20} name="BurgerMenu" />
    </Button>
  </div>
}

const MobileUserInfo = () => {
  return <div className={classNames(styles.mobileUserInfo, 'flxAll')}>
    <Button variant="text" reset width={35} height={35}>
      <IconWrap size={22} name="UserIcon" />
    </Button>
  </div>
}

export default function Header() {
  const { width } = useWindowSize();

  return (
    <div className={classNames(styles.content, 'flx')}>
      <div className={styles.wrap}>


        <div className={styles.leftArea}>
          {width < 790 ? <MobileNavigation /> : ''}
          <div className={styles.logoArea}>
            <Link href={'/'} legacyBehavior>
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          {width < 790 ? <MobileUserInfo /> : ''}
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
