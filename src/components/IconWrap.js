import classNames from 'classnames';
import React from 'react'
import ICON_SET from '../icons/index';

export default function IconWrap({ children, name, size = 14 }) {

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
