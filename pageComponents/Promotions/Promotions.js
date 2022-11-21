import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.scss'
import videoModalStyles from '@/styles/components/videoModal.module.scss'
import { SVGTextEl } from 'src/utils'
import CountdownComponent from '../CountDown'
import VideoContainer from 'pageComponents/Main/VideoContainer'
import ModalWrapper, { ModalBase } from 'src/Shared/Modal/ModalWrapper'
import IconWrap from '@/components/IconWrap'
import Image from 'next/image'

const VideoModal = (props) => {

  return <div className={videoModalStyles.videoModal}>
    <div onClick={() => props.onAction('close')} className={videoModalStyles.closeBtn}>
      <IconWrap size="24" name='Close' />
    </div>
    <div className={videoModalStyles.wrap}>
      <div className={videoModalStyles.content}>
        {/* <div >
          <Image
            alt='Mountains'
            src={'/assets/images/video_wallpaper.png'}
            layout='fill'
            fill='layout'
          />
        </div> */}

        <div className={videoModalStyles.videoContainer}>
          <video controls src='https://thumbs.dreamstime.com/videothumb_large21171/211712346.mp4'></video>
        </div>

        <div className={classNames(videoModalStyles.bottomBar, 'flx', 'flxJC flxAI')}>
          <span className={videoModalStyles.bottomTitle}>გათამაშება  #1.12</span>
          <span className={classNames(videoModalStyles.read, 'toRight')}>
            სრულიად ნახვა
          </span>
        </div>
      </div>
    </div>
  </div>
}

// language and font depend (only GE)
const str = 'ჯეკპოტი';

const PromotionSection = (props) => {
  const [isOpen, setOpen] = useState(false);
  const { jackpotDetails } = props;

  return <>
    <div className={styles.promotions}>
      <VideoContainer onAction={() => setOpen(true)} />
      <ModalWrapper
        onClose={() => setOpen(false)}
        open={isOpen}>
        <ModalBase variant="center" >
          <VideoModal />
        </ModalBase>

      </ModalWrapper>

      <div className={classNames(styles.blockWrap)}>

        <div className={(classNames(styles.block, styles.smallBlockWide))}>
          <div className={classNames(styles.blockHead, 'flxAll')}>
          <svg viewBox={`0 0 ${str.length * 74} 136`}>
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
                {str}
              </text>
            </svg>
          </div>
          <div
            className={styles.textArea}>
            {/* <div className='example' style={{ position: 'absolute' }}>
              {jackpotNumber}₾
            </div> */}
            <SVGTextEl>
              {jackpotDetails.amount ?? 0}₾
            </SVGTextEl>
          </div>
        </div>

        <div className={(classNames(styles.block, styles.smallBlock))}>
          <div className={styles.timeBlockTitle}>
            გათამაშებამდე დარჩენილია
          </div>
          <CountdownComponent />
        </div>
      </div>
    </div>
  </>
}
export default PromotionSection;