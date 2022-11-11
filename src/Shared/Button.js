import React from 'react'
import styles from '../../styles/components/button.module.scss'
import IconWrap from '../components/IconWrap';
import { classNames } from '../utils/classnames';

export function ButtonBase(props) {
  const {wide, reset = false, width, variant, full, size = 'normal', height, color, type = 'button', children, text, ...defaultProps } = props;
  let IconWrapEl, _childrens;

  if (children instanceof Array) {
    IconWrapEl = children.find((c) => {
      return c.type === IconWrap;
    });

    _childrens = children.filter((c, k) => k !== children.indexOf(IconWrapEl));
  }

  const _styles = {};

  if (width) {
    _styles['width'] = width
  }  if (height) {
    _styles['height'] = height
  }

  console.log('--', _styles)

  return (
    <div className={classNames(styles.button)}>
      <div className={classNames('content', props.className)}>
        <button type={type} {...defaultProps}
        className={classNames('button--wrap', {
        [`variant--${variant}`]: variant,
        [`color--${color}`]: color,
        [`size--${size}`]: size,
        ['full']: full,
        ['wide']: wide,
        ['reset']: reset,
      })}
      style={_styles}
      >
        <div className='flx flxAll'>
          {IconWrapEl}
          {_childrens ?? children}
        </div>
      </button>
      </div>
    </div>
  )
}

const Button = ButtonBase;
const LargeButton = <ButtonBase />;

export default Button;