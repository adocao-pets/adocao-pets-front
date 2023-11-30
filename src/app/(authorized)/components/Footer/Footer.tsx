import { ReactNode } from 'react'

interface FooterProps {
  children: ReactNode
}

export const Footer = ({ children }: FooterProps) => {
  return (
    <footer className="sticky bottom-5 flex justify-end rounded-lg bg-white px-6 py-4 shadow-all">
      {children}
    </footer>
  )
}
