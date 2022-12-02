import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'


const days = ['ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ', 'კვი']
const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']

const locale = {
  localize: {
    day: n => days[n],
    month: n => months[n]
  },
  formatLong: {
    date: () => 'mm/dd/yyyy'
  }
}


export default function DateRangePicker(props) {
  const { onChange, startDate, endDate, ...defaultProps } = props;
  // const [dateRange, setDateRange] = useState([startDate, endDate]);
  // const [_startDate, _endDate] = dateRange;

  const renderDayContents = (day, date) => {
    const tooltipText = `Tooltip for date: ${date}`;
    return <span title={tooltipText}>{day}</span>;
  };

  return (
    <div>
      <ReactDatePicker
      locale={locale}
        // onSelect={onSelect}
        {...defaultProps}
        open={true}
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          // setDateRange(update);
          onChange(update);
        }}
        isClearable={false}
        shouldCloseOnSelect={false}
        renderDayContents={renderDayContents}
        monthsShown={2}
        // portalId="portals"
        selected={startDate}
      />
    </div>
  )
}
