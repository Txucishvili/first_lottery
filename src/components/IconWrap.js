import React from 'react'
import ICON_SET from '../icons/index';

export default function IconWrap({children, name}) {

  const IconComp = ICON_SET[name];
  
  return (
    <div className='icon-wrapper'>
      <IconComp />
    </div>
  )
}
