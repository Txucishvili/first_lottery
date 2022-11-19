import React, { useEffect, useState } from 'react'
import { useClient, useScroll } from 'src/hooks';
import useWindowSize from 'src/hooks/useWindowSize';
import { isServer } from 'src/utils';
import styles from '../../styles/components/search.module.scss';
import ICON_SET from '../icons';
import { classNames } from '../utils/classnames';

export default function Search() {
 
  console.log('-------------')


  return (
    <div className={styles.searchArea}>
      <div className={styles.wrap}>
        <div className={styles.bg}></div>
        <div className={styles.inputWrap}>
          <input placeholder='ძებნა ბილეთის ან ტირაჟის ნომრით...' />
        </div>
        <div className={styles.btnWrap}>
          <button className={classNames(styles['btn--wrap'])}>
            <div className={styles['icon-area']}>
              {ICON_SET['SearchIcon']}
            </div>
            <div>ძებნა</div></button>
        </div>
      </div>
    </div>
  )
}
