/* eslint-disable react/display-name */
import React, { forwardRef, useState } from 'react'
import { Swiper, SwiperSlide as SwipeItem } from 'swiper/react';
import classNames from 'classnames';
import { ArrowSvg } from 'src/icons';
import { Navigation } from 'swiper';
import customSwiperStyle from '@/styles/components/swiperSlider.module.scss'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// export function SliderControlsWrap({ next, prev, onAction, variant }) {

//   return (
//     <div>
//       <div onClick={() => onAction && onAction(-1)} className={classNames(customSwiperStyle.arrowBtn, 'flxAll', customSwiperStyle.prev, {
//         [customSwiperStyle.disabled]: !next,
//         [customSwiperStyle[variant]]: customSwiperStyle[variant] && variant
//       })}>
//         <div className={customSwiperStyle.iconWrap}>
//           <ArrowSvg />
//         </div>
//       </div>

//       <div onClick={() => onAction && onAction(+1)} className={classNames(customSwiperStyle.arrowBtn, 'flxAll', customSwiperStyle.next, {
//         [customSwiperStyle.disabled]: !prev,
//         [customSwiperStyle[variant]]: customSwiperStyle[variant] && variant
//       })}>
//         <div className={customSwiperStyle.iconWrap}>
//           <ArrowSvg />
//         </div>
//       </div>
//     </div>
//   )
// }



const SwipeSlider = forwardRef(
  (props, ref) => {
    const { variant = 'shadow', children } = props;
    const prevRef = React.useRef();
    const nextRef = React.useRef();
    const swiperRef = React.useRef();
    const [swiper, setSwiper] = useState();
    const [state, setstate] = useState(0);
    const _childrens = [].concat(children);

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

    return <div className={customSwiperStyle.swiperWrapper}>
      <div className={customSwiperStyle.arrowWrap}>
        <div onClick={() => swiper && swiper.slidePrev()} className={classNames(customSwiperStyle.arrowBtn, 'flxAll', customSwiperStyle.prev, {
          [customSwiperStyle.disabled]: swiper && swiper.realIndex == 0,
          [customSwiperStyle[variant]]: customSwiperStyle[variant] && variant
        })} ref={prevRef}>
          <div className={customSwiperStyle.iconWrap}>
            <ArrowSvg />
          </div>
        </div>

        <div onClick={() => swiper && swiper.slideNext()} className={classNames(customSwiperStyle.arrowBtn, 'flxAll', customSwiperStyle.next, {
          [customSwiperStyle.disabled]: swiper && swiper.isEnd,
          [customSwiperStyle[variant]]: customSwiperStyle[variant] && variant
        })} ref={nextRef}>
          <div className={customSwiperStyle.iconWrap}>
            <ArrowSvg />
          </div>
        </div>
      </div>

      <Swiper
        modules={props.modules ?? [Navigation]}
        style={props.style ?? { overflow: 'visible' }}
        navigation={false}
        updateOnWindowResize
        observer
        observeParents
        initialSlide={Math.floor(_childrens.length / 2)}
        onSwiper={(e) => {
          setSwiper(e);
          props.onSwiper && props.onSwiper(e);
        }}
        onSlideChange={(w) => {
          setstate(w.realIndex)
          return w;
        }}
        {...props}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      >

        {[].concat(children).map((c, k) => {
          return <SwipeItem key={k}>{c}</SwipeItem>
        })}

      </Swiper>
    </div>
  }
)

export default SwipeSlider