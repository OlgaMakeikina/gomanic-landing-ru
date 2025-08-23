'use client'

import { useCountdown, formatTimeForPromo } from '@/hooks/useCountdown'

export default function TestCountdown() {
  const { time, mounted } = useCountdown()
  
  if (!mounted) {
    return <div>Загружается...</div>
  }

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: '#fff', 
      padding: '20px', 
      border: '2px solid #000', 
      zIndex: 9999,
      fontFamily: 'monospace',
      fontSize: '14px'
    }}>
      <h3>🔥 TEST COUNTDOWN 🔥</h3>
      <div><strong>Days:</strong> {time.days}</div>
      <div><strong>Hours:</strong> {time.hours}</div>  
      <div><strong>Minutes:</strong> {time.minutes}</div>
      <div style={{ 
        color: '#ff0000', 
        fontWeight: 'bold',
        fontSize: '16px' 
      }}>
        <strong>Seconds:</strong> {time.seconds} ⏰
      </div>
      <div style={{ marginTop: '10px', fontSize: '18px', color: '#0066cc' }}>
        <strong>Promo Format:</strong><br/>
        {formatTimeForPromo(time)}
      </div>
      <div style={{ fontSize: '12px', marginTop: '10px', color: '#666' }}>
        ⚡ Updates every second
      </div>
    </div>
  )
}
