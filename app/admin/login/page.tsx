'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      router.push('/admin')
    } catch (err: any) {
      setError(err.message || 'Invalid credentials')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-beige">
      <div className="w-full max-w-md p-12 bg-secondary-white">
        <h1 className="font-serif text-4xl font-light mb-8 text-center">
          Admin Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm uppercase tracking-wider font-light">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-6 py-4 bg-secondary-beige border border-primary-black/20 focus:border-primary-black outline-none transition-colors duration-300 font-light"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm uppercase tracking-wider font-light">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-6 py-4 bg-secondary-beige border border-primary-black/20 focus:border-primary-black outline-none transition-colors duration-300 font-light"
            />
          </div>

          {error && (
            <p className="text-sm font-light text-red-700 bg-red-50 px-4 py-3 border border-red-200">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-4 bg-primary-black text-secondary-white text-sm uppercase tracking-widest font-light transition-all duration-500 hover:bg-primary-gray disabled:opacity-50"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}
