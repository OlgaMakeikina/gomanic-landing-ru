'use client'
import { MasterConfig } from '@/types/master'
import ContactHeader from './ContactHeader'
import BookingForm from '@/components/tracking/BookingForm'

interface ContactSectionProps {
  masterData?: MasterConfig | null;
}

export default function ContactSection({ masterData }: ContactSectionProps) {
  return (
    <section 
      id="agendamento" 
      className="vogue-section relative" 
      style={{
        backgroundColor: '#444e55', // fallback color
        backgroundImage: 'url(/images/forma/contact-bg.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        color: '#FEFEFE'
      }}
      aria-labelledby="contact-heading"
    >
      {/* Dark overlay consistent with vogue style */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundColor: 'rgba(68, 78, 85, 0.8)',
          backgroundBlendMode: 'multiply'
        }}
      />
      
      {/* Content with vogue container */}
      <div className="vogue-container relative z-10">
        <div className="max-w-2xl mx-auto">
          <ContactHeader />
          <BookingForm className="mt-20" />
        </div>
      </div>
    </section>
  )
}
