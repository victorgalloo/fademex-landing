'use client'

import { useState } from 'react'

interface FormData {
  nombre: string
  empresa: string
  telefono: string
  email: string
  mensaje: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    mensaje: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario')
      }

      setStatus('success')
      setFormData({
        nombre: '',
        empresa: '',
        telefono: '',
        email: '',
        mensaje: ''
      })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Error desconocido')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-label uppercase text-carbon">Nombre Completo</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full bg-white border border-carbon/20 rounded-xl px-4 py-3.5 text-base text-carbon placeholder:text-mercury focus:border-carbon focus:outline-none transition-colors"
            placeholder="Ej. Roberto Sánchez"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-label uppercase text-carbon">Empresa</label>
          <input
            type="text"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            required
            className="w-full bg-white border border-carbon/20 rounded-xl px-4 py-3.5 text-base text-carbon placeholder:text-mercury focus:border-carbon focus:outline-none transition-colors"
            placeholder="Ej. Industria S.A."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-label uppercase text-carbon">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="w-full bg-white border border-carbon/20 rounded-xl px-4 py-3.5 text-base text-carbon placeholder:text-mercury focus:border-carbon focus:outline-none transition-colors"
            placeholder="Ej. +52 (55) 1234-5678"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-label uppercase text-carbon">Correo Corporativo</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-white border border-carbon/20 rounded-xl px-4 py-3.5 text-base text-carbon placeholder:text-mercury focus:border-carbon focus:outline-none transition-colors"
            placeholder="nombre@empresa.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-label uppercase text-carbon">Detalles del Proyecto</label>
        <textarea
          rows={4}
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
          className="w-full bg-white border border-carbon/20 rounded-xl px-4 py-3.5 text-base text-carbon placeholder:text-mercury focus:border-carbon focus:outline-none transition-colors resize-none"
          placeholder="Consumo actual, ubicación, objetivos..."
        />
      </div>
      {status === 'success' && (
        <div className="bg-white border border-carbon rounded-xl p-4 text-sm text-carbon">
          ¡Mensaje enviado! Te hemos enviado un correo de confirmación.
        </div>
      )}

      {status === 'error' && (
        <div className="bg-white border border-red-900/40 rounded-xl p-4 text-sm text-red-900">
          {errorMessage || 'Error al enviar el mensaje. Por favor intenta de nuevo.'}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center rounded-full bg-carbon hover:bg-onyx text-white px-[22px] py-[18px] text-sm leading-none transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Enviando…' : 'Solicitar propuesta técnica'}
      </button>
    </form>
  )
}
