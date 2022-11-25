import React, { cloneElement, createElement, createRef, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { useOutsideClick } from 'src/hooks/useOutsideClick';
import styles from '@/styles/components/dropdown.module.scss';
import classNames from 'classnames';
import { PortalWrapper, withPortal } from './PortalTransition';
import { getElementRect } from 'src/utils';
import useWindowSize from 'src/hooks/useWindowSize';

export const Toggler = (props) => {
  const { children, ...nextProps } = props;
  return createElement('div', {
    ...nextProps,
    key: 'Toggler',
  })
}

export const withToggler = (props) => {
  const { children, ...nextProps } = props;

  return cloneElement(Toggler, {
    ...nextProps,
    key: 'Toggler'
  }, children)
}

// eslint-disable-next-line react/display-name
export const DropContent = forwardRef((props, ref) => {
  const { children, ...nextProps } = props;
  return createElement('div', {
    ...nextProps,
    ref,
    key: 'DropContent',
  }, children)

})

const DropDown = forwardRef((props, ref) => {
  const { position = 'auto', fromEdge = false, className, name, variant = 'default', portal = false, disableToggle, dir = 'left', ...nextProps } = props;
  const togglerRef = useRef();
  const dropRef = useRef();
  const customEvent = (e) => {
    // console.log('ref', dropRef)
    if (portal) {
      if (dropRef && dropRef.current && !dropRef.current.contains(e.target) && !togglerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
      return;
    }

    if (refEl && refEl.current && !refEl.current.contains(event.target)) {
      setIsOpen(false);
    }
  }


  const { ref: refEl, isOpen, setIsOpen } = useOutsideClick(props.isOpen, customEvent);
  const { width } = useWindowSize();

  const [rect, setRect] = useState({});


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
        // console.log('rect.body.left', rect.body.left, rect.target.left)
        setRect({
          top: Math.abs(rect.body.top - rect.target.top) + rect.target.height,
          left: rect.target.left,
          width: Math.abs(rect.target.width),
          height: Math.abs(rect.target.height),
        })
      } else {
        setRect({})
      }
    }
  }, [togglerRef, isOpen, portal, width, name]);

  useEffect(() => {
    // console.log('rect', rect)
  }, [rect])


  const isSingleChild = (props.children instanceof Array);

  const TogglerChild = isSingleChild ? props.children.find((c) => {
    return c.type == Toggler
  }) : null;


  const DropContentChild = isSingleChild
    ? props.children.find((c) => c.type == DropContent)
    : null;


  let TogglerEl = null;
  let DropContentEl = null;

  if (DropContentChild && isOpen) {
    if (portal && dropRef.current) {
      console.log('----------------------------------', dropRef.current)
      DropContentEl = withPortal({
        className: classNames('portal', className),
        style: {
          position: portal ? 'absolute' : 'auto',
          // top: fromEdge ? rect?.top - rect?.height : rect?.top,
          // left: rect?.left,
          transform: `translate(${Math.round((rect?.left - (1 / 2)) * 10) / 10}px, ${rect?.top}px)`,
          // width: rect?.width + 2,
          zIndex: 4,
          ...DropContentChild.props.style
        }, children: createElement('div', {
          ref: dropRef,
          className: 'drop'
        }, DropContentChild)
      })
    } else {
      DropContentEl = cloneElement(DropContentChild, {
        className: classNames('drop', DropContentChild.props.className),
        ref: dropRef,
        style: {
          ...DropContentChild.props.style
        }
      }, DropContentChild.props.children)
    }
  }

  const onToggleClick = () => {
    if (disableToggle) {
      if (props.onTogglerClick) {
        props.onTogglerClick(isOpen);
      }
      return;
    }
    setIsOpen(!isOpen);
  }


  if (TogglerChild) {
    TogglerEl = cloneElement(Toggler({ children: TogglerChild.props.children }), {
      className: classNames('toggler', TogglerChild.props.className),
      ref: togglerRef,
      onClick: onToggleClick,
      style: {
        ...TogglerChild.props.style
      }
    },
      TogglerChild.props.children);
    // TogglerEl = cloneElement(TogglerChild, {
    //   className: className,
    //   style: {
    //     ...TogglerChild.props.style
    //   }
    // },
    //   createElement('div', {
    //     ref: dropRef,
    //     className: 'drop'
    //   }, TogglerChild.props.children));
    // if (fromEdge && isOpen) {
    //   TogglerEl = cloneElement(TogglerChild, {
    //     ...TogglerChild.props,
    //     style: {
    //       visibility: 'hidden'
    //     }
    //   }, TogglerChild)
    // } else {
    //   TogglerEl = cloneElement(TogglerChild, {
    //     ...TogglerChild.props
    //   }, TogglerChild)
    // }
  }

  if (position) {
    // console.log('position', position)
  }

  return (
    <div ref={ref} className={classNames(styles.container, className)}>
      <div ref={refEl} className={classNames('drop-wrap', {[variant]: variant} , {
        ['open']: isOpen,
      })}>
        {/* <div
          ref={togglerRef}
          className={'toggler'}
          onClick={onToggleClick}> */}
        {/* {TogglerChild && !!TogglerChild ? TogglerC : 'open'} */}
        {TogglerEl}
        {isOpen && DropContentEl}
        {/* {isOpen && DropContentChild && portal &&
            <PortalWrapper>
              <div ref={dropRef}
                className={'drop'}
                style={{
                  position: portal ? 'absolute' : 'auto',
                  top: rect?.top,
                  left: rect?.left,
                  width: rect?.width,
                  zIndex: 5
                }}
              >{DropContentChild}</div>
            </PortalWrapper>
          } */}
      </div>
    </div>
  )
});

DropDown.displayName = 'DropDown';

export default DropDown;