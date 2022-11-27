import React from 'react'
import styles from '@/styles/components/footer.module.scss';
import Link from 'next/link';
import classNames from 'classnames';
import { Facebook, Instagram, Youtube } from 'src/icons';
import { useAppContext } from 'src/store';
import useWindowSize from 'src/hooks/useWindowSize';
import Image from 'next/image';


export function _Footer(props) {
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

export default function Footer() {
  const [_navigation, set] = useAppContext();
  const { width } = useWindowSize();


  const IconNavigaation = () => {
    return <div className='navigation-icon'>
      <ul className='navigation-icon--list'>
        <li className='navigation-icon--item'>
          <Link href={'some'}>
              <Facebook />
          </Link>
        </li>
        <li className='navigation-icon--item'>
          <Link href={'some'}>
              <Instagram />
          </Link>
        </li>
        <li className='navigation-icon--item'>
          <Link href={'some'}>
              <Youtube />
          </Link>
        </li>
      </ul>
    </div>
  }

  return <div className={styles.footerArea}>
    <div className='footer footer--wrap'>

      <div className='nav-grid'>

        <div className='col'>
          <div className='navigation'>
            <div className='navigation--title'>კომპანიის შესახებ</div>
            <ul className='navigation--list'>
              {_navigation.footerNavigation.about.map((nav, k) => {
                return <li className='navigation--list--item' key={k}>
                  <Link href={nav.slug}>
                    {nav.text}
                  </Link>
                </li>
              })}
            </ul>
          </div>

          <div className='col-el md-social btm'>
            <IconNavigaation />
          </div>

        </div>

        <div className='col'>
          <div className='navigation'>
            <div className='navigation--title'>მომხმარებლებისთვის</div>
            <ul className='navigation--list'>
              {_navigation.footerNavigation.users.map((nav, k) => {
                return <li className='navigation--list--item' key={k}>
                  <Link href={nav.slug}>
                    {nav.text}
                  </Link>
                </li>
              })}
            </ul>
          </div>
          {width <= 375 ?
            <IconNavigaation />
            : null}
          <div className='col-el -copy_Right btm flxAll'>

            <p>Copyright © 2022 our website. All rights reserved.</p>
          </div>
        </div>

      </div>


      <div className='bgArea'>
        <div className='circle'>
          <div className='image'>
            <div className='image-wrap'>
              <Image
                alt=''
                layout='fill'
                width={256}
                height={197}
                src={'/assets/images/footer.png'} />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
}