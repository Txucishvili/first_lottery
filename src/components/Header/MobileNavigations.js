import React, { useContext } from 'react'
import { classNames } from '../../utils/classnames'
import styles from '../../../styles/components/header.module.scss';
import Button from '../../Shared/Button';
import IconWrap from '../IconWrap';
import mobileStyle from '@/styles/components/mobilemenu.module.scss';
import LanguageSwitcher from '../LanguageSwitcher';
import { useAppContext } from 'src/store';
import Link from 'next/link';
import { UserAvatar } from '../UserAvatar';


export const MobileMenu = (props) => {
  const { onAction } = props;
  const [_navigation, set] = useAppContext();

  return <div className={mobileStyle.container}>
    <div className={mobileStyle.wrap}>
      <div className={mobileStyle.header}>
        <div className={mobileStyle.closeBtn}>
          <Button onClick={() => onAction('close')} variant="text" reset width={30} height={30}>
            <IconWrap size={16} name="CloseBold" />
          </Button>
        </div>

        <div className={mobileStyle.title}>
          ნავიგაცია
        </div>

        <div className={mobileStyle.languageSelect}>
          <LanguageSwitcher />
        </div>

      </div>

      <div className={mobileStyle.content}>
        <ul className={mobileStyle.navList}>
          {_navigation.headerNavigation.map((nav, key) => {
            return <li key={key}>
              <Link href={nav.slug}>
                <span>{nav.name}</span>
              </Link>
            </li>
          })}
        </ul>
        <div className={mobileStyle.divide} />
        <ul className={mobileStyle.navList}>
          {_navigation.appNavigation.map((nav, key) => {
            return <li key={key}>
              <Link href={nav.slug}>
                <span>{nav.name}</span>
              </Link>
            </li>
          })}
        </ul>
      </div>
      <div className={mobileStyle.divide} />

      <div className={mobileStyle.footer}>
        <div className={mobileStyle.logoutBtn}>
          <div className={mobileStyle.userAvatar}>
            <UserAvatar>
              <img src='/assets/images/avatar.png' />
            </UserAvatar>
          </div>
          <div className={mobileStyle.text}>
            გასვლა
          </div>
          <div className={mobileStyle.icon}>
            <IconWrap size={18} name="LogOut" />
          </div>

        </div>
      </div>

    </div>
  </div>
}


export const MobileUserMenu = () => {
  return <div className={classNames(styles.mobileUserInfo, 'flxAll')}>
    <Button variant="text" reset width={35} height={35}>
      <IconWrap size={22} name="UserIcon" />
    </Button>
  </div>
}
