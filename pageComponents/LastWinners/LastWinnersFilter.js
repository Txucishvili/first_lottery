import React, { useEffect, useRef, useState } from 'react'
import useFilter from 'src/hooks/useFilter'
import { useVirtualizer } from '@tanstack/react-virtual';
import DateRangePicker from '@/components/DateRangePicker'
import DropDown, { DropContent, Toggler } from '@/components/DropDown'
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


const RangeToggler = ({ activeRange, isOpen, label, children }) => {
  // !!
  // console.log('RangeToggler isOpen', isOpen)
  return <div className='rangeToggler'>
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

  const [inputValue, setInput] = useState('')
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [rangeFilter, setRangeFilter] = useState(winnerFilters[0]);

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
    console.log('------------------')
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


  return <div>
    {/* <DropDown
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
    <div className='grid'>

      <div className={classNames(styles.filterRow, 'row')}>
        <div style={{ fontSize: 16 }} 
        className={classNames('col-sm-12 col-md-4', styles.filterInput)}>
          <Input
            value={inputValue}
            ref={inputRefMain}
            onChange={searchFilter}
            iconPosition="bottom"
            variant={'outline'}
            size={'large'}
            name="ticketId"
            placeholder='მოძებნე ტირაჟით ან ბილეთის ნომრით...'
            withIcon={ICON_SET.SearchIcon}
            withClearIcon={true}
          />
        </div>
        <div className='col-sm-12 col-md-4'>
          <DropDown
            className="borderDrop"
            portal={true}
            ref={dropRef}
            isOpen={isOpen}
            disableToggle
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

            <Toggler>
              <RangeToggler label="მოგება:">
                {isOpen ?
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
                  : <div className='flx gap-12'>
                    <span>{rangeFilter.from ?? 0} - დან</span>
                    <span>{rangeFilter.to ?? 0} - მდე</span>
                  </div>}
              </RangeToggler>
            </Toggler>
            <DropContent>
              <div className='borderDrop--portal'>
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
        <div className='col-sm-12 col-md-4'>
          <DropDown
            ref={calendarDrop}
            className="borderDrop borderDrop--outer"
          >
            <Toggler>
              <RangeToggler label="პერიოდი:">
                <div className='flx gap-12'>
                  {startDate ? <span>{format(startDate.getTime(), "dd-LL-yy", 'en')}  - დან</span> : null}
                  <span>{startDate ? '-' : 'აირჩიეთ თარიღი'}</span>
                  {endDate ? <span>{endDate ? format(endDate.getTime(), "dd-LL-yy", 'en') : null}  - მდე</span> : null}

                </div>
              </RangeToggler>
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