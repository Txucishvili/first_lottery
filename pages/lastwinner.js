import WinnerBlock from '@/components/WinnerBlock'
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import useFilter from 'src/hooks/useFilter'
import SwipeSlider from 'src/Shared/SwipeSlider'
import { copyArray, isInt } from 'src/utils'
import { EffectCreative } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CasinosList, WinnerListAPI } from '../src/API/index'
import { DateRangePimport } from 'date-fns/subDays';
import subDays from 'date-fns/subDays';
import { useVirtualizer } from '@tanstack/react-virtual';
import DateRangePicker from '@/components/DateRangePicker'
import DropDown, { DropContent, Toggler } from '@/components/DropDown'
import Input from 'src/Shared/Input'
import ICON_SET from 'src/icons'
import { useOutsideClick } from 'src/hooks/useOutsideClick'
import Button from 'src/Shared/Button'
import LastWinnerFilter from 'pageComponents/LastWinners/LastWinnersFilter'


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
  return <div className='containers'>
    <div className='wrap'>
      <div className='titleArea pageTitle'>
        <h3>ბოლო გამარჯვებული</h3>
      </div>
      <div className="listContentWrap">
        <Swiper
          ref={ref}
          modules={[]}
          className={'listContent'}
          style={{ overflow: 'hidden', padding: ' 0' }}
          slidesPerView={'auto'}
          spaceBetween={0}
          centeredSlides={true}
          initialSlide={2}
          freeMode={true}
          onSlideChange={onSlideChange}
          onResize={onResize}
        >
          {list.map((c, k) => {
            return <SwiperSlide className='appSwiper' key={k}>
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
    targetField: 'id',
    condition: '{{id}} > {{value}}',
    filter: (target, field) => {
      const targetId = isInt(target.id) ? parseInt(target.id) : target.id;
      const value = isInt(field.value) ? parseInt(field.value) : field.value;

      return targetId > value;
    }
  },
  to_range: {
    value: '',
    targetField: 'id',
    condition: '{{id}} < {{value}}',
    filter: (target, field) => {
      const targetId = isInt(target.id) ? parseInt(target.id) : target.id;
      const value = isInt(field.value) ? parseInt(field.value) : field.value;
      return targetId < value;
    }
  },
  name: {
    value: '',
    targetField: 'name',
    condition: '{{name}}.includes({{value}})',
    filter: (target, field) => {
      return target.name.includes(field.value);
    }
  }
}

export default function LastWinnerPage(pageProps) {
  return (
    <div className='layout--wrap'>
      <LastWinnerSlide list={pageProps.sliderItems} />
      <LastWinnerFilter winnerFilters={winningRangeValues} filters={filters} list={pageProps.listData} />
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