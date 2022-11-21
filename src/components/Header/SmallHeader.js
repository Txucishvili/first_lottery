import React from 'react'
import styles from '../../../styles/components/smallHeader.module.scss'
import { classNames } from '../../utils/classnames'
import { useOutsideClick } from '../../hooks/useOutsideClick';
import Image from 'next/image';
import { ArrowSvg } from '../../icons';
import Link from 'next/link';
import LanguageSwitcher from '../LanguageSwitcher';
import { useAppContext } from 'src/store';


const NavLinkItem = ({ name, slug, active, href }) => {
  return <Link href={href} className={classNames(styles.listItem, 'flx flxAI', {
    [styles.active]: active
  })}>
    {name}
  </Link>
}

const NavigationList = (props) => {
  const { menu } = props;

  return <ul className={classNames(styles.list, 'flx')}>
    {menu.map((e, k) => {
      return <li key={e.slug}><NavLinkItem active={k === 0} {...e} /></li>
    })}
  </ul>
}


export default function SmallHeader(props) {
  const { navigation, languages } = props;
  const activeLanguage = languages.find((c) => c.slug == 'um');
  const [_navigation, set] = useAppContext()

  return (
    <div className={classNames(styles.smallHeader, styles.wrap)}>
      <div className={classNames(styles.wrap, 'flx')}>
        <div className={classNames(styles.navArea, 'flx')}>
          <NavigationList menu={_navigation.headerNavigation} />
        </div>
        <div className={classNames(styles.infoArea, 'toRight flxAll')}>
          <ul className={styles.divideList}>
            <li className='item'>
              <p>მიმდინარე ბილეთები 4</p>
            </li>
            <li className='item'>
              <p>40 076</p>
            </li>
            <li className='item'>
              <LanguageSwitcher languages={languages} active={activeLanguage} />
            </li>
          </ul>
          {/* <div className={styles.userInfoToggle}>
            -
          </div> */}
        </div>
      </div>
    </div>
  )
}
