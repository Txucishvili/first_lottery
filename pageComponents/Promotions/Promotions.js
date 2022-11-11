import classNames from 'classnames'
import React, { useState } from 'react'
import styles from '../../styles/Home.module.scss'
import { SVGTextEl } from 'src/utils'
import CountdownComponent from '../CountDown'
import VideoContainer from 'pageComponents/Main/VideoContainer'
import ModalWrapper, { CloseAction, ModalBase, SimpleModal } from 'src/Shared/Modal/ModalWrapper'
import Button from 'src/Shared/Button'
import IconWrap from '@/components/IconWrap'


const PromotionSection = (props) => {
  const [isOpen, setOpen] = useState(false);

  return <>
    <div className='flx flxCol gap-28'>
      <VideoContainer onAction={() => setOpen(true)} />
      <ModalWrapper
        onClose={() => setOpen(false)}
        open={isOpen}>

        <ModalBase
          variant="center"
        >

          <div style={{ width: 825, height: 550 }}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BcJCNLgEsHs" title="YouTube video player" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </ModalBase>

      </ModalWrapper>

      <div className={classNames(styles.blockWrap, 'gap-38')}>
        <div className={(classNames(styles.block, styles.smallBlockWide))} style={{ backgroundColor: '#EDC522' }}>
          <div className={classNames(styles.blockHead, 'flxAll divide-32')}>
            <img src='/assets/images/jackpot-head.png' />
          </div>
          <div className='divide-16'>
            <SVGTextEl height={92}>
              - 000₾
            </SVGTextEl>
          </div>
        </div>
        <div className={(classNames(styles.block, styles.smallBlock))}>
          <div className={styles.title}>
            გათამაშებამდე დარჩენილია
          </div>
          <CountdownComponent />
        </div>
      </div>
    </div>
  </>
}
export default PromotionSection;