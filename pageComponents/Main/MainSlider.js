import Jackpot from 'pageComponents/JackpotSlider/Jackpot'
import React from 'react'
import SwipeSlider from 'src/Shared/SwipeSlider'
import Swiper from 'swiper'
import styles from '@/styles/components/mainSlider.module.scss';

export default function MainSlider(props) {
  return (
    <div className={styles.mainSlider}>
      <SwipeSlider
        className="mainSlider"
        spaceBetween={250}
        initialSlide={0}
        slidesPerView={1}>
        {props.slides.map((c, k) => {
          return <Jackpot key={k} src={c.src} />
        })}
      </SwipeSlider>
    </div>
  )
}
