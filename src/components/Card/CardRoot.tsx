import { ReactNode } from 'react'

interface CardRootProps {
  children: ReactNode
  title?: string
  bulletIcon?: ReactNode
}

export const CardRoot = ({ children, title, bulletIcon }: CardRootProps) => {
  return (
    <div className="absolute bottom-0 flex h-fit w-full flex-col gap-5 rounded-t-3xl bg-white px-12 py-10 lg:relative lg:max-w-xl lg:rounded-b-3xl ">
      {bulletIcon && (
        <div className="absolute left-1/2 top-[-3rem] translate-x-[-50%] rounded-full bg-white p-2">
          <div className="rounded-full border-2 border-blue-200 p-4 text-4xl text-blue-500">
            {bulletIcon}
          </div>
        </div>
      )}
      <h1 className="text-center text-2xl font-bold text-gray-800 lg:text-3xl">
        {title}
      </h1>
      {children}
    </div>
  )
}
