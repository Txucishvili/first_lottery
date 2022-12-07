import { forwardRef, useRef } from "react";
import Input from "src/Shared/Input";

const RangePicker = forwardRef((props, ref) => {
  const { values, } = props;
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

RangePicker.displayName = 'RangePicker';


export default RangePicker;