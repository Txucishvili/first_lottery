import Link from 'next/link'
import React from 'react'
import { useAppContext } from 'src/store'
import styles from '../../../styles/components/navigation.module.scss'

export default function Navigation({ navigation }) {
  const [_navigation, set] = useAppContext()

  
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.list}>
          {_navigation.appNavigation.map((nav) => {
            return <div key={nav.slug} className={styles.listItem}>
              <Link href={nav.slug} legacyBehavior>
                  {nav.name}
              </Link>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
