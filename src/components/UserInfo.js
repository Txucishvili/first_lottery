import React from 'react'
import { UserAvatar } from './UserAvatar'
import styles from '@/styles/components/header.module.scss';
import Button from 'src/Shared/Button';
import DropDown, { DropContent, Toggler } from '../Shared/DropDown';
import Link from 'next/link';
import IconWrap from './IconWrap';
import { useOutsideClick } from 'src/hooks/useOutsideClick';
import { AnimatePresence, motion } from 'framer-motion';

const userInfoContext = [
  { title: 'პროფილი', slug: '', url: '', icon: 'User' },
  { title: 'აქტიური ბილეთები', slug: '', url: '', icon: 'TicketOutline' },
  { title: 'ბილეთების ისტორია', slug: '', url: '/user/ticket-history', icon: 'History' },
  { title: 'ქულების რაოდენობა', slug: '', url: '/user/points', icon: 'AmountBox' },
  { title: 'როგორ მივიღო მონაწილეობა?', slug: '', url: '', icon: 'HandClick' },
  { title: 'გასვლა', slug: '', url: '', icon: 'LogOutRevert' }
]

export default function UserInfo() {
  const { isOpen, setIsOpen, ref } = useOutsideClick(false);


  return (
    <div>
      <div ref={ref} className={styles.userInfo}>
        <Button reset onClick={() => {
          setIsOpen(!isOpen);
        }}>
          <UserAvatar
            className={styles['userInfo-avatar']}
            name={' '}
            size={41}
            url={'http://localhost:3000/assets/images/avatar.png'} />
        </Button>
        <AnimatePresence>
          {isOpen ? <motion.div
            initial={{opacity: isOpen ? 0 : 1}}
            animate={{opacity: isOpen ? 1 : 0}}
            exit={{opacity: 0}}
            className={styles['userInfo-drop']}>
            <ul className={styles['userInfo-list']}>
              {userInfoContext.map((link, key) => {
                return <li key={link.title}>
                  <Link onClick={() => setIsOpen(false)} href={link.url}>
                    <div className={styles['userInfo-list-icon']}>
                      <IconWrap width={link.icon == 'User' ? 22 : 20} height={link.icon == 'User' ? 22 : 20} name={link.icon} />
                    </div>
                    <div>{link.title}</div>
                  </Link>
                </li>
              })}
            </ul>
          </motion.div> : null}
        </AnimatePresence>
      </div>
    </div>
  )
}
