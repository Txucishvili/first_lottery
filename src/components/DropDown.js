import React, { cloneElement, createElement, createRef, forwardRef, useEffect, useImperativeHandle } from 'react'
import { useOutsideClick } from 'src/hooks/useOutsideClick';
import styles from '@/styles/components/dropdown.module.scss';
import classNames from 'classnames';

export const Toggler = (props) => {
  const {children, ...nextProps} = props;
  return cloneElement(props.children, {
    ...nextProps
  })
}

export const DropContent = (props) => {
  return props.children
}

const DropDown = forwardRef((props, ref) => {
  const { ref: refEl, isOpen, setIsOpen } = useOutsideClick(props.isOpen);
  const { variant = 'default', disableToggle } = props;
  const isSingleChild = (props.children instanceof Array);

  const TogglerChild = isSingleChild ? props.children.find((c) => c.type == Toggler) : null;
  const DropContentChild = isSingleChild ? props.children.filter((c) => c.type == DropContent) : null;

  const TogglerC = !!TogglerChild ? cloneElement(TogglerChild, {
    extraProp: true,
    isOpen
  }) : null;

  useImperativeHandle(ref, () => ({
    open: (e) => {
      setIsOpen(e);
    },
    isOpen: (e) => {
      return isOpen
    },
  }));

  useEffect(() => {
    props && props.onChange && props.onChange(isOpen)
  }, [isOpen, props])



  return (
    <div ref={ref} className={styles.container}>
      <div ref={refEl}>
      <div  className={classNames(styles.wrap, {
        [styles.open]: isOpen,
        [styles.outer]: variant == 'out',
        [styles.default]: variant == 'default',
      })}>
        <div className={styles.toggler} onClick={() => {
          if (disableToggle) {
            if (props.onTogglerClick) {
              props.onTogglerClick(isOpen);
            }
            return;
          }
          setIsOpen(!isOpen);
        }}>

          <div >


            {/* {TogglerChild && !!TogglerChild ? TogglerC : 'open'} */}
            {TogglerC ? TogglerC : <div>
              open
            </div>}
          </div>
        </div>
        {isOpen && variant !== 'out' && DropContentChild && <div className={styles.drop}>{DropContentChild}</div>}
      </div>
      {isOpen && DropContentChild && variant == 'out' ?
        <div className={styles.dropOuter}>
          {DropContentChild}
        </div> : null}
      </div>
    </div>
  )
});

DropDown.displayName = 'DropDown';

export default DropDown;