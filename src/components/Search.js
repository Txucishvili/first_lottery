import React, { useEffect, useState } from 'react'
import { useClient, useScroll } from 'src/hooks';
import useWindowSize from 'src/hooks/useWindowSize';
import { isServer } from 'src/utils';
import styles from '../../styles/components/search.module.scss';
import ICON_SET from '../icons';
import { classNames } from '../utils/classnames';

export default function Search(props) {
  const {onChange, onActive} = props;

  useEffect(() => {
    _onActive(true)
  }, [])

  const _onChange = (e) => {
    onChange(e.target.value);
  }

  const _onActive = (e) => {
    onActive(e);
  }
  
  return (
    <div className={styles.searchArea}>
      <div className={styles.wrap}>
        <div className={styles.bg}></div>
        <div className={styles.inputWrap}>
          <input onChange={_onChange} placeholder='ძებნა ბილეთის ან ტირაჟის ნომრით...' />
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
