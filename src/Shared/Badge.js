import IconWrap from "@/components/IconWrap";
import classNames from "classnames";
import { forwardRef } from "react";
import Button from "./Button";

// eslint-disable-next-line react/display-name
const Badge = forwardRef(({
  clearable = false,
  text = '',
  className,
  children,
  onClear
}, ref) => {
  return <div ref={ref} className={classNames('badge', className, {
    'badge-clear': clearable
  })}>
    <div className={classNames('badge-wrap flx flxAI gap-12', className)}>
      {text ? text : children}
      {clearable ? <div className='clear'>
        <Button width={22} height={22} onClick={onClear} reset className='flxAll'>
          <IconWrap name='Close' />
        </Button>
      </div> : null}
    </div>
  </div>
})

export default Badge;