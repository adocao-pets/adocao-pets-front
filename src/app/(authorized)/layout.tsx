'use client'
import { ReactNode } from 'react'
import { Menu } from './components/Menu'
import { useAuth } from '@/hooks/useAuth'

interface UnauthorizedLayoutProps {
  children: ReactNode
}

export default function AuthorizedLayout({
  children,
}: UnauthorizedLayoutProps) {
  useAuth(true)

  return (
    <div className="flex h-full bg-background">
      <Menu />
      <main className="flex w-full flex-col overflow-auto rounded-2xl bg-white">
        {children}
      </main>
    </div>
  )
}
