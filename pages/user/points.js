import IconWrap from '@/components/IconWrap';
import SimpleDropDown from 'src/Shared/SimpleDropDown';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/components/PoinsPage.module.scss'
import DateRangePicker from '@/components/DateRangePicker';
import { CheckBox, Input } from '../../src/Shared/Input';
import useFilter from 'src/hooks/useFilter';
import { getPointsList, PointAmountList } from 'src/API';
import Button from 'src/Shared/Button';
import { format } from 'date-fns';
import { delay, isInt, numberWithSpaces, VARIABLES } from 'src/utils';
import Badge from 'src/Shared/Badge';
import useBreakPoint from 'src/hooks/useBreakPoint';


const ListItems = ({
  list = [],
  children,
  className
}) => {

  return <div className={classNames(className, 'simple-menu')}>
    {children}
  </div>
}

const ListItem = ({
  className,
  list = [],
  children,
  ...props
}) => {

  return <div {...props} className={classNames(className, 'simple-menu--item')}>
    {children}
  </div>
}

//
const Platforms = [
  { name: 'მედიქალი', icon: 'Medical', color: 'pink', slug: 'medical' },
  { name: 'ვაუჩერები', icon: 'TicketOutline', color: 'violet', slug: 'vouchers' },
  { name: 'შოპი', icon: 'Shop', color: 'green', slug: 'shop' },
  { name: 'თამაშები', icon: 'Games', color: 'yellow', slug: 'games' },
  { name: 'ზარი', icon: 'Bell', color: 'orange', slug: 'bell' },
  { name: 'მოწვევა', icon: 'Invitation', color: 'red', slug: 'invitation' },
  { name: 'M ბარათი', icon: 'MCard', color: 'gray', slug: 'm_card' }
];

const platformsObject = {
  ...Platforms.reduce((p, b, c, array, obj) => {
    return {
      ...p,
      [b.slug]: b
    }
  }, {})
}

const filters = {
  from_range: {
    value: '',
    targetField: 'points',
    filter: (target, field) => {
      const targetId = isInt(target.id) ? parseInt(target.id) : target.id;
      const value = isInt(field.value) ? parseInt(field.value) : field.value;

      return target.points > value;
    }
  },
  to_range: {
    value: '',
    targetField: 'points',
    filter: (target, field) => {
      const targetId = isInt(target.id) ? parseInt(target.id) : target.id;
      const value = isInt(field.value) ? parseInt(field.value) : field.value;
      return target.points < value;
    }
  },
  transactionId: {
    value: '',
    targetField: 'transactionId',
    condition: '',
    filter: (target, field) => {
      return target.transactionId.toString().includes(field.value);
    }
  },
  winningDate_from: {
    value: '',
    targetField: 'date',
    filter: (target, field) => {
      if (field.value) {
        return new Date(field.value).getTime() <= new Date(target.date).getTime()
      }
      return true;
    }
  },
  winningDate_to: {
    value: '',
    targetField: 'date',
    filter: (target, field) => {

      if (field.value) {
        return new Date(target.date).getTime() <= new Date(field.value).getTime()
      }
      return true;

    }
  },
  platforms: {
    value: [],
    targetField: 'platform',
    filter: (target, field) => {
      return field.value.length ? field.value.includes(target.platform.slug) : true;
    }
  },
  sort: {
    value: [],
    targetField: 'id',
    sort: (filter) => {
      return (a, b) => {
        return filter.value[0] !== 'points-from' ? a.points - b.points : b.points - a.points;
      };
    }
  }
}


const FilterOptions = ({ options, onAction }) => {
  const rangeFromRef = useRef();
  const rangeToRef = useRef();
  const datePickerDrop = useRef();
  const [dateRange, setDateRange] = useState([options.winningDate_from.value, options.winningDate_to.value]);

  useEffect(() => {
    if (options.winningDate_from.value == null || options.winningDate_to.value == null) {
      setDateRange({ winningDate_from: options.winningDate_from.value, winningDate_to: options.winningDate_to.value })
    }
  }, [options.winningDate_from, options.winningDate_to])

  const setFilter = (e) => {
    onAction && onAction('filter', e)
  }

  const onPlatfromSelect = (e) => {
    if (options.platforms.value.includes(e)) {
      setFilter({ platforms: options.platforms.value.filter((el) => el !== e) })
    } else {
      setFilter({ platforms: [...options.platforms.value, e] })
    }
  }

  const onDateAction = (action, payload) => {
    switch (action) {
      case 'save':
        setFilter({ winningDate_from: dateRange[0], winningDate_to: dateRange[1] })
        if (dateRange[1]) {
          // setFilter({ winningDate_to: dateRange[1] })
        }
        datePickerDrop.current.open(false);

        break;
      case 'reset':
        setFilter({ winningDate_from: null, winningDate_to: null });
        setDateRange([]);
        break;
      default:
        break;
    }
  }

  return <div className='wrapEl'>
    <div className={styles.filterWrap}>
      {/* <div className='filter-col-line flx flxAI'>
        <Input
          onChange={(e) => {
            setFilter({ transactionId: e.target.value })
          }}
          iconPosition="bottom"
          style={{ height: 32 }}
          variant={'simple'}
          size={'normal'}
          full
          name="ticketId"
          placeholder='მოძებნე ტირაჟით ან ბილეთის ნომრით...'
          withIcon={ICON_SET.SearchIcon}
          withClearIcon={true}
        />
      </div> */}
      <div className='filter-col-line'>
        <SimpleDropDown ref={datePickerDrop} className="simpleDropDown" showIcon={true}>
          <SimpleDropDown.Toggler className={'flxAll'}>
            თარიღი
          </SimpleDropDown.Toggler>
          <SimpleDropDown.Body className="p-block-28 p-inline-38">
            <DateRangePicker
              startDate={dateRange[0]}
              endDate={dateRange[1]}
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
              customInput={<div style={{ display: 'none' }}></div>}
              onChange={(e) => {
                setDateRange(e);
              }}
              onAction={onDateAction}
              isClearable
              selectsRange={true}
            />
          </SimpleDropDown.Body>
        </SimpleDropDown>
      </div>
      <div className='filter-col-line'>
        <SimpleDropDown open={!true} className="simpleDropDown" showIcon={true}>
          <SimpleDropDown.Toggler>
            პლატფრომა
          </SimpleDropDown.Toggler>
          <SimpleDropDown.Body>
            <ListItems className='p-block-26 fontMT selectList'>
              {Platforms.map((platform) => {
                return <ListItem
                  className={classNames('selectList--item', `b-color-${platform.slug}`, {
                    [`active`]: options.platforms.value.includes(platform.slug)
                  })} key={platform.slug}>
                  <label>
                    <div className='icon-area m-right-30'>
                      <IconWrap size={18} name={platform.icon} />
                    </div>
                    <div>{platform.name}</div>
                    <div className='toRight'>
                      <CheckBox name={platform.slug}
                        checked={options.platforms.value.includes(platform.slug)}
                        onChange={(e) => {
                          onPlatfromSelect(platform.slug)
                        }} />
                    </div>
                  </label>
                </ListItem>
              })}
            </ListItems>
          </SimpleDropDown.Body>
        </SimpleDropDown>
      </div>
      <div className='filter-col'>
        <SimpleDropDown className="simpleDropDown" showIcon={true}>
          <SimpleDropDown.Toggler>
            დაგროვებული ქულები
          </SimpleDropDown.Toggler>
          <SimpleDropDown.Body>
            <div className='flx flxAI p-inline-28 p-block-32 font-secondary-nus'>
              <div className='label m-right-38'>ქულები</div>
              <div className='flx gap-24'>
                <div className='flx flxAI gap-4'>
                  <Input
                    value={options.from_range.value}
                    style={{ width: 88, height: 40 }}
                    ref={rangeFromRef}
                    iconPosition="bottom"
                    variant={'outline'}
                    full
                    textAlign={'center'}
                    type={'number'}
                    hideDefaultApearance
                    placeholder='0'
                    onChange={(e) => {
                      // setFromRangeValue(e.target.value)
                      setFilter({ from_range: e.target.value })
                    }}
                  />
                  <div> - დან</div>
                </div>
                <div className='flx flxAI gap-4'>
                  <Input
                    value={options.to_range.value}
                    ref={rangeToRef}
                    style={{ width: 88, height: 40 }}
                    iconPosition="bottom"
                    variant={'outline'}
                    full
                    hideDefaultApearance
                    textAlign={'center'}
                    type={'number'}
                    placeholder='100'
                    onChange={(e) => setFilter({ to_range: e.target.value })}
                  />
                  <div> - მდე</div>
                </div>
              </div>
            </div>
          </SimpleDropDown.Body>
        </SimpleDropDown>
      </div>
      <div className='filter-col toRight'>
        <SimpleDropDown className="simpleDropDown" align="right">
          <SimpleDropDown.Toggler>
            {!options.sort.value.length
              ? <p>წყობა</p>
              : <div className='flx flxAI gap-6'>
                {options.sort.value[0] == 'points-from' ? 'შეძენილი ქულები' : 'გახარჯული ქულები'}
                <IconWrap onClick={(e) => {
                  e.stopPropagation();
                  setFilter({ sort: [] })
                  console.log('e', e)
                }} name='Close' size={14} />
              </div>}
          </SimpleDropDown.Toggler>
          <SimpleDropDown.Body style={{ minWidth: 240 }}>
            <ListItems className='p-block-26 flx flxCol font-secondary-nus'>
              <ListItem>
                <Button
                  onClick={() => setFilter({ sort: ['points-from'] })}
                  reset full className='p-block-12 p-inline-24 icon-area text-color-green'>
                  <IconWrap size={18} name={'Plus'} className={'color-green m-right-12'} />
                  <p>{'შეძენილი ქულები'}</p>
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  onClick={() => setFilter({ sort: ['points-to'] })}
                  reset full className='p-block-12 p-inline-24 icon-area text-color-red'>
                  <IconWrap size={18} name={'Minus'} className={'color-red m-right-12'} />
                  <p>{'გახარჯული ქულები'}</p>
                </Button>
              </ListItem>
            </ListItems>
          </SimpleDropDown.Body>
        </SimpleDropDown>
      </div>
    </div>
  </div>
}

const FilterList = ({
  listItems = []
}) => {

  const { bp, width } = useBreakPoint();

  return <div className='simple-table grid' style={{ width: '100%' }}>
    <div className='bp-md-s'>
      <div className='grid-row-head table-row row p-block-32 bp-md'>
        <div className='col-3'>ტრანზაქციის ID</div>
        <div className='col-3'>პლატფორმა</div>
        <div className='col-3'>დარიცხული ქულები</div>
        <div className='col-1'>თარიღი</div>
      </div>
    </div>
    <div className='grid-row-body'>

      {listItems.length ? listItems.map((item) => {
        return <div className='table-row row' key={item.transactionId}>
          <div className='col-3'>
            {width <= VARIABLES.bp.tablet_sm.value ? <span className='bp-title'>ტრანზაქციის ID: </span> : null}
            <div>
              <span className='m-right-8'>#</span>
              <span>{item.transactionId}</span>
            </div>
          </div>
          <div className='col-3'>
            {width <= VARIABLES.bp.tablet_sm.value ? <span className='bp-title'>პლატფორმა: </span> : null}
            <span>{item.platform.name}</span>
          </div>
          <div className='col-3'>
            {width <= VARIABLES.bp.tablet_sm.value ? <span className='bp-title'>დაგროვილი ქულები: </span> : null}
            <span
              className={classNames(`text-color-${item.points <= 0 ? 'red' : 'green'}`)}
            >{numberWithSpaces(item.points)}</span>
          </div>
          <div className='col-1'>
            {width <= VARIABLES.bp.tablet_sm.value ? <span className='bp-title'>თარიღი: </span> : null}
            <span>{format(new Date(item.date), 'MM/dd/yyyy')}</span>
          </div>
        </div>
      }) : null}

    </div>
  </div>
}

export default function UserPointsPage(props) {
  const [listData, setListData] = useState(props.listData.data || []);
  const [loading, setLoading] = useState(false);
  const [isMounted, setMoundet] = useState(false);

  const { filteredList, setFilter, commit, reset, options } = useFilter({ list: listData, filterOptions: filters });

  const rangeFromBadgeRef = useRef();
  const rangeBadgeRef = useRef();
  const [showRangeBadge, setRangeBadgeShow] = useState(false);
  const [isOutsideBadge, setOutsideBadge] = useState(false);

  const hasMore = true;

  useEffect(() => {
    if (options.from_range.value || options.to_range.value) {
      setRangeBadgeShow(true);
    }
    if (isOutsideBadge && !options.from_range.value && !options.to_range.value) {
      setRangeBadgeShow(false);
    }
  }, [isOutsideBadge, options.from_range.value, options.to_range.value]);

  useEffect(() => {
    const onClick = (e) => {
      console.log('Click Event');
      if (rangeBadgeRef.current && rangeBadgeRef.current.contains(e.target)) {
        setOutsideBadge(false)
      } else {
        setOutsideBadge(true)
      }
    }

    // !!!!! event remove handle
    if (showRangeBadge) {
      if (!isMounted) {
        console.log('Add Event Listener')
        setMoundet(true);
        window.addEventListener('click', onClick)
      }
    } else {
      if (isMounted) {
        setMoundet(false);
        console.log('Remove Event Listener', isMounted)
        window.removeEventListener('click', onClick);
      }
    }
  }, [isMounted, options.from_range.value, options.to_range.value, showRangeBadge])

  const loadMoreItems = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    await delay(1000)
    const data = await getPointsList(listData.length);
    setListData(listData.concat(data));
    setTimeout(() => {
      setLoading(false);
    }, 1);

  }

  const onFilterAction = (action, state) => {
    if (action == 'filter') {
      setFilter(state)
    }
  }


  return (
    <div className='page--wrap'>
      <div className='titleArea pageTitle'>
        <h3>ქულების რაოდენობა</h3>
      </div>
      <div className='layout--wrap'>
        <FilterOptions onAction={onFilterAction} options={options} />

        <div className='flx flx-wrap gap-12 m-top-20'>
          {options.platforms.value.map((p) => {
            return <div key={p}>
              <Badge className={'flx-align-end'} clearable onClear={() => {
                setFilter({ platforms: options.platforms.value.filter((e) => e !== p) })
              }}>
                <span><IconWrap name={platformsObject[p].icon} size={21} /></span>
                <span>{platformsObject[p].name}</span>
              </Badge>
            </div>
          })}
          {options.winningDate_from.value ? <Badge onClear={() => {
            setFilter({ winningDate_from: null, winningDate_to: null })
          }} clearable text={`${format(new Date(options.winningDate_from.value), 'MM/dd/yyyy')} ${options.winningDate_to.value ? ' - ' + format(new Date(options.winningDate_to.value), 'MM/dd/yyyy') : ''}`} /> : null}

          {showRangeBadge ? <Badge
            ref={rangeBadgeRef}
            clearable
            onClear={() => {
              setFilter({ to_range: '', from_range: '' })
            }}
          >
            <div className='flx gap-24  font-secondary-nus' style={{ height: '100%' }}>
              <div className='flx flxAI gap-4'>
                <Input
                  name="range_from"
                  value={options.from_range.value}
                  ref={rangeFromBadgeRef}
                  style={{ width: 73, height: '100%' }}
                  iconPosition="bottom"
                  variant={'outline'}
                  full
                  textAlign={'center'}
                  type={'number'}
                  hideDefaultApearance
                  placeholder='0'
                  onChange={(e) => setFilter({ from_range: e.target.value })}
                />
                <div> - დან</div>
              </div>
              <div className='flx flxAI gap-4'>
                <Input
                  name="range_to"
                  value={options.to_range.value}
                  style={{ width: 73, height: '100%' }}
                  iconPosition="bottom"
                  variant={'outline'}
                  full
                  hideDefaultApearance
                  textAlign={'center'}
                  type={'number'}
                  placeholder='100'
                  onChange={(e) => setFilter({ to_range: e.target.value })}
                />
                <div> - მდე </div>
              </div>
            </div>

          </Badge> : null}
          {options.sort.value.length ? <Badge
            onClear={() => setFilter({ sort: [] })}
            clearable
          >

            <div className='flx gap-24'>
              {options.sort.value[0] == 'points-from' ? 'შეძენილი ქულები' : 'გახარჯული ქულები'}
            </div>

          </Badge> : null}
        </div>

        <div>
          <FilterList listItems={filteredList} />


          {loading
            ? <div className='loading-frame--wrap simple-table'>
              <div className='loading-frame--wrap grid-row-body'>
                {Array(5).fill(null).map((i, k) => {
                  return <div key={k} style={{ height: 88, animationDelay: '0.' + k + 5 + 's' }} className='loading-frame--item table-row'>
                  </div>
                })}</div>
            </div>
            : null}


          <div className='grid-row-footer flxAll p-block-24'>
            {hasMore ? <Button
              reset
              onClick={() => { loadMoreItems() }}
              variant='text' className='text-center text-underline'>
              მეტის ნახვა
            </Button> : null}
          </div>

        </div>
      </div>
    </div>
  )
}
export function getServerSideProps() {

  return {
    props: { listData: PointAmountList }
  }
}
