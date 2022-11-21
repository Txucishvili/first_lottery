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

    <div className={styles.wiinerBlockBg}>
      <svg width="358" height="464" viewBox="0 0 358 464" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_640_1082)">
          <path d="M36.5 48.6064C36.5 41.0441 43.4584 35.3793 50.8824 36.8192C165.11 58.9734 191.706 57.715 307.277 36.612C314.654 35.2649 321.5 40.9167 321.5 48.4161V416C321.5 422.627 316.127 428 309.5 428H48.5C41.8726 428 36.5 422.627 36.5 416V48.6064Z" fill="white" fillOpacity="0.04" shapeRendering="crispEdges" />
        </g>
        <defs>
          <filter id="filter0_d_640_1082" x="0.5" y="0.412598" width="357" height="463.587" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="18" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_640_1082" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_640_1082" result="shape" />
          </filter>
        </defs>
      </svg>

    </div>
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
        spaceBetween={24}
        initialSlide={2}
        slidesPerView={'auto'}
        centeredSlides={true}
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
