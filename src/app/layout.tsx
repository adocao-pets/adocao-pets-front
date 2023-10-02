import './global.css'

import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { Noto_Sans as NotoSans } from 'next/font/google'

const inter = NotoSans({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Adoção de Pets',
  description: 'Plataforma de adoçõa de pets',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
