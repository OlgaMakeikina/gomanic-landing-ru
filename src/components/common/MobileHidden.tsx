'use client'

import React from 'react'

interface MobileHiddenProps {
  children: React.ReactNode
  className?: string
}

export default function MobileHidden({ children, className = '' }: MobileHiddenProps) {
  return (
    <div className={`hidden lg:block ${className}`}>
      {children}
    </div>
  )
}

export function DesktopHidden({ children, className = '' }: MobileHiddenProps) {
  return (
    <div className={`block lg:hidden ${className}`}>
      {children}
    </div>
  )
}
