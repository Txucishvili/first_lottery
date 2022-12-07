import classNames from 'classnames';
import React, { forwardRef } from 'react'
import ICON_SET from '../icons/index';

function IconWrapBase({ children, name, size = 14, width, height, className, ...props }) {

  const IconComp = ICON_SET[name];

  // console.log('name', name, ICON_SET[name])


  return (
    <div
      {...props}
      style={{
        // !!!!!!
        width: width ? width : size && size !== 'auto' ? parseFloat(size) : 16,
        height: height ? height : size && size !== 'auto' ? parseFloat(size) : 16,
      }}
      className={classNames({
        'flxAll': true,
        'icon-wrapper': size !== 'auto',
      }, className)}>
      {IconComp ? <IconComp /> : '[]'}
    </div>
  )
}

// eslint-disable-next-line react/display-name
export default forwardRef((props, ref) => <IconWrapBase ref={ref} {...props} />)