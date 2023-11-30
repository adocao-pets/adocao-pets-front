interface HeaderProps {
  title: string
  children?: React.ReactNode
}

export const Header = ({ title, children }: HeaderProps) => {
  return (
    <header className="sticky top-0 flex w-full flex-col bg-white px-8 pb-2 pt-8">
      <h1 className="mb-12 border-b-2 border-gray-200  pb-5 text-center text-xl font-bold text-background">
        {title}
      </h1>
      {children}
    </header>
  )
}
