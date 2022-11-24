import classNames from 'classnames';
import React, { forwardRef } from 'react'
import ICON_SET from '../icons/index';

function IconWrapBase({ children, name, size = 14 }) {

  const IconComp = ICON_SET[name];

  
  return (
    <div
      style={{
        // !!!!!!
        width: size && size !== 'auto' ? parseFloat(size) : 16,
        height: size && size !== 'auto' ? parseFloat(size) : 16,
      }}
      className={classNames({
        'flxAll': true,
        'icon-wrapper': size !== 'auto'
      })}>
      <IconComp />
    </div>
  )
}

// eslint-disable-next-line react/display-name
export default forwardRef((props, ref) => <IconWrapBase ref={ref} {...props} />)