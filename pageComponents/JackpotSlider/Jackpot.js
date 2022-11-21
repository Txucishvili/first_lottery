/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import styles from './jackpot.module.scss'

export default function Jackpot() {

  return <div>
    <img src='/assets/slides/slider-1-2.png' />
  </div>
  
  return (true &&
    <div className={styles.container}>
      <div className={styles.textWrap}>
        <div className={styles.titleArea}>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="194px">
            <text id="test" x="4px" y="148px">ჯეკპოტი</text>
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
            <div className={styles.textHeadOne}>

              <svg width="250" height="100%" xmlns="http://www.w3.org/2000/svg">
                {/* <rect x="0" y="0"  fill="aquamarine" /> */}
                <text x="2px" y="85">მილიონი</text>
              </svg>

            </div>
            <div className={styles.textHeadTwo}>
              <svg width="250" height="68" xmlns="http://www.w3.org/2000/svg">
                {/* <rect x="0" y="0"  fill="aquamarine" /> */}
                <text x="2px" y="52">ლარი</text>
              </svg>
            </div>
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
