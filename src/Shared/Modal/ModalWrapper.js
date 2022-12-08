import React, { cloneElement, Component, createElement, memo, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom';
import styles from '../../../styles/components/modal.module.scss'
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import IconWrap from '@/components/IconWrap';
import classNames from 'classnames';
import Button from '../Button';
import { el } from 'date-fns/locale';

export const CloseAction = (props) => {
  return <div>{props.children}</div>
}

export const SimpleModal = (props) => {
  const { open, onClose, width = 200, height = 200, variant = 'center' || 'top' || 'page' } = props;
  const overlay = useAnimationControls();
  const modal = useAnimationControls();
  const [isOpen, setOpen] = useState(open)
  const [openState, setOpenState] = useState(open);

  const _childrens = typeof props.children.type !== 'undefined' ? [props.children] : [].concat(props.children);

  useEffect(() => {
    return () => {
    }
  }, [])

  useEffect(() => {
    if (openState) {
      overlay.start({ opacity: 1 });
      modal.start({ scale: 1, translateY: 0, opacity: 1 });
      // setOpenState(false);
      // document.body.style.overflowY = 'hidden';
      // document.getElementById('__next').style.overflowY = 'scroll';
      // document.getElementById('__next').style.height = '100vh';
    } else {
      // document.body.style.overflowY = 'visible';
      // console.log('object')
    }
  }, [openState]);

  const onModalClose = async () => {
    const a = overlay.start({ opacity: 0 }, { delay: 0 });
    modal.start({ opacity: 0, translateY: 50 });
    setOpenState(false);

    await Promise.all([a]).then(async (r) => {
      // await delay();
      setOpenState(false);
      setOpen(false);
      onClose();
    })
  }

  const ReturnComponent = _childrens.filter((c) => c.type !== CloseAction);

  return <AnimatePresence>
    <div className={classNames(styles.container, props.className)}>
      {true &&
        <motion.div

          initial={{ opacity: isOpen ? 1 : 0 }}
          animate={overlay}
          onClick={onModalClose} className={styles.overlay}></motion.div>
      }
      <div className={classNames({
        [styles[`variant-${variant}`]]: styles[`variant-${variant}`]
      })}>
        <motion.div
          style={{ width, height }}
          initial={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0, translateY: isOpen ? 50 : 0 }}
          animate={modal} className={styles.modalContent}>
          <div className={styles.modalHeader}></div>
          <div className={styles.closeBtn} onClick={onModalClose}>

            {props.closeComponent ? props.closeComponent : <IconWrap size={18} name={'Close'} />}

          </div>
          <div className={styles.modalBody}>
            {ReturnComponent.map((c, k) => {
              return cloneElement(c, c.type instanceof Function ? { isOpen: openState, key: k } : { key: k })
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </AnimatePresence>
}

export const ModalBase = (props) => {
  const { open, align, onClose, width, height, variant = 'center' || 'top' || 'page' } = props;
  const overlay = useAnimationControls();
  const modal = useAnimationControls();
  const [isOpen, setOpen] = useState(open)
  const [openState, setOpenState] = useState(open);
  const targetRef = useRef();

  const _childrens = typeof props.children.type !== 'undefined' ? [props.children] : [].concat(props.children);

  useEffect(() => {
    document.documentElement.classList.add('no-scroll');

    return () => {
      document.documentElement.classList.remove('no-scroll');
    }
  }, [])

  useEffect(() => {
    if (openState) {
      overlay.start({ opacity: 1 });
      modal.start({ scale: 1, translateY: 0, opacity: 1 });
    }
  }, [modal, openState, overlay]);

  const onModalClose = async () => {
    const a = overlay.start({ opacity: 0 }, { delay: 0 });
    modal.start({ opacity: 0, translateY: 50 });
    setOpenState(false);

    await Promise.all([a]).then(async (r) => {
      // await delay();
      setOpenState(false);
      setOpen(false);
      onClose && onClose();
    })
  }

  // !! move to context
  const onAction = (action = 'close' | 'open', value) => {
    // const {action = 'close' || 'open', value} = props;
    switch (action) {
      case 'open':
        setOpen(true);
        break;
      case 'close':
        onModalClose();
        break;
      default:
        break;
    }
  }

  const onBackDropClose = (e) => {
    // !!!!!!!
    if (targetRef.current.firstChild === e.target) {
      onModalClose();
    } else {
      // e.preventDefault();
      // e.stopPropagation();
    }
  }

  const ReturnComponent = _childrens.filter((c) => c.type !== CloseAction);

  return <AnimatePresence>
    <div className={classNames(styles.container, styles.wrap, {
      // [styles.wrap]: variant == 'center'
    }, props.className)}>
      {true &&
        <motion.div
          initial={{ opacity: isOpen ? 1 : 0 }}
          animate={overlay}
          onClick={onModalClose} className={styles.overlay}></motion.div>
      }
      <div
        ref={targetRef}
        className={classNames(styles.content, {
          [styles[`variant-${variant}`]]: styles[`variant-${variant}`],
          [styles[`align-${align}`]]: styles[`align-${align}`]
        })}
        onClickCapture={onBackDropClose}
      >
        <motion.div
          style={Object.assign({}, !!width ? { width } : {}, !!height ? { height } : {})}
          initial={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0, translateY: isOpen ? 50 : 0 }}
          animate={modal}
          className={styles.modalContent}>
          {ReturnComponent.map((c, k) => {
            return cloneElement(c, c.type instanceof Function ? { isOpen: openState, key: k, onAction: onAction } : { key: k })
          })}
        </motion.div>
      </div>
    </div>
  </AnimatePresence>
}

export function ModalWrapper(props) {
  const { open, children } = props;
  const ref = useRef()
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    ref.current = document.getElementById('modals');
    // setMounted(true);
    return () => {
    }
  }, [])

  const Element = [].concat(props.children).map((c, k) => {
    return cloneElement(c, {
      onClose: props.onClose,
      open: open,
      key: k
    })
  })

  useEffect(() => {
    if (!document.getElementById('modals') && !open) {
      return;
    }

    if (!open) {
      if (ref.current && ref.current.childElementCount == 0) {
        ref.current.remove()
        setMounted(false);
      }
    } else {
      if (!document.getElementById('modals')) {
        const _el = document.createElement('div');
        _el.id = 'modals';
        document.body.appendChild(_el);
      }
      ref.current = document.getElementById('modals');
      setMounted(true);
    }
  }, [open])


  return mounted ?
    open ?
      // Element
      createPortal(Element, ref.current)
      : null
    : null
}

export default ModalWrapper
