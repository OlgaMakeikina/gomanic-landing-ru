'use client'

import { useState, useEffect } from 'react'

interface VipCardProps {
  title: string
  description: string
  delay: number
}

export default function VipCard({ title, description, delay }: VipCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div 
      className={`vip-glass-card transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{
        background: '#444f55',
        borderRadius: '16px',
        padding: '1.5rem',
        textAlign: 'center' as const,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)',
        position: 'relative' as const,
        overflow: 'hidden' as const,
        minHeight: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h3 style={{
        color: '#FFFFFF', 
        fontSize: '16px',
        fontWeight: '900',
        letterSpacing: '0.05em',
        lineHeight: '1.3',
        wordBreak: 'break-word',
        hyphens: 'auto',
        fontFamily: 'Druk Super, Arial Black, sans-serif',
        opacity: '1'
      }}>
        {title}
      </h3>
      {description && (
        <p className="mt-2" style={{
          color: '#FFFFFF', 
          lineHeight: '1.4',
          fontFamily: 'Druk Super, Arial Black, sans-serif',
          fontSize: '14px',
          fontWeight: '900',
          opacity: '1'
        }}>
          <strong>{description}</strong>
        </p>
      )}
    </div>
  )
}
