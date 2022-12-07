import React, { useState } from 'react'
import Button from 'src/Shared/Button';
import DatePicker from 'src/Shared/DatePicker'


export default function DateRangePicker({ title = "", onAction, ...props }) {
  let _title = title || 'აირჩიეთ თარიღი';
  const [date, setDate] = useState([]);

  const onRangeChange = (update) => {
    setDate(update);
  }

  return (
    <div className='font-secondary-mt'>
      <div className='text-center'> {_title} </div>
      <div>
        <DatePicker {...props} />
      </div>
      <div className='btn-area'>
        <div className='flxAll gap-30 m-top-32 font-secondary-mt'>
          <Button
            width={148}
            height={42}
            onClick={() => { onAction && onAction('reset', date) }}
            variant="outline" size="normal" full type='button' >გაუქმება</Button>
          <Button
            width={148}
            height={42}
            onClick={() => onAction && onAction('save', date)} variant="primary" size="normal" full type='button'>არჩევა</Button>
        </div>
      </div>
    </div>
  )
}
