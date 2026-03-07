import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTI4MDAsImV4cCI6MTk2MDc2ODgwMH0.placeholder-key'

// Only create Supabase client if valid URL is provided
const isValidSupabaseUrl = supabaseUrl && !supabaseUrl.includes('placeholder')

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: typeof window !== 'undefined',
  },
})

export const isSupabaseConfigured = isValidSupabaseUrl

// Database Types
export interface Event {
  id: string
  title: string
  description: string
  date: string
  category: 'wedding' | 'corporate' | 'social'
  image_url: string
  featured: boolean
  created_at: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  order: number
  created_at: string
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string
  event_type: string
  guest_count: number
  event_date: string
  message: string
  created_at: string
}

export interface GalleryImage {
  id: string
  url: string
  alt: string
  category: string
  featured: boolean
  order: number
  created_at: string
}
