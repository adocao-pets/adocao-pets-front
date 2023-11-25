import { ReactNode } from 'react'
import { Menu } from './components/Menu'

interface UnauthorizedLayoutProps {
  children: ReactNode
}

export default function UnauthorizedLayout({
  children,
}: UnauthorizedLayoutProps) {
  return (
    <div className="flex h-full bg-background">
      <Menu />
      {children}
    </div>
  )
}
