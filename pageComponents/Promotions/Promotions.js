import classNames from 'classnames'
import React, { useState } from 'react'
import styles from '../../styles/Home.module.scss'
import { SVGTextEl } from 'src/utils'
import CountdownComponent from '../CountDown'
import VideoContainer from 'pageComponents/Main/VideoContainer'
import ModalWrapper, { CloseAction, ModalBase, SimpleModal } from 'src/Shared/Modal/ModalWrapper'
import Button from 'src/Shared/Button'
import IconWrap from '@/components/IconWrap'


const JackpotBlock = () => {
  return
}


const PromotionSection = (props) => {
  const [isOpen, setOpen] = useState(false);
  const jackpotNumber = '2 500 000';

  return <>
    <div className={styles.promotions}>
      <VideoContainer onAction={() => setOpen(true)} />
      <ModalWrapper
        onClose={() => setOpen(false)}
        open={isOpen}>

        <ModalBase
          variant="center"
        >

          <div className='flxAll' style={{ width: 825, height: 550 }}>
            Video Container
            {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BcJCNLgEsHs" title="YouTube video player" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
          </div>
        </ModalBase>

      </ModalWrapper>

      <div className={classNames(styles.blockWrap)}>

        <div className={(classNames(styles.block, styles.smallBlockWide))} style={{ backgroundColor: '#EDC522' }}>
          <div className={classNames(styles.blockHead, 'flxAll')}>
            <img src='/assets/images/jackpot-head.png' />
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