'use client'

import { useEffect, useState } from 'react'
import { supabase, type ContactSubmission } from '@/lib/supabase'

export default function AdminSubmissionsPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchSubmissions()
  }, [])

  async function fetchSubmissions() {
    setIsLoading(true)
    const { data } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })

    if (data) {
      setSubmissions(data)
    }
    setIsLoading(false)
  }

  if (isLoading) {
    return <div className="text-center py-12">Loading submissions...</div>
  }

  return (
    <div className="space-y-8">
      <h2 className="font-serif text-3xl font-light">Contact Submissions</h2>

      <div className="space-y-6">
        {submissions.map((submission) => (
          <div key={submission.id} className="bg-secondary-white p-8 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif text-xl font-light">{submission.name}</h3>
                <p className="text-sm font-light text-primary-black/60 mt-1">
                  {new Date(submission.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
              <span className="px-4 py-2 bg-accent-earth/20 text-xs uppercase tracking-wider font-light">
                {submission.event_type}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-sm font-light">
              <div>
                <span className="text-primary-black/60 uppercase tracking-wider text-xs block mb-1">
                  Email
                </span>
                <span>{submission.email}</span>
              </div>

              {submission.phone && (
                <div>
                  <span className="text-primary-black/60 uppercase tracking-wider text-xs block mb-1">
                    Phone
                  </span>
                  <span>{submission.phone}</span>
                </div>
              )}

              {submission.guest_count && (
                <div>
                  <span className="text-primary-black/60 uppercase tracking-wider text-xs block mb-1">
                    Guest Count
                  </span>
                  <span>{submission.guest_count}</span>
                </div>
              )}

              {submission.event_date && (
                <div>
                  <span className="text-primary-black/60 uppercase tracking-wider text-xs block mb-1">
                    Event Date
                  </span>
                  <span>{submission.event_date}</span>
                </div>
              )}
            </div>

            {submission.message && (
              <div className="pt-4">
                <span className="text-primary-black/60 uppercase tracking-wider text-xs block mb-2">
                  Message
                </span>
                <p className="text-sm font-light leading-relaxed">{submission.message}</p>
              </div>
            )}
          </div>
        ))}

        {submissions.length === 0 && (
          <div className="text-center py-12 text-primary-black/40 font-light">
            No submissions yet.
          </div>
        )}
      </div>
    </div>
  )
}
