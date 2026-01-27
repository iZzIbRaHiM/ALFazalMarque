'use client'

import { useEffect, useState } from 'react'
import { supabase, type Event } from '@/lib/supabase'

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    category: 'wedding' as 'wedding' | 'corporate' | 'social',
    image_url: '',
    featured: false,
  })

  useEffect(() => {
    fetchEvents()
  }, [])

  async function fetchEvents() {
    setIsLoading(true)
    const { data } = await supabase
      .from('events')
      .select('*')
      .order('created_at', { ascending: false })

    if (data) {
      setEvents(data)
    }
    setIsLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (editingEvent) {
      // Update existing event
      const { error } = await supabase
        .from('events')
        .update(formData)
        .eq('id', editingEvent.id)

      if (!error) {
        fetchEvents()
        resetForm()
      }
    } else {
      // Create new event
      const { error } = await supabase.from('events').insert([formData])

      if (!error) {
        fetchEvents()
        resetForm()
      }
    }
  }

  const handleEdit = (event: Event) => {
    setEditingEvent(event)
    setFormData({
      title: event.title,
      description: event.description || '',
      date: event.date || '',
      category: event.category || 'wedding',
      image_url: event.image_url || '',
      featured: event.featured,
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this event?')) {
      const { error } = await supabase.from('events').delete().eq('id', id)

      if (!error) {
        fetchEvents()
      }
    }
  }

  const resetForm = () => {
    setShowForm(false)
    setEditingEvent(null)
    setFormData({
      title: '',
      description: '',
      date: '',
      category: 'wedding',
      image_url: '',
      featured: false,
    })
  }

  if (isLoading) {
    return <div className="text-center py-12">Loading events...</div>
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="font-serif text-3xl font-light">Manage Events</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-3 bg-primary-black text-secondary-white text-sm uppercase tracking-wider font-light hover:bg-primary-gray transition-colors duration-300"
        >
          {showForm ? 'Cancel' : 'Add New Event'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-secondary-white p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm uppercase tracking-wider font-light">
                Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 bg-secondary-beige border border-primary-black/20 focus:border-primary-black outline-none font-light"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm uppercase tracking-wider font-light">
                Category *
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                className="w-full px-4 py-3 bg-secondary-beige border border-primary-black/20 focus:border-primary-black outline-none font-light"
              >
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate</option>
                <option value="social">Social</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm uppercase tracking-wider font-light">
                Date
              </label>
              <input
                type="text"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 bg-secondary-beige border border-primary-black/20 focus:border-primary-black outline-none font-light"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm uppercase tracking-wider font-light">
                Image URL *
              </label>
              <input
                type="text"
                required
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                className="w-full px-4 py-3 bg-secondary-beige border border-primary-black/20 focus:border-primary-black outline-none font-light"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm uppercase tracking-wider font-light">
              Description
            </label>
            <textarea
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 bg-secondary-beige border border-primary-black/20 focus:border-primary-black outline-none font-light resize-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-5 h-5"
            />
            <label htmlFor="featured" className="text-sm uppercase tracking-wider font-light">
              Featured Event
            </label>
          </div>

          <button
            type="submit"
            className="px-8 py-3 bg-primary-black text-secondary-white text-sm uppercase tracking-wider font-light hover:bg-primary-gray transition-colors duration-300"
          >
            {editingEvent ? 'Update Event' : 'Create Event'}
          </button>
        </form>
      )}

      <div className="bg-secondary-white overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-primary-black/20">
            <tr>
              <th className="px-6 py-4 text-left text-sm uppercase tracking-wider font-light">Title</th>
              <th className="px-6 py-4 text-left text-sm uppercase tracking-wider font-light">Category</th>
              <th className="px-6 py-4 text-left text-sm uppercase tracking-wider font-light">Featured</th>
              <th className="px-6 py-4 text-left text-sm uppercase tracking-wider font-light">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-b border-primary-black/10">
                <td className="px-6 py-4 font-light">{event.title}</td>
                <td className="px-6 py-4 font-light">{event.category}</td>
                <td className="px-6 py-4 font-light">{event.featured ? 'Yes' : 'No'}</td>
                <td className="px-6 py-4 space-x-4">
                  <button
                    onClick={() => handleEdit(event)}
                    className="text-sm font-light hover:opacity-60 transition-opacity duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="text-sm font-light text-red-700 hover:opacity-60 transition-opacity duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {events.length === 0 && (
          <div className="text-center py-12 text-primary-black/40 font-light">
            No events found. Create your first event.
          </div>
        )}
      </div>
    </div>
  )
}
