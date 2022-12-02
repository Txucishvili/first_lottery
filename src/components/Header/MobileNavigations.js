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



export const MobileUserMenu = ({ onAction }) => {
  return <div className={mobileStyle.userMenu}>
    <div className='svg-clip'>
      <svg width="0" height="0" hidden>
        <defs>
          <clipPath id="clipCorner">
            <polyline points="228.66 0.04 114.23 30.68 114.23 0.04 227.3 0.04 1.36 0 114.43 0 114.43 30.64 0 0" />

          </clipPath>
        </defs>
      </svg>
    </div>
    <div className={'menu-header'}>
      <div className={'closeBtn'}>
        <Button onClick={() => onAction('close')} variant="text" reset width={30} height={30}>
          <IconWrap size={16} name="CloseBold" />
        </Button>
      </div>
      <div className='avatar-area'>
        <UserAvatar>
          <img src='/assets/images/avatar.png' />
        </UserAvatar>
      </div>
    </div>

    <div className='box-list'>
      <div className='box-item virtual'>
        <div className='box-icon'>
          <IconWrap size={32} name="around_360" />
        </div>
        <div className='box-text'><span>ვირტუალური ტური</span></div>
      </div>
      <div className='box-item shop'>
        <div className='box-icon'>
          <IconWrap size={18} name="shop" />
        </div>
        <div className='box-text'><span>ონლაინ მაღაზია</span></div>
      </div>
      <div className='box-item voucher'>
        <div className='box-icon'>
          <IconWrap size={21} name="Ticket" />
        </div>
        <div className='box-text'><span>ვაუჩერები</span></div>
      </div>
      <div className='box-item medical'>
        <div className='box-icon'>
          <IconWrap size={18} name="pill" />
        </div>
        <div className='box-text'><span>მედიქალი</span></div>
      </div>
    </div>

    <ul className='nav-list'>
      <li className='nav-item'>
        <Link href={'/'}>
          <span>ბილეთები</span>
        </Link>
      </li>
      <li className='nav-item'>
        <Link href={'/'}><span>გათამასების ისტორია</span></Link>
      </li>
      <li className='nav-item'>
        <div className='btn' href={'/'}>
          <span>გასვლა</span>
          <div className='icon-wrap'>
            <IconWrap size={20} name='LogOut' />
          </div>
        </div>
      </li>
    </ul>
  </div>
}
