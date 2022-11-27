import IconWrap from '@/components/IconWrap'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import videoModalStyles from '@/styles/components/videoModal.module.scss'
import classNames from 'classnames'

export default function VideoModal(props) {
  const { videoUrl, number, status, bottom = true } = props;
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && canvasRef.current) {
      // let context = canvasRef.current.getContext('2d');
      // const updateCanvas = () => {
      //   context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

      //   window.requestAnimationFrame(updateCanvas);
      // }

      // console.log('videoRef', videoRef)
      // videoRef.current.addEventListener('play', () => {
      //   console.log('on Play');


      //   requestAnimationFrame(updateCanvas);

      // })
      // videoRef.current.addEventListener('pause', () => {
      //   console.log('on Pause')
      // })
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removEventListener('play', () => {
          console.log('on Play')
        });
        videoRef.current.removEventListener('pause', () => {
          console.log('on Play')
        })
      }
    }
  }, [videoRef, canvasRef])

  return <div className={videoModalStyles.videoModalWrap}>
    <div className={videoModalStyles.videoModal}>
      <div onClick={() => props.onAction('close')} className={videoModalStyles.closeBtn}>
        <IconWrap size="24" name='Close' />
      </div>
      <div className={videoModalStyles.wrap}>
        <div className={videoModalStyles.canvasWrap}>
          <canvas ref={canvasRef} />
        </div>
        <div className={videoModalStyles.content}>
          {/* <div >
          <Image
            alt='Mountains'
            src={'/assets/images/video_wallpaper.png'}
            layout='fill'
            fill='layout'
          />
        </div> */}

          <div className={videoModalStyles.videoContainerWrap}>
            <div className={videoModalStyles.videoContainer}>
              <video ref={videoRef} controls src={videoUrl}></video>
            </div>
          </div>

          {bottom ? <div className={classNames(videoModalStyles.bottomBar, 'flx', 'flxJC flxAI')}>
            <span className={videoModalStyles.icon}>
              <IconWrap name="Youtube" size="28" />
            </span>
            <span className={videoModalStyles.bottomTitle}>გათამაშება  #{number}</span>
            <span className={classNames(videoModalStyles.read, 'toRight')}>
              <Link href="/video-history" prefetch={true}>
                ყველას ნახვა
              </Link>
            </span>
          </div> : null}
        </div>
      </div>
    </div>
  </div>
}