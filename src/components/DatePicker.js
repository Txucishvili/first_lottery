import React from 'react'
import Button from 'src/Shared/Button';
import DateRangePicker from 'src/Shared/DateRangePicker'


export default function DatePicker({ title = "", onAction, ...props }) {
  let _title = title || 'აირჩიეთ თარიღი';

  return (
    <div>
      <div className='text-center'> {_title} </div>
      <div>
        <DateRangePicker {...props} />
      </div>
      <div className='btn-area'>
        <div className='flxAll gap-30 m-top-32'>
          <Button
            width={148}
            height={42}
            className={"fontMT"}
            onClick={() => { onAction && onAction('reset') }}
            variant="outline" size="normal" full type='button' >გაუქმება</Button>
          <Button
            width={148}
            className={"fontMT"}
            height={42}
            onClick={() => onAction && onAction('save')} variant="secondary" size="normal" full type='button' >არჩევა</Button>

        </div>
      </div>
    </div>
  )
}
