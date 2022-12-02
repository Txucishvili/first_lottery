import IconWrap from '@/components/IconWrap';
import SimpleDropDown from '@/components/SimpleDropDown';
import classNames from 'classnames';
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import styles from '../../styles/components/PoinsPage.module.scss'
import DatePicker from '@/components/DatePicker';
import { CheckBox, Input } from '../../src/Shared/Input';
import ICON_SET from 'src/icons';
import useFilter from 'src/hooks/useFilter';
import { getPointsList, PointAmountList } from 'src/API';
import Button from 'src/Shared/Button';
import { format } from 'date-fns';
import { delay, getRndInteger, isInt, numberWithSpaces } from 'src/utils';


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

// eslint-disable-next-line react/display-name
const RangePicker = forwardRef((props, ref) => {
  const fromRef = useRef();
  const toRef = useRef();

  return <div className='flx gap-24'>
    <div className='input-range flx flxAI gap-4'>
      <Input
        style={{ width: 88, height: 40 }}
        ref={fromRef}
        iconPosition="bottom"
        variant={'outline'}
        full
        textAlign={'center'}
        type={'number'}
        hideDefaultApearance
        placeholder='0'
        onChange={(e) => props.onChange && props.onChange([e.target.value, toRef.current.target().value])}
      />
      <div>-დან</div>
    </div>
    <div className='input-range flx flxAI gap-4'>
      <Input
        ref={toRef}
        style={{ width: 88, height: 40 }}
        iconPosition="bottom"
        variant={'outline'}
        full
        hideDefaultApearance
        textAlign={'center'}
        type={'number'}
        placeholder='100'
        onChange={(e) => props.onChange && props.onChange([fromRef.current.target().value, e.target.value])}
      />
      <div>-მდე</div>
    </div>
  </div>
});

const Badge = ({
  clearable = false,
  text = '',
  className,
  children,
  onClear
}) => {
  console.log('text', text)
  return <div className={classNames('badge', className, {
    'badge-clear': clearable
  })}>
    <div className={classNames('badge-wrap flx flxAI gap-12', className)}>
      {text ? text : children}
      {clearable ? <Button onClick={onClear} reset className='clear flxAll'>
        <IconWrap name='Close' />
      </Button> : null}
    </div>
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

console.log('object', platformsObject)

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
  }
}

export default function UserPointsPage(props) {
  const [listData, setListData] = useState(props.listData.data || []);
  const [platfromSelected, setPlatform] = useState([]);
  const [loading, setLoading] = useState(false);
  const { filteredList, setFilter, commit, reset, options } = useFilter({ list: listData, filterOptions: filters });
  const hasMore = true;

  const onPlatfromSelect = (e) => {


    if (options.platforms.value.includes(e)) {
      setFilter({ platforms: options.platforms.value.filter((el) => el !== e) })
    } else {
      setFilter({ platforms: [...options.platforms.value, e] })
    }


    return;
    if (platfromSelected.includes(e)) {
      setPlatform(platfromSelected.filter((p) => p !== e))
    } else {
      setPlatform(platfromSelected.concat([e]))
    }
  }

  useEffect(() => {
    console.log('listData', listData)
  }, [listData])

  const loadMoreItems = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    await delay(5000)
    const data = await getPointsList(listData.length);
    setLoading(false);
    setListData(listData.concat(data))
  }

  return (
    <div className='page--wrap'>
      <div className='titleArea pageTitle'>
        <h3>ქულების რაოდენობა</h3>
      </div>
      <div className='layout--wrap'>
        <div className={styles.filterWrap}>
          <div className='filter-col flx flxAI'>
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
          </div>
          <div className='filter-col'>
            <SimpleDropDown className="simpleDropDown" showIcon={true}>
              <SimpleDropDown.Toggler className={'flxAll'}>
                თარიღი
              </SimpleDropDown.Toggler>
              <SimpleDropDown.Body className="p-block-28 p-inline-32">
                <DatePicker
                  startDate={options.winningDate_from.value}
                  endDate={options.winningDate_to.value}
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
                  onChange={(update) => {
                    console.log('-------------')
                    setFilter({ winningDate_from: update[0] })
                    if (update[1]) {
                      setFilter({ winningDate_to: update[1] })
                    }
                  }}
                  isClearable
                  selectsRange={true}
                />
              </SimpleDropDown.Body>
            </SimpleDropDown>
          </div>
          <div className='filter-col'>
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
                <div className='flx flxAI p-inline-28 p-block-32'>
                  <div className='label m-right-38'>ქულები</div>
                  <RangePicker onChange={(e) => {
                    console.log('el', e)
                    setFilter({ from_range: e[0], to_range: e[1] })
                  }} />
                </div>
              </SimpleDropDown.Body>
            </SimpleDropDown>
          </div>
        </div>

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

          {options.from_range.value || options.to_range.value ? <Badge>
            <RangePicker style={{ height: 12 }} />
          </Badge> : null}

        </div>



        <div>
          <div className='simple-table grid' style={{ width: '100%' }}>
            <div className='grid-row-head table-row row p-block-32'>
              <div className='col-3'>ტრანზაქციის ID</div>
              <div className='col-3'>პლატფორმა</div>
              <div className='col-3'>დარიცხული ქულები</div>
              <div className='col-3'>თარიღი</div>
            </div>
            <div className='grid-row-body'>
              {filteredList.length ? filteredList.map((item) => {
                return <div className='table-row row' key={item.id}>
                  <div className='col-3'>
                    <span className='m-right-8'>#</span>
                    <span>{item.transactionId}</span>
                  </div>
                  <div className='col-3'>{item.platform.name}</div>
                  <div className={classNames('col-3', `text-color-${item.points <= 0 ? 'red' : 'green'}`)}>{numberWithSpaces(item.points)}</div>
                  <div className='col-3'>{format(new Date(item.date), 'MM/dd/yyyy')}</div>
                </div>
              }) : null}
            </div>


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
                onClick={() => { loadMoreItems() }}
                variant='text' className='text-center text-underline'>
                მეტის ნახვა
              </Button> : null}
            </div>
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
