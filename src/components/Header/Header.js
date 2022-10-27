import React from 'react'
import { classNames } from '../../utils/classnames'
import styles from '../../../styles/components/header.module.scss';
import Logo from '../../Logo';
import Search from '../Search';
import Button from '../../Shared/Button';
import Link from 'next/link';
import IconWrap from '../IconWrap';
import { UserIcon } from '../../icons';


export default function Header() {
  return (
    <div className={classNames(styles.content, 'flx')}>
      <div className={styles.wrap}>
        <div className={styles.logoArea}>
          <Link href={'basepath'} legacyBehavior>
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <div className={styles.searchArea}>
          <Search />
        </div>
        <div className={styles.authArea}>
        <Button text="შესვლა">
            <IconWrap name="UserIcon" />
            <div>შესვლა</div>
          </Button>
        </div>

      </div>
    </div>
  )
}
