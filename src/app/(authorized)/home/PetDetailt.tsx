import { ReactNode } from 'react'

interface PetDetailProps {
  title: string
  children: ReactNode
}

export const PetDetail = ({ title, children }: PetDetailProps) => {
  return (
    <div className="mb-3 flex w-full items-center justify-between border-b border-b-slate-200 pb-3">
      <span className="text-sm text-slate-600">{title}</span>
      <span className="text-md font-medium">{children}</span>
    </div>
  )
}
