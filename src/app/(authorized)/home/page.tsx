'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Home } from './Home'

export default function HomePage() {
  const { replace } = useRouter()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) replace('/login')
  }, [])
  return <Home></Home>
}
