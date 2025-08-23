'use client'
import { useState } from 'react'
import ContactHeader from './ContactHeader'
import BookingForm from '@/components/tracking/BookingForm'

export default function ContactSection() {
  return (
    <section id="agendamento" className="vogue-section" style={{backgroundColor: '#444e55', color: '#FEFEFE'}} aria-labelledby="contact-heading">
      <div className="vogue-container">
        <div className="max-w-2xl mx-auto">
          <ContactHeader />
          <BookingForm className="mt-8" />
        </div>
      </div>
    </section>
  )
}
