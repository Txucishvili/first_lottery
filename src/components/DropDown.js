import React, { cloneElement, createElement, createRef, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { useOutsideClick } from 'src/hooks/useOutsideClick';
import styles from '@/styles/components/dropdown.module.scss';
import classNames from 'classnames';
import { PortalWrapper, withPortal } from './PortalTransition';
import { getElementRect } from 'src/utils';
import useWindowSize from 'src/hooks/useWindowSize';

export const Toggler = (props) => {
  const { children, ...nextProps } = props;
  return cloneElement(props.children, {
    ...nextProps
  })
}

export const DropContent = (props) => {
  return props.children
}

const DropDown = forwardRef((props, ref) => {
  const { className, variant = 'default', portal = false, disableToggle, dir = 'left' } = props;
  const isSingleChild = (props.children instanceof Array);

  const { width } = useWindowSize();

  const togglerRef = useRef();
  const dropRef = useRef();

  const [rect, setRect] = useState({});


  const customEvent = (e) => {
    if (portal) {
      if (dropRef && dropRef.current && !dropRef.current.contains(e.target)) {
        setIsOpen(false);
      }
      return;
    }

    if (refEl && refEl.current && !refEl.current.contains(event.target)) {
      setIsOpen(false);
    }
  }
  const { ref: refEl, isOpen, setIsOpen } = useOutsideClick(props.isOpen, customEvent);


  const TogglerChild = isSingleChild ? props.children.find((c) => c.type == Toggler) : null;
  const DropContentChild = isSingleChild
    ? props.children.filter((c) => c.type == DropContent)
    : null;


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
    props && props.onChange && props.onChange(isOpen);

  }, [isOpen, props, refEl]);


  useEffect(() => {
    if (togglerRef.current && portal) {
      if (isOpen) {
        const rect = getElementRect(togglerRef.current);
        setRect({
          top: Math.abs(rect.body.top - rect.target.top) + rect.target.height,
          left: Math.abs(rect.body.left - rect.target.left),
          width: Math.abs(rect.target.width),
        })
      } else {
        setRect({})
      }
    }
  }, [togglerRef, isOpen, portal, width]);

  useEffect(() => {
    console.log('rect', rect)
  }, [rect])


  const onToggleClick = () => {
    if (disableToggle) {
      if (props.onTogglerClick) {
        props.onTogglerClick(isOpen);
      }
      return;
    }
    setIsOpen(!isOpen);
  }


  return (
    <div ref={ref} className={classNames(styles.container, className)}>
      <div ref={refEl}>
        <div className={classNames('drop-wrap', {
          ['open']: isOpen,
        })}>
          <div
            ref={togglerRef}
            className={'toggler'}
            onClick={onToggleClick}>
            <div>
              {/* {TogglerChild && !!TogglerChild ? TogglerC : 'open'} */}
              {TogglerC ? TogglerC : <div>
                open
              </div>}
            </div>
          </div>
          {isOpen && DropContentChild && !portal &&
            <div
              className={'drop'}>{DropContentChild}</div>
          }
          {isOpen && DropContentChild && portal &&
            <PortalWrapper>
              <div ref={dropRef}>
                <div
                  style={{
                    position: portal ? 'absolute' : 'auto',
                    top: rect?.top,
                    left: rect?.left,
                    width: rect?.width,
                    zIndex: 5
                  }}
                  className={'drop'}>{DropContentChild}</div>
              </div>
            </PortalWrapper>
          }
        </div>
      </div>
    </div>
  )
});

DropDown.displayName = 'DropDown';

export default DropDown;