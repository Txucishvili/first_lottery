import React, { cloneElement, createElement, forwardRef } from 'react'
import { useOutsideClick } from 'src/hooks/useOutsideClick';
import IconWrap from './IconWrap';
import style from '@/styles/components/dropdown.module.scss';
import DropDown from '../Shared/DropDown';
import classNames from 'classnames';


// eslint-disable-next-line react/display-name
export const Toggler = forwardRef(({ children, showIcon, className, ...props }, ref) => {
  return <div ref={ref} className={classNames(className, 'dropdown-toggle flx flxAI ')} {...props}>
    <div>{children}</div>
    {showIcon ? <div>
      <IconWrap name='ArrowSvg' className={'color-icon-gray'} />
    </div> : null}
  </div>
});

Toggler.key = 'Toggler';

// eslint-disable-next-line react/display-name
export const Body = forwardRef(({ children, showIcon, className, ...props }, ref) => {
  console.log('className', className)
  return <div className={classNames('dropdown-body', className)}>
    {children}
  </div>
});

Body.key = 'Body';


// eslint-disable-next-line react/display-name
const SimpleDropDown = forwardRef((
  { children, showIcon = true, overflow = true, className, open = false, ...props }
  , refs) => {
  const { isOpen, setIsOpen, ref } = useOutsideClick(open);

  const isSingleChild = (children instanceof Array);
  const DropContentChild = isSingleChild
    ? children.find((c) => c.type.key == Body.key)
    : null;

  // !!!! change to type checking
  const TogglerChild = isSingleChild ? children.find((c) => {
    return c.type.key == Toggler.key
  }) : null;


return <div className={style.simpleDropDown} ref={ref}>
    <div className={classNames('dropdown', className, {
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
          className={classNames(DropContentChild.props.className)}
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

export default SimpleDropDown;