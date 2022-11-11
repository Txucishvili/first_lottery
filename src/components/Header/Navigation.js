import Link from 'next/link'
import React from 'react'
import styles from '../../../styles/components/navigation.module.scss'

export default function Navigation({ navigation }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.list}>
          {navigation.map((nav) => {
            return <div key={nav.slug} className={styles.listItem}>
              <Link href={nav.slug} legacyBehavior>
                <a>
                  {nav.name}
                </a>
              </Link>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
