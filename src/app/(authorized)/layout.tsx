'use client'
import { ReactNode } from 'react'
import { Menu } from './components/Menu'
import { useAuth } from '@/hooks/useAuth'

interface UnauthorizedLayoutProps {
  children: ReactNode
}

export default function UnauthorizedLayout({
  children,
}: UnauthorizedLayoutProps) {
  useAuth(false)

  return (
    <div className="flex h-full bg-background">
      <Menu />
      <main className="flex w-full flex-col overflow-auto rounded-2xl bg-white">
        {children}
      </main>
    </div>
  )
}
