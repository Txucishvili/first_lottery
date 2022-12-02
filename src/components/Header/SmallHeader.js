import React, { useEffect, useRef, useState } from 'react'
import styles from '../../../styles/components/smallHeader.module.scss'
import { classNames } from '../../utils/classnames'
import { useOutsideClick } from '../../hooks/useOutsideClick';
import Image from 'next/image';
import { ArrowSvg } from '../../icons';
import Link from 'next/link';
import LanguageSwitcher from '../LanguageSwitcher';
import { useAppContext } from 'src/store';
import { difference } from 'lodash';
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

  function difference(object, base) {
    function changes(object, base) {
      return _.transform(object, function(result, value, key) {
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
//     document.addEventListener('wheel', (e) => {

//       if (document.body.parentNode.scrollTop) {
//         console.log('e', e)
//       }
      
//       prev.current = e;
      
//       return
// // 
//       const logo = document.querySelector('.scroll-text');
//       const logoHeight = 46;
//       const viewHeight = window.innerHeight;
//       const maxLogoOffset = viewHeight - logoHeight;
//       const scrollFraction = getElementScrollFraction(e.target.scrollingElement);

//       var rect = e.target.scrollingElement.getBoundingClientRect()
//       var scrollHeight = e.target.scrollingElement.scrollHeight + (parseInt(rect.height) - rect.height)
//       var scrollWidth = e.target.scrollingElement.scrollWidth + (parseInt(rect.width) - rect.width)

//       console.log('maxLogoOffset*scrollFraction', rect, scrollHeight);

//       if ((maxLogoOffset * scrollFraction) >= 46) {
//         return
//       } else {
//         // console.log('-------------------', (maxLogoOffset * scrollFraction))

//       }
//       // if (maxLogoOffset*scrollFraction <= 46) {


//       if (ref.current && ref.current) {
//         // console.log('ref', ref.current)
//         ref.current.style.marginTop = '' + maxLogoOffset * scrollFraction + 'px';
//       }
//       // setScrollSize(maxLogoOffset * scrollFraction)

//       // }
//     })
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
