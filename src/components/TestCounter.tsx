'use client'

import { useState, useEffect } from 'react'

export default function TestCounter() {
  const [seconds, setSeconds] = useState(10) // 10 секунд для теста
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log('🚀 Test Counter started with', seconds, 'seconds')
    
    const interval = setInterval(() => {
      setSeconds(prev => {
        const newValue = prev - 1
        console.log('⏰ Test Counter:', newValue)
        
        if (newValue <= 0) {
          console.log('✅ Test Counter finished!')
          return 0
        }
        return newValue
      })
    }, 1000)

    return () => {
      console.log('🛑 Test Counter cleanup')
      clearInterval(interval)
    }
  }, [])

  return (
    <div 
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: 'red',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '20px',
        fontWeight: 'bold',
        zIndex: 9999
      }}
    >
      TEST: {mounted ? seconds : '--'}s
    </div>
  )
}
