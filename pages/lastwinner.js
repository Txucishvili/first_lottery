import WinnerBlock from '@/components/WinnerBlock'
import React, { useRef } from 'react'
import SwipeSlider from 'src/Shared/SwipeSlider'
import { copyArray, isInt } from 'src/utils'
import { Swiper, SwiperSlide } from 'swiper/react'
import { WinnerListAPI } from '../src/API/index'
import LastWinnerFilter from 'pageComponents/LastWinners/LastWinnersFilter'
import { UserAvatar } from '@/components/UserAvatar'

const LastWinnerSlide = ({ list }) => {
  const ref = useRef();

  const onSlideChange = (e) => {
    if (e.progress == -0) {
      return;
    } else {
      e.setTranslate(-(e.slidesGrid.find((s, k) => k === e.activeIndex) + 40))
    }
  }

  const onResize = (e) => {
    e.update();
  }
  return <div className='md-container-fluid'>
    <div className='wrap'>
      <div className='titleArea pageTitle'>
        <h3>ბოლო გამარჯვებული</h3>
      </div>
      <div className="lastWinnerSwiperWrap">
        <Swiper
          ref={ref}
          modules={[]}
          navigation={false}
          // className={'listContentSwiper'}
          spaceBetween={0}
          initialSlide={2}
          slidesPerView={'auto'}
          centeredSlides={'auto'}
          resistanceRatio={0}
          freeMode={true}
          variant={'simple'}
          centerInsufficientSlides={true}
          breakpoints={{
            [385]: {
              slidesPerView: 'auto',
              centeredSlides: true
            },
          }}
          onSlideChange={onSlideChange}
          onResize={onResize}
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

export function getServerSideProps() {
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
