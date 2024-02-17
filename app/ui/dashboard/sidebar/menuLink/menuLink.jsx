"use client"

import Link from 'next/link'
import styles from './MenuLink.module.css'
import { usePathname } from 'next/navigation'

const MenuLink = ({item}) => {



  return (
    <Link href={item.path}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink