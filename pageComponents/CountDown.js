import classNames from "classnames";
import React, { useEffect, useState } from "react";
import styles from '../styles/Home.module.scss'

const { SVGTextEl } = require("src/utils");

var countDownDate = new Date("Dec 31, 2022 15:37:25").getTime();

const getDistance = () => countDownDate - new Date().getTime();

const CountdownComponent = () => {
  const [days, setDays] = useState('- -');
  const [hours, setHours] = useState('- -');
  const [minutes, setMinutes] = useState('- -');
  const [seconds, setSeconds] = useState('- -');

  useEffect(() => {
    const interval = setInterval(() => {
      var _now = new Date().getTime();

      // Find the distance between now and the count down date

      setDays(Math.floor(getDistance() / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((getDistance() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((getDistance() % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((getDistance() % (1000 * 60)) / 1000));
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [])


  return <>
    <div className={classNames(styles.timeBlockWrap, 'flx')}>
      <div className={'flx flxCol flxAll'}>
        <div className={styles.timeBlock}>
          <SVGTextEl height={'100%'}>
            {days}
          </SVGTextEl>
        </div>
        <div className={styles.timeBlockLabel}>დღე</div>
      </div>
      <div className={'flx flxCol flxAll'}>
        <div className={styles.timeBlock}>
          <SVGTextEl height={'100%'}>
            {hours}
          </SVGTextEl>
        </div>
        <div className={styles.timeBlockLabel}>საათი</div>

      </div>
      <div className={'flx flxCol flxAll'}>
        <div className={styles.timeBlock}>
          <SVGTextEl height={'100%'}>
            {minutes}
          </SVGTextEl>
        </div>
        <div className={styles.timeBlockLabel}>წუთი</div>

      </div>
      <div className={'flx flxCol flxAll'}>
        <div className={styles.timeBlock}>
          <SVGTextEl height={'100%'}>{seconds}</SVGTextEl>
        </div>
        <div className={styles.timeBlockLabel}>წამი</div>

      </div>
    </div>
  </>
}
export default CountdownComponent;