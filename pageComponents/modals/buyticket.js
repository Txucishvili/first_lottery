import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/components/buyTicketModal.module.scss'
import classNames from 'classnames'
import Input from 'src/Shared/Input'
import Button from 'src/Shared/Button';
import { getOnlyNum } from 'src/utils';

export default function BuyTicketModal(props) {
  const focusEl = useRef();
  const [state, setState] = useState({
    count: 100,
    price: 10,
    points: 100
  })

  useEffect(() => {
    if (focusEl && focusEl.current) {
      focusEl.current.focus();
    }
  }, []);

  const updateValue = (target, value) => {

  }

  const stateChange = (e) => {
    setState({ ...state, ...{ [e.target.name]: e.target.value } })
  }

  const changeCount = (valueOperator) => {
    let _newValue = parseFloat(state.count) + valueOperator;
    if (_newValue <= 0) {
      return;
    }

    if (typeof state.count == 'string' && !state.count.length) {
      _newValue = 0 + valueOperator;
    }
    setState({ ...state, ...{ count: _newValue } })
  }

  useEffect(() => {
  }, [state])

  const onCancel = () => {
    if (true) {
      alert('prompt')
    }
  }

  const onSubmit = () => {
    props.onAction('submit', state);
  }

  return (
    <div className={styles.container}>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('---- Form onSubmit')
        }}
        className={styles.wrap}>
        <div className={classNames(styles.headLine)}>
          <h4>
            ბილეთის შეძენა
          </h4>
        </div>
        <div className={classNames(styles.textArea, 'divide-36')}>
          <span>
            <div>გთხოვთ გაითვალისწინოთ, რომ ეს არის წვის ქულები, რაც გულისხმობს,<span className='text-red'>*</span></div>
            <div>რომ მისი შეძენის შემდეგ ქულები თქვენს ანგარიშზე არ დაემატება</div>
          </span>
        </div>
        <div className={classNames(styles.countArea, 'flx')}>
          <span style={{ width: 200 }} className={styles.inputField}>
            <div className={styles.inputFieldTitle}>რაოდენობა</div>
            <div className={classNames('flx', styles.wrap, styles.inputWrap, styles.outlined)}>
              <span className={styles.btnWrap}>
                <Button onClick={() => changeCount(-1)} full variant="text">-</Button>
              </span>
              <span className={styles.inputWrap}>
                <Input
                  value={state.count}
                  onBlur={(e) => {
                    console.log('e', e.target.value, state['count'])
                    if (!e.target.value.length) return;
                    setState({ ...state, ...{ count: getOnlyNum(e.target.value) ? getOnlyNum(e.target.value).join('') : '0' } })
                  }}
                  name="count"
                  onChange={stateChange}
                  variant="simple"
                  size="large"
                  placeholder="0" textAlign="center" ref={focusEl} />
              </span>
              <span className={styles.btnWrap}>
                <Button onClick={() => changeCount(+1)} full variant="text">
                  +
                </Button>
              </span>
            </div>
          </span>
          <div style={{ width: 74 }} className={classNames(styles.inputField)}>
            <div className={styles.inputFieldTitle}>ქულები</div>
            <div
              className={classNames(styles.inputWrap, styles.outlined)}>
              <Input
                onChange={stateChange}
                name="points"
                size="large"
                variant="simple"
                value={state.points}
                placeholder="0"
                textAlign="center"
              /></div>
          </div>
          <div style={{ width: 62 }} className={styles.inputField}>
            <div className={styles.inputFieldTitle}>ფასი</div>
            <div

              className={classNames(styles.inputWrap, styles.outlined)}>
              <Input
                onChange={stateChange}
                name="price"
                variant="simple"
                size="large"
                value={state.price}
                placeholder="0"
                textAlign="center"
              /></div>
          </div>
        </div>
        <div className={classNames(styles.btnsWrap, 'flxAll')}>
          <span className={styles.btn}>
            <Button className={'fontMT'} onClick={onCancel} full variant="outline" size="medium"  type='button' >გაუქმება</Button>
          </span>
          <span className={styles.btn}>
            <Button className={'fontMT'} onClick={onSubmit} full variant={'secondary'}  size="medium" type='submit' >ყიდვა</Button>
          </span>
        </div>
      </form>
    </div>
  )
}
