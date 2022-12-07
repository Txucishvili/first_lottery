import React, { useEffect, useRef, useState } from 'react'
import styles from '../../../styles/components/smallHeader.module.scss'
import { classNames } from '../../utils/classnames'
import { useOutsideClick } from '../../hooks/useOutsideClick';
import Image from 'next/image';
import { ArrowSvg } from '../../icons';
import Link from 'next/link';
import LanguageSwitcher from '../LanguageSwitcher';
import { useAppContext } from 'src/store';
import { difference, last } from 'lodash';
import _ from 'lodash';


const NavLinkItem = ({ name, slug, active, href }) => {
  return <Link href={href} className={classNames(styles.listItem, 'flx flxAI', {
  })}>
    {name}
  </Link>
}

const NavigationList = (props) => {
  const { menu } = props;

  return <ul className={classNames(styles.list, 'flx')}>
    {menu.map((e, k) => {
      return <li key={e.slug} className={classNames({
        [styles.active]: e.slug == 'lottery'
      })}><NavLinkItem  {...e} /></li>
    })}
  </ul>
}


export default function SmallHeader(props) {
  const { navigation, languages } = props;
  const activeLanguage = languages.find((c) => c.slug == 'um');
  const [_navigation, set] = useAppContext()
  const [scroll, setScrollSize] = useState(0);
  const ref = useRef();
  const last = useRef();

  function difference(object, base) {
    function changes(object, base) {
      return _.transform(object, function (result, value, key) {
        if (!_.isEqual(value, base[key])) {
          result[key] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
        }
      });
    }
    return changes(object, base);
  }

  function getElementScrollFraction(elem) {
    // console.log('--- object', elem.scrollTop, elem.scrollHeight - elem.clientHeight)
    return elem.scrollTop / (elem.scrollHeight - elem.clientHeight);
  }

  const prev = useRef();

  useEffect(() => {
    // console.log('document.documentElement.scrollTop', document.scrollingElement.scrollTop)
    // document.addEventListener('scroll', (e) => {
    //   console.log('------------------ last.current', last.current, e.target.scrollingElement.scrollTop, document.documentElement.scrollTop)

    //   if (typeof last.current == 'undefined') {
    //     last.current = e.target.scrollingElement.scrollTop;
    //   }

    //   // console.log('--', '-' + 46 / 100 * (getElementScrollFraction(e.target.scrollingElement) * 100), 46 / 100 * (getElementScrollFraction(e.target.scrollingElement) * 100))
    //   if (prev.current) {
    //     if (prev.current >= e.target.scrollingElement.scrollTop) {
    //       console.log('up', e.target.scrollingElement.scrollTop, last.current)
    //       ref.current.style.marginTop = '0px';
    //       prev.current = e.target.scrollingElement.scrollTop;
    //       if (last.current  >= e.target.scrollingElement.scrollTop) {
    //         // console.log('------------------')
    //         // last.current = e.target.scrollingElement.scrollTop
    //       };
    //       return;
    //     } else {
    //       if (!last.current) {
    //         // last.current = e.target.scrollingElement.scrollTop;
    //         // console.log('set last el', e.target.scrollingElement.scrollTop)
    //       }

    //       console.log('down', last.current, e.target.scrollingElement.scrollTop + 'px')
    //       if (Math.abs(last.current - e.target.scrollingElement.scrollTop) >= 46) {
    //         // return;
    //       }
    //       // last.current = e.target.scrollingElement.scrollTop;
    //       // ref.current.style.marginTop = -e.target.scrollingElement.scrollTop+ 'px';
    //       // ref.current.style.marginTop = (e.target.scrollingElement.scrollTop) >= 46 ? last.current - e.target.scrollingElement.scrollTop + 'px' : -Math.abs(e.target.scrollingElement.scrollTop) + 'px';
    //     }
    //   } else {
    //   }

    //   prev.current = e.target.scrollingElement.scrollTop;

    //   // console.log('-------------------', (e.target.scrollingElement.scrollTop) >= 46 ? -46 : -Math.abs(e.target.scrollingElement.scrollTop) + 'px')


    //   if (ref.current && ref.current) {
    //     // console.log('ref', ref.current)
    //     // ref.current.style.marginTop = (e.target.scrollingElement.scrollTop) >= 46 ? '-46px' : -Math.abs(e.target.scrollingElement.scrollTop) + 'px';
    //   }
    //   // setScrollSize(maxLogoOffset * scrollFraction)

    //   // }
    // })
  }, [])

  console.log('object', scroll)

  return (
    <div ref={ref} style={{
      // marginTop: `-${scroll}px`
    }} className={classNames(styles.smallHeader, styles.wrap)}>
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
