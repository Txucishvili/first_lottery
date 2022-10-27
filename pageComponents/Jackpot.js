import Image from 'next/image'
import React from 'react'
import styles from './jackpot.module.scss'

export default function Jackpot() {
  return (
    <div className={styles.container}>
      <div className={styles.textWrap}>
        <div className={styles.titleArea}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400" height="22">

<text id="test" y="0"><tspan x="0" dy="20">Braams in Gieten. Dat stelt de </tspan></text>

</svg>

        </div>
        <div className={styles.giftArea}>
          <div className={styles.imageArea}>
            <img
              alt='giftbox'
              src='/assets/images/num_3.png'
            />
          </div>
          <div className={styles.textArea}>
            <h4>მილიონი</h4>
            <h5>ლარია </h5>
          </div>
        </div>
      </div>
      <div className={styles.giftBox}>
        <img
          alt='giftbox'
          src='/assets/images/gift-box.png'
        />
      </div>
    </div>
  )
}
