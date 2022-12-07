import React, { useEffect, useRef, useState } from 'react'
import useFilter from 'src/hooks/useFilter'
import { useVirtualizer } from '@tanstack/react-virtual';
import DateRangePicker from 'src/Shared/DatePicker'
import DropDown, { DropContent, Toggler } from 'src/Shared/DropDown'
import Input from 'src/Shared/Input'
import ICON_SET from 'src/icons'
import Button from 'src/Shared/Button'
import { WinnerListAPI } from 'src/API';
import { format, getMonth, setMonth } from 'date-fns';
import IconWrap from '@/components/IconWrap';
import WinnerBlock, { TicketBlock } from '@/components/WinnerBlock';
import { numberWithSpaces, SVGTextEl } from 'src/utils';
import classNames from 'classnames';
import styles from './LastWinnersFilter.module.scss';
import { UserAvatar } from '@/components/UserAvatar';
import useWindowSize from 'src/hooks/useWindowSize';
import { AnimatePresence, motion, useAnimationControls, useScroll } from 'framer-motion';

const FilterToggler = ({ activeRange, isOpen, className, label, children, style }) => {
  // !!
  console.log('-  RangeToggler isOpen', isOpen)
  return <div style={style} className={classNames(className, 'rangeToggler')}>
    <div className='flx flxJSB flxAI'>
      <div className='labels'><div className='label'>{label}</div></div>
      <div className='content'>
        {children}
      </div>
      <div className='dropDown'>
        <IconWrap name='ArrowSvg' />
      </div>
    </div>
  </div>
}

const FilterItem = (props) => {
  return <div className={styles.filterItem}>
    <div className={'sliderWrapper'}>
      <div className={classNames('container')}>
        <div className={'wrap'}>
          <div className={'image'}>
            <UserAvatar name={props.name}>
              <img src='/assets/images/avatar.png' />
            </UserAvatar>
          </div>
          <div className={'winNumber'}>
            <SVGTextEl>{numberWithSpaces(props.winNumber)} ₾</SVGTextEl>

          </div>
          {/* {new Date(props.winningDate).getDay() + ' - ' + new Date(props.winningDate).toString()} */}
          <div className={'ticketNumber'}>
            <TicketBlock number='358-129-7' />
          </div>
        </div>
      </div>
    </div>
  </div>
}

const LastWinnerFilter = (props) => {
  const { list, filters, winnerFilters } = props;
  const inputRefMain = useRef();
  const dropRef = useRef();
  const calendarDrop = useRef();

  const [filterList, setFilterList] = useState(list.data);
  const { filteredList, setFilter, commit, reset, options } = useFilter({ list: filterList, filterOptions: filters });

  const [isOpen, setisOpen] = useState(false)
  const [isCalendarOpen, setCalendarOpen] = useState(false)

  const [inputValue, setInput] = useState('')
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [rangeFilter, setRangeFilter] = useState(winnerFilters[0]);
  const { width } = useWindowSize();

  useEffect(() => {
    setFilterList(WinnerListAPI.data);
    // console.log('object', WinnerListAPI.data)
  }, [])

  const searchFilter = (e) => {
    setFilter({ name: e.target.value });
  }

  const onRangeInput = (e) => {
    setFilter({ [`${e.target.name}_range`]: e.target.value });
    setRangeFilter({ ...rangeFilter, [e.target.name]: e.target.value })
  }

  const onItemClick = (e) => {
    setFilter({ from_range: e.from, to_range: e.to })
    dropRef.current.open(false);
    setRangeFilter(e)
  }

  const onReset = () => {
    inputRefMain.current.reset();
    setInput('')
    setStartDate(null);
    setEndDate(null);
    setRangeFilter(winnerFilters[0]);
    reset();
  }


  return <div className={'layout--wrap'}>
    {/* <DropDown
      portal={true}
      onChange={(e) => {
      }}
    >

      <Toggler className={'_toggler'}>
        <div>open</div>
      </Toggler>
      <DropContent className={'_content'}>
        <div>SomeContent</div>
      </DropContent>
    </DropDown>

    <DropDown
      variant='out'
      portal={!true}
      onChange={(e) => {
      }}
    >

      <Toggler>
        <div>open</div>
      </Toggler>
      <DropContent>
        <div>SomeContent</div>
      </DropContent>
    </DropDown> */}
    <div className='filterGrid'>

      <div className={classNames(styles.filterRow, 'row')}>
        <div style={{ fontSize: 16 }}
          className={classNames('col-sm-4 col-md-4 filterGrid--item', styles.filterInput, {

            'wide': !isOpen && !isCalendarOpen
          })}>
          <Input
            value={inputValue}
            ref={inputRefMain}
            onChange={searchFilter}
            iconPosition="bottom"
            variant={'outline'}
            size={'large'}
            full
            name="ticketId"
            placeholder='მოძებნე ტირაჟით ან ბილეთის ნომრით...'
            withIcon={ICON_SET.SearchIcon}
            withClearIcon={true}
          />
        </div>
        <div
          className={
            classNames('col-sm-4 col-md-4 filterGrid--item', {
              'wide': isOpen
            })
          }>
          <DropDown
            // fromEdge={width > 768}
            className={
              classNames('borderDropDown', {
                'variant--outer': width < 768,
                'variant--simple': width > 768,
              })
            }
            // portal={width > 768}
            name="____portal"
            ref={dropRef}
            isOpen={isOpen}
            disableToggle={true}
            onTogglerClick={(e) => {
              if (!isOpen) {
                setisOpen(true)
              }
              dropRef.current.open(true);
            }}
            onChange={(e) => {
              dropRef.current.open(e)
              setisOpen(e)
            }}
          >
            <Toggler className='wraps'>
              {width < 768
                ? <><AnimatePresence>
                  {!isOpen ? <motion.div
                    key="iconArea"
                    className='filterGrid--md flxAll'>
                    <IconWrap name="gel" />
                  </motion.div> : null}
                </AnimatePresence>
                  <AnimatePresence>
                    {isOpen ? <motion.div className={'filterGrid--xs'}
                      key="iconArea2"
                      initial={{
                        opacity: isOpen ? 1 : 0,
                        x: isOpen ? 0 : 100,
                      }}
                      animate={{
                        opacity: isOpen ? 1 : 0,
                        x: isOpen ? 0 : 100,
                      }}
                      exit={{
                        opacity: 0,
                        x: 100,
                      }}
                    >
                      <FilterToggler className={'filterGrid--xs'} label="მოგება:">
                        <div className='flx gap-12'>
                          <span>{rangeFilter.from ?? 0} - დან</span>
                          <span>{rangeFilter.to ?? 0} - მდე</span>
                        </div>
                      </FilterToggler>
                    </motion.div> : null}
                  </AnimatePresence></>
                : <FilterToggler className={'filterGrid--xs'} label="მოგება:">
                  {isOpen ? <div className='flx gap-24'>
                    <div className='flx flxAI gap-4'>
                      <div style={{ width: 88, height: 44, flexShrink: 0 }}>
                        <Input
                          value={rangeFilter.from}
                          onChange={onRangeInput}
                          name="from"
                          textAlign="center"
                          size="full"
                        />
                      </div>
                      <div style={{ flexShrink: 0 }}> - დან</div>
                    </div>
                    <div className='flx flxAI gap-4'>
                      <div style={{ width: 88, height: 44, flexShrink: 0 }}>
                        <Input
                          value={rangeFilter.to}
                          onChange={onRangeInput} name="to" textAlign="center" size="full" />
                      </div>
                      <div style={{ flexShrink: 0 }}> - მდე</div>
                    </div>
                  </div> : <div className='flx gap-12'>
                    <span>{rangeFilter.from ?? 0} - დან</span>
                    <span>{rangeFilter.to ?? 0} - მდე</span>
                  </div>}
                </FilterToggler>}

            </Toggler>
            <DropContent>
              <div className='borderDrop--portal'>
                {width < 768 ? <FilterToggler label="მოგება:" style={{ height: 64 }}>
                  <div className='flx gap-24'>
                    <div className='flx flxAI gap-4'>
                      <div style={{ width: 88, height: 44, flexShrink: 0 }}>
                        <Input
                          value={rangeFilter.from}
                          onChange={onRangeInput}
                          name="from"
                          textAlign="center"
                          size="full"
                        />
                      </div>
                      <div style={{ flexShrink: 0 }}> - დან</div>
                    </div>
                    <div className='flx flxAI gap-4'>
                      <div style={{ width: 88, height: 44, flexShrink: 0 }}>
                        <Input
                          value={rangeFilter.to}
                          onChange={onRangeInput} name="to" textAlign="center" size="full" />
                      </div>
                      <div style={{ flexShrink: 0 }}> - მდე</div>
                    </div>
                  </div>
                </FilterToggler> : null}

                <div className='list-menu'>
                  <div className="list-menu--wrap">
                    <ul className='list-menu--list'>
                      {winnerFilters.map((range, k) => {
                        return <li onClick={() => onItemClick(range)} className='list-menu--item gap-12' key={range.id}>
                          <span>{range.from} - დან</span>
                          <span>{range.to} - მდე</span>
                        </li>
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </DropContent>
          </DropDown>
        </div>


        <div
          className={classNames('col-sm-4 col-md-4 filterGrid--item', {
            'wide': isCalendarOpen
          })}>
          <DropDown
            name="____DropDown"
            position="bottom"
            align="center"
            resize
            variant="overflow"
            portal={false}
            ref={calendarDrop}
            onChange={(e) => {
              // console.log('object', e)
              setCalendarOpen(e)
            }}
            isOpen={false}
            className="borderDropDown variant--outer"
          >
            <Toggler className='wraps'>

              {width < 768
                ? <><AnimatePresence>
                  {!isCalendarOpen ? <motion.div
                    key="iconArea"
                    initial={{ opacity: !isCalendarOpen ? 1 : 0 }}
                    animate={{ opacity: !isCalendarOpen ? 1 : 0 }}
                    className='filterGrid--md flxAll'>
                    <IconWrap name="calendar" />
                  </motion.div> : null}
                </AnimatePresence><AnimatePresence>
                    {isCalendarOpen ? <motion.div className={'filterGrid--xs'}
                      key="iconArea2"
                      initial={{
                        opacity: !isCalendarOpen ? 1 : 0,
                        x: !isCalendarOpen ? 0 : 100,
                      }}
                      animate={{
                        opacity: isCalendarOpen ? 1 : 0,
                        x: isCalendarOpen ? 0 : 100,
                      }}
                      exit={{
                        opacity: 0,
                        x: 100,
                      }}
                    >
                      <FilterToggler label="პერიოდი:">
                        <div className='flx gap-12'>
                          {startDate ? <span>{format(startDate.getTime(), "dd-LL-yy", 'en')}  - დან</span> : null}
                          <span>{startDate ? '-' : 'აირჩიეთ თარიღი'}</span>
                          {endDate ? <span>{endDate ? format(endDate.getTime(), "dd-LL-yy", 'en') : null}  - მდე</span> : null}
                        </div>
                      </FilterToggler>
                    </motion.div> : null}
                  </AnimatePresence></>
                : <FilterToggler className={'filterGrid--xs'} label="პერიოდი:">
                  <div className='flx gap-12'>
                    {startDate ? <span>{format(startDate.getTime(), "dd-LL-yy", 'en')}  - დან</span> : null}
                    <span>{startDate ? '-' : 'აირჩიეთ თარიღი'}</span>
                    {endDate ? <span>{endDate ? format(endDate.getTime(), "dd-LL-yy", 'en') : null}  - მდე</span> : null}
                  </div>
                </FilterToggler>}

            </Toggler>

            <DropContent>
              <div className='dropertitle'>
                <span>აირჩიეთ თარიღი</span>
              </div>
              <div style={{ width: 616, height: 282 }}>

                <DateRangePicker
                  startDate={startDate}
                  renderCustomHeader={({
                    monthDate,
                    customHeaderCount,
                    decreaseMonth,
                    increaseMonth,
                  }) => (
                    <div className="react-datepicker__current-month--center">
                      <span >
                        {monthDate.toLocaleString("ka-GE", {
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  )}
                  endDate={endDate}
                  customInput={<div style={{ display: 'none' }}></div>}
                  onChange={(update) => {
                    setStartDate(update[0])
                    setEndDate(update[1])
                    setFilter({ winningDate_from: update[0] })
                    if (update[1]) {
                      setFilter({ winningDate_to: update[1] })
                    }
                  }}
                  isClearable
                  selectsRange={true}
                />
              </div>
              <div className='flxAll gap-30'>
                <Button
                  width={148}
                  height={42}
                  className={"fontMT"}
                  onClick={() => {
                    console.log('calendarDrop', calendarDrop)
                    calendarDrop.current.open(false);
                    setStartDate(null)
                    setEndDate(null)
                    setFilter({ winningDate_to: null, winningDate_from: null });
                  }}
                  variant="outline" size="normal" full type='button' >გაუქმება</Button>
                <Button
                  width={148}
                  className={"fontMT"}
                  height={42}
                  onClick={() => {

                  }} variant="secondary" size="normal" full type='button' >არჩევა</Button>

              </div>
            </DropContent>
          </DropDown>
        </div>
      </div>
      <div className={styles.filterList}>
        {filteredList.map((item, key) => {
          return <FilterItem key={key} {...item} />
        })}
        {filteredList.length <= 0 ? 'No Data to show' : ''}
      </div>
    </div>
    <br />
    <button onClick={() => {
      // inputRef.current.value = ''
      onReset()
    }}>reset</button>

  </div>
}

export default LastWinnerFilter;