"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuLink = ({item}) => {

  const pathname = usePathname()

  return (
    <Link href={item.path} className={'flex items-center p-2 pr-20 pl-12 hover:bg-zinc-700 hover:text-slate-300'}>
      <span className='pr-2'>{item.icon}</span>
      {item.title}
    </Link>
  )
}

export default MenuLink