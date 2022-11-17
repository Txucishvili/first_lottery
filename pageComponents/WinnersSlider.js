import React, { useRef, useState } from 'react'
import styles from '../styles/Home.module.scss'
import SwipeSlider from 'src/Shared/SwipeSlider'
import IconWrap from '@/components/IconWrap'
import ModalWrapper, { CloseAction, ModalBase, SimpleModal } from 'src/Shared/Modal/ModalWrapper'
import styled from 'styled-components'
import { useSwiper } from 'swiper/react'
import { ArrowSvg } from 'src/icons'
import useWindowSize from 'src/hooks/useWindowSize'

const PlayButton = () => {
  return <IconWrap size="14" name="Play" />
}

const WinnerBlock = (props) => {

  return <div className={styles.winnerBlock}>
    <svg width="0" height="0">
      <defs>
        <clipPath id="myClip">
          <path d="M0,12.28A12,12,0,0,1,14.32.41c114.3,22.3,140.87,21,256.5-.21A12,12,0,0,1,285,12.08V394H0Z" fill="#D48B22" fillOpacity="0.04" />
        </clipPath>
      </defs>
    </svg>
    <div className={styles['winnerBlock--wrap']}>
      <div className={styles['ticketNumber']}>გათამაშება  #1.13</div>
      <div className={styles['winTitle']}>გათამაშებული</div>
      <div className={styles['winNumber']}>0</div>
      <div className={styles['status']}>მოგება</div>
      <div className={styles['amount']}>
        {!props.hideValue ? <p className={styles['amountNumber']}>{'1500$'}</p> : <div className={styles['line']}></div>}
      </div>
      <div onClick={() => {
        console.log('open Modal')
        props.setOpen(true)
      }} className={styles['playButton']}>
        <PlayButton />
        {/* <IconWrap size="42" name="PlayCircle" /> */}
      </div>
    </div>

  </div>
}

export default function WinnersSlider(props) {
  const [isOpen, setOpen] = useState(false)
  const { width } = useWindowSize();

  // console.log('width', width);

  return (
    <div className={styles.swipeList}>
      <div className='sectionTitle'>
        <span>გათამაშებები</span>
      </div>

      <SwipeSlider
        spaceBetween={26.5}
        initialSlide={2}
        slidesPerView={'auto'}
        centeredSlides={false}
        resistanceRatio={0}
        freeMode={true}
        variant={'simple'}
        breakpoints={{
          [385]: {
            slidesPerView: 'auto',
            centeredSlides: true

          },
          // [(((285 + 24) * 2) - 24 + 40)]: {
          //   slidesPerView: 2,
          //   spaceBetween: 24,
          // },
          // [(((285 + 24) * 3) - 24 + 40)]: {
          //   slidesPerView: 3,
          //   spaceBetween: 24,
          // },
          // [(((285 + 24) * 4) - 24 + 40)]: {
          //   slidesPerView: 4,
          //   spaceBetween: 24,
          // },
          // 1540: {
          //   slidesPerView: 5,
          //   spaceBetween: 24,
          // },
        }}
        className="mySwiper"
      >
        {
          props.winnings.map((c, k) => {
            return <WinnerBlock setOpen={() => {
              setOpen(true);
            }} hideValue={(k >= 2)} className={styles['swiper-slide']} key={k}>item</WinnerBlock>
          })
        }
      </SwipeSlider>


      <ModalWrapper
        onClose={() => setOpen(false)}
        open={isOpen}>

        <ModalBase
          variant="center"
        >

          <div className='flxAll'>
            video Container
            {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BcJCNLgEsHs" title="YouTube video player" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
          </div>
        </ModalBase>

      </ModalWrapper>
    </div>
  )
}
