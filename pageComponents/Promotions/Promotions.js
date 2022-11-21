import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.scss'
import videoModalStyles from '@/styles/components/videoModal.module.scss'
import { SVGTextEl } from 'src/utils'
import CountdownComponent from '../CountDown'
import VideoContainer from 'pageComponents/Main/VideoContainer'
import ModalWrapper, { ModalBase } from 'src/Shared/Modal/ModalWrapper'

const VideoModal = (props) => {

  return <div className={videoModalStyles.videoModal}>
    <div className={videoModalStyles.wrap}>
      <div className={videoModalStyles.wrap}>

      </div>
    </div>
  </div>
}

const PromotionSection = (props) => {
  const [isOpen, setOpen] = useState(false);
  const jackpotNumber = '8 000 000 ';

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
            <SVGTextEl>
              ჯეკპოტი
            </SVGTextEl>
          </div>
          <div
            className={styles.textArea}
          // style={jackpotNumber.length > 7 ? {fontSize: 32} : {}} className={styles.textArea}
          >
            {/* <div className='example' style={{ position: 'absolute' }}>
              {jackpotNumber}₾
            </div> */}
            <SVGTextEl>
              {jackpotNumber}₾
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