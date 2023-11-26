interface HeaderProps {
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="border-gray-200 w-full border-b-2 pb-5">
      <h1 className="text-center text-3xl font-bold text-background">
        {title}
      </h1>
    </header>
  )
}
