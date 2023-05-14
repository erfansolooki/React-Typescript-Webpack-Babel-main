import { useLayoutEffect, useRef, useState } from 'react'
import styles from './style.module.css'
import * as RiIcons from 'react-icons/ri'
import { gsap } from 'gsap'
import * as React from 'react'
import ControlledAccordions from '../accordion/view'

export const Drawer = () => {
  const [show, setShow] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleShow = () => {
    setShow((prev) => !prev)
  }

  const handleHide = () => {
    setShow(false)
  }

  useLayoutEffect(() => {
    if (show) {
      gsap.to(menuRef.current, {
        left: '0',
      })
    } else {
      gsap.to(menuRef.current, {
        left: '-320px',
      })
    }
  }, [show])

  return (
    <>
      <button className={styles['drawer-icon']} onClick={handleShow}>
        <RiIcons.RiMenu2Line size={18} />
      </button>
      <div ref={menuRef} className={styles['container']}>
        <button className={styles['close-btn']} onClick={handleHide}>
          <RiIcons.RiCloseLine size={20} />
        </button>
        <ControlledAccordions />
      </div>
    </>
  )
}
