/* eslint-disable react/display-name */
import classNames from 'classnames'
import Image from 'next/image';
import React, { forwardRef } from 'react'
import IconWrap from '../../src/components/IconWrap';
import styles from './VideoContainer.module.scss';



const VideoContainer = forwardRef((props, ref) => {
  return (
    <div className={styles.divide}>
      <div ref={ref} className={styles.container}>
        <div className={classNames(styles.wrap)}>
          <div style={
            {
              // backgroundImage: 'url(/assets/images/video_wallpaper.png)'
            }
          } className={classNames(styles.bgArea)}>
            {/* <Image
              alt='Mountains'
              src={'/assets/images/video_wallpaper.png'}
              layout='fill'
              fill='layout'
            /> */}
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <Image
                alt='Last Winner'
                src={'/assets/images/video_wallpaper.png'}  
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
          <div onClick={() => props.onAction()} className={classNames(styles.playBtn, 'flxAll')}>
            <IconWrap name="Play" />
          </div>
        </div>
      </div>
    </div>
  )
})

export default VideoContainer