import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'

export default function DateRangePicker(props) {
  const { onChange, startDate, endDate, ...defaultProps } = props;
  const [dateRange, setDateRange] = useState([startDate, endDate]);
  const [_startDate, _endDate] = dateRange;

  const renderDayContents = (day, date) => {
    const tooltipText = `Tooltip for date: ${date}`;
    return <span title={tooltipText}>{day}</span>;
  };

  const onSelect = (e) => {
    console.log('onSelect', e)
  }

  return (
    <div>
      <ReactDatePicker
        // onSelect={onSelect}
        {...defaultProps}
        open={true}
        selectsRange={true}
        startDate={_startDate}
        endDate={_endDate}
        onChange={(update) => {
          setDateRange(update);
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
