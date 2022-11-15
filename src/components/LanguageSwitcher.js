import React from 'react'
import styles from '@/styles/components/languageSwitcher.module.scss'
import { useOutsideClick } from '../hooks/useOutsideClick';
import Image from 'next/image';
import { ArrowSvg } from '../icons';
import IconWrap from './IconWrap';


const LanguageList = [
  {
    name: 'Georgian',
    slug: 'ge',
    flag: 'img'
  }, {
    name: 'English',
    slug: 'um',
    flag: 'img'
  }, {
    name: 'Spain',
    slug: 'un',
    flag: 'img'
  },
]

export default function LanguageSwitcher(props){
  const { active = LanguageList[0] } = props;
  const { ref, isOpen, setIsOpen } = useOutsideClick();

  return <div>
    <div ref={ref} className={styles.languageSwitcher}>
      <div onClick={() => setIsOpen(!isOpen)} className={styles['languageSwitcher--droper']} >
        <div className={styles['languageSwitcher--name']}>
          <Image alt={active.slug} height={18} width={22} src={`https://flagicons.lipis.dev/flags/4x3/${active.slug}.svg`} />
        </div>
        <div className={styles['languageSwitcher--arrow']}>
          <IconWrap name={'ArrowSvg'} />
        </div>
      </div>
      {isOpen && <div className={styles.dropArea}>dropicon</div>}
    </div>
  </div>
}
