'use client'

import React from 'react'
import Link from 'next/link'
import { IconBaseProps } from 'react-icons'
import { variants } from './NavLink.styles'
import { usePathname } from 'next/navigation'
interface NavLinkProps {
  href: string
  icon: React.ComponentType<IconBaseProps>
  children: React.ReactNode
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  icon: Icon,
  children,
}) => {
  const pathname = usePathname()
  const isSelected = pathname === href
  console.log(isSelected)

  return (
    <Link href={href} passHref className={variants({ selected: isSelected })}>
      <Icon size={24} />
      <span>{children}</span>
    </Link>
  )
}
