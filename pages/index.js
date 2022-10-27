import classNames from 'classnames'
import Head from 'next/head'
import Image from 'next/image'
import Jackpot from '../pageComponents/Jackpot'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (<>
    <div className={classNames(styles.appPageWrapper, 'layout--wrap')}>
      <Jackpot />
    </div>
  </>)
}
