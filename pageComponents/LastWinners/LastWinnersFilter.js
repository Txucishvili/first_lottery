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


const RangeToggler = ({ activeRange, isOpen, label, children }) => {
  console.log('RangeToggler isOpen', isOpen)
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

const LastWinnerFilter = (props) => {
  const { list, filters, winnerFilters } = props;
  const inputRefMain = useRef();
  const dropRef = useRef();
  const parentRef = useRef()
  const [filterList, setFilterList] = useState([]);
  const { filteredList, setFilter, commit, reset, options } = useFilter({ list: filterList, filterOptions: filters });
  const rowVirtualizer = useVirtualizer({
    count: filterList.length || 20,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
    overscan: 5,
  });

  const [isOpen, setisOpen] = useState(false)

  const [inputValue, setInput] = useState('')
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [rangeFilter, setRangeFilter] = useState(winnerFilters[0]);

  useEffect(() => {
    setFilterList(WinnerListAPI.data);
    console.log('object', WinnerListAPI.data)
  }, [])

  useEffect(() => {
    console.log('----- filteredList', filteredList);
  }, [filteredList])

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


  return <div>
    <div className='grid-container'>
      <div className='grid-row'>
        <div style={{ fontSize: 16 }} className='col-md-3'>
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
        <div className='col-md-3'>
          <DropDown
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
                  : <div>
                    <span>{rangeFilter.from ?? 0} - დან</span>
                    <span>{rangeFilter.to ?? 0} - მდე</span>
                  </div>}
              </RangeToggler>
            </Toggler>
            <DropContent>
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
            </DropContent>
          </DropDown>
        </div>
        <div className='col-md-3'>
          <DropDown variant="out">
            <Toggler>
              <RangeToggler label="პერიოდი:">
                <div className='flx gap-12'>
                  {startDate ? <span>{format(startDate.getTime(), "dd-LL-yy", 'en')}  - დან</span> : null}
                  <span>-</span>
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
                      {/* <button
                        aria-label="Previous Month"
                        className={
                          "react-datepicker__navigation react-datepicker__navigation--previous"
                        }
                        style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
                        onClick={decreaseMonth}
                      >
                        <span
                          className={
                            "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                          }
                        >
                          {"<"}
                        </span>
                      </button> */}
                      <span >
                        {monthDate.toLocaleString("ka-GE", {
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      {/* <button
                        aria-label="Next Month"
                        className={
                          "react-datepicker__navigation react-datepicker__navigation--next"
                        }
                        style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                        onClick={increaseMonth}
                      >
                        <span
                          className={
                            "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                          }
                        >
                          {">"}
                        </span>
                      </button> */}
                    </div>
                  )}
                  endDate={endDate}
                  customInput={<div style={{ display: 'none' }}></div>}
                  onChange={(update) => {
                    setStartDate(update[0])
                    setEndDate(update[1])
                  }}
                />
              </div>
              <div className='flxAll gap-30'>
                <Button
                  width={148}
                  height={42}
                  className={"fontMT"}
                  onClick={() => {

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
      <div>
        <div>
          <div
            ref={parentRef}
            className="List"
            style={{
              height: `600px`,
              width: `400px`,
              overflow: "auto"
            }}
          >
            <div
              style={{
                height: `${rowVirtualizer.getTotalSize()}px`,
                width: "100%",
                position: "relative"
              }}
            >
              {rowVirtualizer.getVirtualItems().map((virtualRow) => (
                <div
                  key={virtualRow.index}
                  className={virtualRow.index % 2 ? "ListItemOdd" : "ListItemEven"}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`
                  }}
                >
                  {filteredList[virtualRow.index] && <div>
                    <span>{filteredList[virtualRow.index].key}-</span>
                    <span>{filteredList[virtualRow.index].id}-</span>
                    <span>{filteredList[virtualRow.index].title || filteredList[virtualRow.index].name}</span>
                    <span>- {filteredList[virtualRow.index].slug}</span></div>}
                  {/* { && filteredList[virtualRow.index].name} */}
                </div>
              ))}
            </div>
          </div>
        </div>
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