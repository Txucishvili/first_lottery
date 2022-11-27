import React from 'react'
import SwipeSlider from 'src/Shared/SwipeSlider'
import styles from '@/styles/components/mainSlider.module.scss';
import Image from 'next/image';

const SliderItem = ({ slide }) => {
  return <div style={{ width: '100%', height: '100%', position: 'relative' }}>
    <Image
      alt=' '
      width={1530}
      height={803}
      src={slide.src}
      layout='fill'
    />
  </div>
}

export default function MainSlider(props) {
  return (
    <div className={styles.mainSlider}>
      <SwipeSlider
        className="mainSlider"
        spaceBetween={250}
        initialSlide={0}
        slidesPerView={1}>
        {props.slides.map((slide, k) => {
          return <SliderItem key={k} slide={slide} />
        })}
      </SwipeSlider>
    </div>
  )
}
