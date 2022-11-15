import React from 'react'
import styles from '@/styles/components/footer.module.scss';
import Link from 'next/link';
import classNames from 'classnames';
import { Facebook, Instagram, Youtube } from 'src/icons';
import { useAppContext } from 'src/store';

export default function Footer(props) {
  const [_navigation, set] = useAppContext()

  return (
    <div className={styles.container}>
      <div className={classNames('flx', styles.wrap)}>
        <div className={styles.navigationArea}>
          <div className={styles.navListBox}>
            <div className={styles.navListTitle}>კომპანიის შესახებ</div>
            <ul className={styles.navList}>
              {_navigation.footerNavigation.about && _navigation.footerNavigation.about.map((n, k) => {
                return <li className={styles.navListItem} key={k}>
                  <Link href={n.slug}>
                    {n.text}
                  </Link>
                </li>
              })}
            </ul>
            <div className={styles.navListBottom}>
              <ul className={classNames(styles.navSocialList, 'flx flxAC')}>
                <li className={styles.navSocialItem}>
                  <Link href={'some'}>
                    <Youtube />
                  </Link>
                </li>
                <li className={styles.navSocialItem}>
                  <Link href={'some'}>
                    <Instagram />
                  </Link>
                </li>
                <li className={styles.navSocialItem}>
                  <Link href={'some'}>
                    <Facebook />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.navListBox}>
            <div className={styles.navListTitle}>მომხმარებლებისთვის</div>
            <ul className={styles.navList}>
              {_navigation.footerNavigation.users && _navigation.footerNavigation.users.map((n, k) => {
                return <li className={styles.navListItem} key={k}>
                  <Link href={n.slug}>
                    {n.text}
                  </Link>
                </li>
              })}
            </ul>
            <div className={styles.navListBottom}>
              <p>Copyright © 2022 our website. All rights reserved.</p>

            </div>
          </div>
        </div>
        
      </div>
      <div className={styles.imageBg}>
          <div className={styles.circle}></div>
          <img src={'/assets/images/footer.svg'} />
        </div>
    </div>
  )
}
