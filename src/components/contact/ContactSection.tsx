'use client'
import { useState } from 'react'
import { initialFormData } from './data'
import ContactHeader from './ContactHeader'
import ContactForm from './ContactForm'

export default function ContactSection() {
  const [formData, setFormData] = useState(initialFormData)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Agendamento enviado! Entraremos em contato em breve.')
  }

  return (
    <section id="agendamento" className="vogue-section" style={{backgroundColor: '#444e55', color: '#FEFEFE'}} aria-labelledby="contact-heading">
      <div className="vogue-container">
        <div className="max-w-2xl mx-auto">
          <ContactHeader />
          <ContactForm 
            formData={formData}
            onFormDataChange={setFormData}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  )
}
