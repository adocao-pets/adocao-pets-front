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
      <main className="bg-white flex w-full flex-col rounded-2xl p-8">
        {children}
      </main>
    </div>
  )
}
