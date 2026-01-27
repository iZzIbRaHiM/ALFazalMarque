'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function checkAuth() {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        router.push('/admin/login')
      } else {
        setIsAuthenticated(true)
      }
      
      setIsLoading(false)
    }
    
    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-black/20 border-t-primary-black rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm font-light">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-secondary-beige">
      <nav className="bg-primary-black text-secondary-white py-4">
        <div className="container-custom flex items-center justify-between">
          <h1 className="font-serif text-2xl font-light">Admin Panel</h1>
          <button
            onClick={async () => {
              await supabase.auth.signOut()
              router.push('/admin/login')
            }}
            className="text-sm uppercase tracking-wider font-light hover:opacity-60 transition-opacity duration-300"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="container-custom py-12">
        <div className="mb-8 flex gap-4 flex-wrap">
          <a
            href="/admin"
            className="px-6 py-3 bg-primary-black text-secondary-white text-sm uppercase tracking-wider font-light hover:bg-primary-gray transition-colors duration-300"
          >
            Events
          </a>
          <a
            href="/admin/gallery"
            className="px-6 py-3 border border-primary-black text-sm uppercase tracking-wider font-light hover:bg-primary-black hover:text-secondary-white transition-all duration-300"
          >
            Gallery
          </a>
          <a
            href="/admin/submissions"
            className="px-6 py-3 border border-primary-black text-sm uppercase tracking-wider font-light hover:bg-primary-black hover:text-secondary-white transition-all duration-300"
          >
            Contact Submissions
          </a>
        </div>
        {children}
      </div>
    </div>
  )
}
