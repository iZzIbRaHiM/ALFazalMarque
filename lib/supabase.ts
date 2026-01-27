import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: typeof window !== 'undefined',
  },
})

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
