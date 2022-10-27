import React from 'react'
import styles from '../../styles/components/button.module.scss'
import IconWrap from '../components/IconWrap';
import { classNames } from '../utils/classnames';

export function ButtonBase(props) {
  const { type, variant, color, children, text } = props;
  let IconWrapEl, _childrens;

  if (children instanceof Array) {
    IconWrapEl = children.find((c) => {
      return c.type === IconWrap;
    });

    _childrens = children.filter((c, k) => k !== children.indexOf(IconWrapEl));
  }

  return (
    <div className={classNames(styles['button--wrap'], {
      [styles[`variant--${variant}`]]: !!variant,
      [styles[`color--${color}`]]: !!color,
      [styles[`type--${type}`]]: !!type,
    })}>
      <div className='flx flxAll'>
        {IconWrapEl}
        {_childrens ?? children}
      </div>
    </div>
  )
}

const Button = ButtonBase;

export default Button;