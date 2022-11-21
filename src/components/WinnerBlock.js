import classNames from 'classnames';
import React from 'react'
import { SVGTextEl } from 'src/utils';
import { useSwiper, useSwiperSlide } from 'swiper/react';
import styles from '../../styles/components/winnerblock.module.scss';
import { UserAvatar } from './UserAvatar';


export const TicketBlock = (props) => {
  return <div className={styles.ticketBlock}>
    <div className='container'>
      <div className={'ticketBlockWrap'}>
        <span className={'symbol'}>#</span>
        <span className={'number'}>{props.number}</span>
      </div>
    </div>
  </div>
}

export default function WinnerBlock({ isActive }) {
  // const swiper = useSwiper();
  // 
  // const swiperSlide = useSwiperSlide();
  // console.log('swiper', swiperSlide.isActive);



  return (
    <div className={styles.root}>
      <div className={'sliderWrapper'}>
        <div className={classNames('container', { 'activeBlock': isActive })}>
          <div className={'wrap'}>
            <div className='content'>
              <div className={'image'}>
                <UserAvatar>
                  <img src='/assets/images/avatar.png' />
                </UserAvatar>
              </div>
              <div className={'winNumber'}>
                <SVGTextEl>50 000 000</SVGTextEl>
              </div>
              <div className={'ticketNumber'}>
                <TicketBlock number='358-129-7' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export const SimpleBlock = ({ isActive }) => {
  return <div className={styles.winnerBlockItem}>
    {isActive.toString()}
  </div>
}
