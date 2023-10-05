import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

interface UnauthorizedLayoutProps {
  children: ReactNode
}

export default function UnauthorizedLayout({
  children,
}: UnauthorizedLayoutProps) {
  return (
    <div className="h-full grid-cols-2 bg-[url('/dog.png')] bg-[length:914px] bg-[50%_35%] bg-no-repeat lg:grid lg:bg-[-25%_25%] lg:p-12 ">
      <aside className="hidden lg:block">
        <Link className="block w-fit" href="/">
          <Image src="/logo.png" width={120} height={94} alt="Paw buddy" />
        </Link>
      </aside>
      {children}
    </div>
  )
}
