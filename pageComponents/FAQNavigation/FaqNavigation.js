import classNames from 'classnames'
import React from 'react'
import styles from './FAQNavigation.module.scss'

export const NavItem = (props) => {
  return <div className='col-sm-6 col-md-6 col-xl-3'>
    <div className={classNames(styles.listItemWrap)}>
      <div className={styles.dropEl}></div>
      <div className={styles.listItem}>
        <div className={styles.listImageWrap}>
          <div className={styles.listImage}>
            <img src={props.image} />
          </div>
        </div>
        <div className={styles.listTextWrap}>
          {props.name && <div className={styles.listTitle}>
            {props.name}
          </div>}
          {props.desc && <div className={styles.listDesc}>
            {props.desc}
          </div>}
        </div>
      </div>
    </div>
  </div>
}

// 

export default function FAQNavigation(props) {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.headLine}>
          <h4 className={styles.headLineText}>
            <div className={styles.headLine}>
              როგორ დავაგროვო გათამაშების ბილეთები?
            </div>
          </h4>
          <h5 className={styles.headLineDesc}>
            <div className={styles.headLine}>
              როგორ დავაგროვო გათამაშების ბილეთები?
            </div>
          </h5>
        </div>
        <div className={classNames(styles.content)}>
          <div className={classNames(styles.listWrap, 'row')}>
            {props.navigation.map((c, k) => {
              return <NavItem {...c} key={k} />
            })}
          </div>
          <div className={styles.loadMore}>
            <span>მეტის ნახვა</span>
          </div>
        </div>
      </div>
    </div>
  )
}
