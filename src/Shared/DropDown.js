import React, { cloneElement, createElement, createRef, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { useOutsideClick } from 'src/hooks/useOutsideClick';
import styles from '@/styles/components/dropdown.module.scss';
import classNames from 'classnames';
import { PortalWrapper, withPortal } from '../components/PortalTransition';
import { getElementRect } from 'src/utils';
import useWindowSize from 'src/hooks/useWindowSize';
import { createPopper } from '@popperjs/core';

// eslint-disable-next-line react/display-name
export const Toggler = forwardRef((props, ref) => {
  const { children, ...nextProps } = props;
  return createElement('div', {
    ...nextProps,
    key: 'Toggler',
  })
})

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
  const {
    position = 'bottom',
    align = 'left',
    fromEdge = false, className, name, variant = 'default', portal = false, disableToggle, dir = 'left', ...nextProps } = props;
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
      // console.log('--------------------------')
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

  // console.log('------------', name, isOpen,)

  useEffect(() => {
    // console.log('props.isOpen', props.isOpen)
    setIsOpen(props.isOpen);
  }, [props.isOpen, setIsOpen]);

  useEffect(() => {
    props && props.onChange && props.onChange(isOpen);
  }, [isOpen, props, refEl]);


  useEffect(() => {
    const rect = getElementRect(togglerRef.current);
    if (togglerRef.current) {
      if (isOpen && !rect.width) {
        // console.log('-------------------------')
        setRect({
          top: Math.abs(rect.body.top - rect.target.top) + rect.target.height,
          left: rect.target.left,
          width: rect.target.width,
          height: rect.target.height,
        });
        //   // console.log('rect.body.left', rect.body.left, rect.target.left)
        //   setRect({
        //     top: Math.abs(rect.body.top - rect.target.top) + rect.target.height,
        //     left: rect.target.left,
        //     width: rect.target.width,
        //     height: rect.target.height,
        //   })
        // } else if (isOpen) {
        //   setRect({
        //     top: Math.abs(rect.body.top - rect.target.top) + rect.target.height,
        //     left: rect.target.left,
        //     width: rect.target.width,
        //     height: rect.target.height,
        //   })
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



  if (DropContentChild && rect.width) {
    // console.log('DropContentChild', rect)

    let dropClasses = [];
    if (position && align) {
      if (position !== 'bottom') {
        dropClasses.push('position-' + position)
      }
      if (align !== 'left' && rect.left) {

        const _isLeft = rect.left > 1400;

        // console.log('object', rect.left, rect.width)

        if (rect.left + rect.width > _isLeft) {
          // console.log('dropClasses', dropClasses)

        }

        dropClasses.push('drop-align-' + align)
      }
    }

    if (portal && dropRef.current) {


      // const {state, forceUpdate} = createPopper(togglerRef.current, dropRef.current);

      console.log('----', dropClasses)

      DropContentEl = withPortal({
        className: classNames('portal', className, dropClasses),
        style: {
          position: portal ? 'absolute' : 'auto',
          // top: fromEdge ? rect?.top - rect?.height : rect?.top,
          // left: rect?.left,
          transform: `translate(${Math.round((rect?.left - (1 / 2)) * 10) / 10}px, ${fromEdge ? rect?.top - rect?.height : rect?.top}px)`,
          width: rect?.width + 2,
          zIndex: 4,
          // transform: state.styles.popper.transform,
          ...DropContentChild.props.style
        },
        children: createElement('div', {
          ref: dropRef,
          className: 'drop'
        },
          DropContentChild),
        // ...state.attributes.popper
      })
    } else {
      console.log('------')
      DropContentEl = cloneElement(DropContentChild, {
        className: classNames('drop', DropContentChild.props.className, dropClasses),
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


  console.log('------------------', TogglerChild)


  
  
  if (TogglerChild) {
    // console.log('Toggler', Toggler);
    TogglerEl = cloneElement(Toggler.render({ children: TogglerChild.props.children }, null), {
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


  return (
    <div className={styles.dropdown}>
      <div ref={ref} className={classNames('wrap', className)}>
        <div ref={refEl} className={classNames('drop-wrap', { [variant]: variant }, {
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
    </div>
  )
});

DropDown.displayName = 'DropDown';

export default DropDown;