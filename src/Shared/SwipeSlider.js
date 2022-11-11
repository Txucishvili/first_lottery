import React, { useState } from 'react'
import { Swiper, SwiperSlide as SwipeItem } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import classNames from 'classnames';
import styles from '@/styles/components/mainSlider.module.scss'
import IconWrap from '@/components/IconWrap';
import { ArrowSvg } from 'src/icons';
import { Navigation } from 'swiper';

const SwipeSlider = (props) => {
  const { variant = 'shadow', children } = props;
  const prevRef = React.useRef();
  const nextRef = React.useRef();
  const swiperRef = React.useRef();
  const [swiper, setSwiper] = useState();
  const [state, setstate] = useState(0);
  const _childrens = [].concat(children);
  // console.log('object', children)

  React.useEffect(() => {
    if (swiper) {

      // console.log("Swiper instance:", swiper);
      // swiper.params.navigation.prevEl = prevRef.current;
      // swiper.params.navigation.nextEl = nextRef.current;
      // swiper.navigation.init();
      // swiper.navigation.update();
      // setstate(swiper.realIndex)

    }
  }, [swiper]);

  // console.log('swiper.realIndex', props, state)
  return <Swiper
    modules={props.modules ?? [Navigation]}
    style={props.style ?? { overflow: 'visible' }}
    navigation={false}
    updateOnWindowResize
    observer
    observeParents
    initialSlide={Math.floor(_childrens.length / 2)}
    onSwiper={(e) => {
      setSwiper(e)
      // console.log('setSwiper', setSwiper);
    }}
    onSlideChange={(w) => {
      setstate(w.realIndex)
      return w;
    }}
    {...props}
  // pagination={{ clickable: true }}
  // scrollbar={{ draggable: true }}
  >
    <div onClick={() => swiper && swiper.slidePrev()} className={classNames(styles.arrowBtn, 'flxAll', styles.prev, {
      [styles.disabled]: state == 0,
      [styles[variant]]: styles[variant] && variant
    })} ref={prevRef}>
      <div className={styles.iconWrap}>
        <ArrowSvg />
      </div>
    </div>
    {[].concat(children).map((c, k) => {
      return <SwipeItem key={k}>{c}</SwipeItem>
    })}
    <div onClick={() => swiper && swiper.slideNext()} className={classNames(styles.arrowBtn, 'flxAll', styles.next, {
      [styles.disabled]: [].length - 1 == state,
      [styles[variant]]: styles[variant] && variant
    })} ref={nextRef}>
      <div className={styles.iconWrap}>
        <ArrowSvg />
      </div>
    </div>
  </Swiper>
}

export default SwipeSlider