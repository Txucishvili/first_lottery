import WinnerBlock from '@/components/WinnerBlock'
import React, { useEffect, useRef, useState } from 'react'
import SwipeSlider from 'src/Shared/SwipeSlider'
import { copyArray, isInt } from 'src/utils'
import { Swiper, SwiperSlide } from 'swiper/react'
import { WinnerListAPI } from '../src/API/index'
import LastWinnerFilter from 'pageComponents/LastWinners/LastWinnersFilter'
import { UserAvatar } from '@/components/UserAvatar'

const LastWinnerSlide = ({ list }) => {
  const ref = useRef();

  const onSlideChange = (e) => {
    console.log('object', e.swipeDirection == 'next')
    if (!e.swipeDirection) {
      return;
    } else {

      if (e.swipeDirection == 'next') {
        // e.setTranslate(-(e.slidesGrid.find((s, k) => k === e.activeIndex) + 40))
        return;
      } else {
        // e.setTranslate(-(e.slidesGrid.find((s, k) => k === e.activeIndex) + 40))
      }

    }
  }

  const onResize = (e) => {
    e.update();
  }

  const [translate, setTranslate] = useState(null);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    // console.log('translate', ref.current)
    if (swiper) {
      // swiper.setTranslate(translate);
    }
    // ref.current.firstChild.style.transform = `translate3d(${translate}, 0px 0px)`
    return () => {

    }
  }, [swiper, translate])

  const onSlide = (_swiper) => {
    const maxWidth = Math.max(..._swiper.slides.map((slide) => slide.clientWidth));
    const minWidth = Math.min(..._swiper.slides.map((slide) => slide.clientWidth));
    const divide = ((maxWidth - minWidth) / 2);

    ref.current.firstChild.style.transform = `translate3d(${_swiper.translate  - divide}px, 0px, 0px)`
    // console.log('-------', swiper.translate, swiper.slidesGrid[swiper.activeIndex])

    if (!_swiper.touchEventsData.isMoved) {
      // console.log('-end', _swiper.slidesGrid[_swiper.activeIndex])
      ref.current.firstChild.style.transform = `translate3d(${(_swiper.slidesGrid[_swiper.activeIndex] < 0 ? Math.abs(_swiper.slidesGrid[_swiper.activeIndex]) - divide : -Math.abs(_swiper.slidesGrid[_swiper.activeIndex]) - divide )}px, 0px, 0px)`
    }

  };

  return <div className='md-container-fluid_x'>
    <div className='wrap'>
      <div className='titleArea pageTitle'>
        <h3>ბოლო გამარჯვებული</h3>
      </div>
      <div className="lastWinnerSwiperWrap">
        <Swiper
          style={{
          }}
          ref={ref}
          modules={[]}
          navigation={false}
          // className={'listContentSwiper'}
          spaceBetween={0}
          initialSlide={0}
          slidesPerView={'auto'}
          centeredSlides={true}
          resistanceRatio={0}
          // freeMode={true}
          centerInsufficientSlides={true}
          breakpoints={{
            [385]: {
              slidesPerView: 'auto',
              centeredSlides: true
            },
          }}
          freeMode={!true}
          // onSlideChange={onSlideChange}
          onResize={onResize}
          watchSlidesProgress={true}
          virtualTranslate={true}
          hashNavigation={true}
          onSlideChange={onSlide}
          onProgress={onSlide}
          onBeforeInit={(_swiper) => {
            console.log('[onBeforeInit]', _swiper.activeIndex)
          }}
          onSwiper={(_swiper) => {
            setSwiper(_swiper);
            const maxWidth = Math.max(..._swiper.slides.map((slide) => slide.clientWidth));
            const minWidth = Math.min(..._swiper.slides.map((slide) => slide.clientWidth));
            const divide = ((maxWidth - minWidth) / 2) || 40;
            console.log('[onSwiper]', _swiper.activeIndex)
            _swiper.el.firstChild.style.transform = `translate3d(${_swiper.translate - divide}px, 0px, 0px)`

            // swiper.setTranslate(swiper.slidesGrid[swiper.activeIndex])
          }}
        >
          {list.map((c, k) => {
            return <SwiperSlide key={k}>
              {({ isActive }) => {
                return <WinnerBlock isActive={isActive} />
              }}
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </div>
  </div>
}


const winningRangeValues = [
  [0, 100],
  [100, 10000],
  [10000, 50000],
  [50000, 100000],
  [100000, 500000],
].map((range, k) => {
  return {
    id: k,
    from: range[0],
    to: range[1]
  }
})

const filters = {
  from_range: {
    value: '',
    targetField: 'winNumber',
    condition: '{{winNumber}} > {{value}}',
    filter: (target, field) => {
      const targetId = isInt(target.id) ? parseInt(target.id) : target.id;
      const value = isInt(field.value) ? parseInt(field.value) : field.value;

      return target.winNumber > value;
    }
  },
  to_range: {
    value: '',
    targetField: 'winNumber',
    condition: '{{winNumber}} < {{value}}',
    filter: (target, field) => {
      const targetId = isInt(target.id) ? parseInt(target.id) : target.id;
      const value = isInt(field.value) ? parseInt(field.value) : field.value;
      return target.winNumber < value;
    }
  },
  name: {
    value: '',
    targetField: 'name',
    condition: '{{name}}.includes({{value}})',
    filter: (target, field) => {
      return target.name.includes(field.value);
    }
  },
  winningDate_from: {
    value: '',
    targetField: 'winningDate',
    condition: '{{name}}.includes({{value}})',
    filter: (target, field) => {
      if (field.value) {
        return new Date(field.value).getTime() <= new Date(target.winningDate).getTime()
      }
      return true;
    }
  },
  winningDate_to: {
    value: '',
    targetField: 'winningDate',
    condition: '{{name}}.includes({{value}})',
    filter: (target, field) => {

      if (field.value) {
        return new Date(target.winningDate).getTime() <= new Date(field.value).getTime()
      }
      return true;

    }
  }
}

export default function LastWinnerPage(pageProps) {
  return (
    <div className='layout'>
      <LastWinnerSlide list={pageProps.sliderItems} />
      <div className={'filterWrapBg'}>
        <LastWinnerFilter winnerFilters={winningRangeValues} filters={filters} list={pageProps.listData} />
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  // const formatedList = copyArray(10, CasinosList.data).map((item) => {
  //   const { shared_content, ...obj } = item;
  //   return {
  //     ...obj,
  //     ...shared_content
  //   }
  // })

  return {
    props: {
      sliderItems: Array(20).fill(null),
      listData: WinnerListAPI
    }
  }
}
