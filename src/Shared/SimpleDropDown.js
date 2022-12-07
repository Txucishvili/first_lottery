import React, { cloneElement, createElement, forwardRef, memo, useImperativeHandle } from 'react'
import { useOutsideClick } from 'src/hooks/useOutsideClick';
import IconWrap from '../components/IconWrap';
import style from '@/styles/components/dropdown.module.scss';
import DropDown from './DropDown';
import classNames from 'classnames';


// eslint-disable-next-line react/display-name
export const Toggler = forwardRef(({ children, showIcon, className, ...props }, ref) => {
  return <div ref={ref} className={classNames(className, 'dropdown-toggle flx flxAI ')} {...props}>
    <div>{children}</div>
    {showIcon ? <div>
      <IconWrap name='ArrowSvg' className={'color-icon-gray icon-area'} />
    </div> : null}
  </div>
});

Toggler.key = 'Toggler';

// eslint-disable-next-line react/display-name
export const Body = forwardRef(({ children, style, showIcon, className, ...props }, ref) => {
  return <div style={style} className={classNames('dropdown-body', className)}>
    {children}
  </div>
});

Body.key = 'Body';


// eslint-disable-next-line react/display-name
const SimpleDropDown = forwardRef((
  { children, align = 'left', showIcon = true, overflow = true, className, open = false, ...props }
  , refs) => {
  const { isOpen, setIsOpen, ref } = useOutsideClick(open);



  useImperativeHandle(refs, () => ({
    open: (e = true) => {
      setIsOpen(e);
    },
    isOpen: (e) => {
      return isOpen
    },
  }));


  const isSingleChild = (children instanceof Array);
  const DropContentChild = isSingleChild
    ? children.find((c) => c.type.key == Body.key)
    : null;

  // !!!! change to type checking
  const TogglerChild = isSingleChild ? children.find((c) => {
    return c.type.key == Toggler.key
  }) : null;

  // console.log('object', DropContentChild.props.style)


  return <div className={style.simpleDropDown} ref={refs}>
    <div ref={ref} className={classNames('dropdown', className, {
      open: isOpen,
      overflow: overflow
    })}>
      <Toggler
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        {...TogglerChild.props}
        showIcon={showIcon}
      >
        {TogglerChild.props.children}
      </Toggler>
      {/* <Toggler>
        Toggler
        
      </Toggler> */}
      {isOpen
        ? <Body
          style={DropContentChild.props.style}
          className={classNames(DropContentChild.props.className, {
            [`align-${align}`]: align && align !== 'left'
          })}
        >
          {DropContentChild.props.children}
        </Body>
        : null}
    </div>
  </div>
})


SimpleDropDown.Toggler = Toggler;

// eslint-disable-next-line react/display-name
SimpleDropDown.Body = Body;

const _SimpleDropDown = memo(SimpleDropDown, () => true)

export default SimpleDropDown;