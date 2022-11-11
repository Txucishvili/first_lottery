/* eslint-disable react/display-name */
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import styles from '@/styles/components/input.module.scss';
import classNames from 'classnames';
import ICON_SET from 'src/icons';

// eslint-disable-next-line react/display-name
export const Input = forwardRef((props, ref) => {
  const {
    iconPosition = 'start',
    withIcon = null,
    withClearIcon = false,
    placeholder = '',
    variant = 'default',
    size = 'normal',
    textAlign = 'left',
    value,
    onChange,
    ...otherProps
  } = props;
  let initialValue = useRef(value);
  const [inputValue, setInputValue] = useState(value);

  const inputRef = useRef();


  useImperativeHandle(ref, () => ({
    reset: (e) => {
      onTextClear();
    },
    focus: (e) => {
      inputRef.current.focus()
    },
    target: (e) => {
      return inputRef.current;
    },
  }));

  useEffect(() => {
    // !!!
    // console.log('object', value)
    inputRef.current.value = value;
  }, [value])

  const onChangeValue = (e) => {

    props.onChange && props.onChange(e);
    setInputValue(e.target.value);
  }

  const onTextClear = () => {
    inputRef.current.value = '';
    onChangeValue({ target: { value: '' } });
  }


  return <div className={styles.root}>
    <div className={classNames('container', {
      [`variant--${variant}`]: variant,
      [`size--${size}`]: size,
    })}>
    <div className={'wrap'}>
      {withIcon && iconPosition == 'start' ? <button className={classNames('withIconWrap', {
        ['bottom']: iconPosition == 'bottom'
      })}>
        {withIcon}
      </button> : null}
      <div className={classNames('inputWrap', {
        ['withIcon']: !!withIcon && iconPosition == 'bottom'
      })}>
        <input value={inputValue} onChange={onChangeValue} {...otherProps} ref={inputRef} style={{ width: '100%', textAlign }} placeholder={placeholder} />
        <div className={'bg'}></div>
        {withClearIcon && inputValue && inputValue.length ? <button
          onClick={onTextClear}
          className={classNames('clearBtn', {
            ['withiconClear']: iconPosition == 'bottom'
          })}>
          {ICON_SET.Close()}
        </button> : null}
      </div>
      {withIcon && iconPosition == 'bottom' ? <button className={classNames('withIconWrap', {
        ['bottom']: iconPosition == 'bottom'
      })}>
        {withIcon}
      </button> : null}
    </div>
  </div>
  </div>
});

export default Input;