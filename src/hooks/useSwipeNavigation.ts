'use client'

import { useRef, useCallback } from 'react'

interface SwipeNavigationProps {
  onSwipeLeft: () => void
  onSwipeRight: () => void
  threshold?: number
  preventDefault?: boolean
  enableMouse?: boolean
}

export const useSwipeNavigation = ({
  onSwipeLeft,
  onSwipeRight,
  threshold = 50,
  preventDefault = true,
  enableMouse = true
}: SwipeNavigationProps) => {
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const touchEndY = useRef<number | null>(null)
  const isDragging = useRef(false)

  const handleStart = useCallback((clientX: number, clientY: number, target: HTMLElement) => {
    touchStartX.current = clientX
    touchStartY.current = clientY
    touchEndX.current = null
    touchEndY.current = null
    isDragging.current = true
    
    target.style.cursor = 'grabbing'
  }, [])

  const handleMove = useCallback((clientX: number, clientY: number, e: Event) => {
    if (!touchStartX.current || !touchStartY.current || !isDragging.current) return
    
    touchEndX.current = clientX
    touchEndY.current = clientY
    
    const deltaX = Math.abs(touchEndX.current - touchStartX.current)
    const deltaY = Math.abs(touchEndY.current - touchStartY.current)
    
    if (deltaX > deltaY && deltaX > 10 && preventDefault) {
      e.preventDefault()
    }
  }, [preventDefault])

  const handleEnd = useCallback((target: HTMLElement) => {
    target.style.cursor = 'grab'
    isDragging.current = false
    
    if (!touchStartX.current || !touchEndX.current || !touchStartY.current || !touchEndY.current) {
      return
    }
    
    const deltaX = touchStartX.current - touchEndX.current
    const deltaY = Math.abs(touchStartY.current - touchEndY.current)
    
    if (Math.abs(deltaX) > deltaY && Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        onSwipeLeft()
      } else {
        onSwipeRight()
      }
    }
    
    touchStartX.current = null
    touchStartY.current = null
    touchEndX.current = null
    touchEndY.current = null
  }, [onSwipeLeft, onSwipeRight, threshold])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const target = e.currentTarget as HTMLElement
    handleStart(e.targetTouches[0].clientX, e.targetTouches[0].clientY, target)
  }, [handleStart])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    handleMove(e.targetTouches[0].clientX, e.targetTouches[0].clientY, e.nativeEvent)
  }, [handleMove])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const target = e.currentTarget as HTMLElement
    handleEnd(target)
  }, [handleEnd])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!enableMouse) return
    
    const target = e.currentTarget as HTMLElement
    handleStart(e.clientX, e.clientY, target)
    
    e.preventDefault()
  }, [enableMouse, handleStart])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!enableMouse || !isDragging.current) return
    
    handleMove(e.clientX, e.clientY, e.nativeEvent)
  }, [enableMouse, handleMove])

  const handleMouseUp = useCallback((e: React.MouseEvent) => {
    if (!enableMouse || !isDragging.current) return
    
    const target = e.currentTarget as HTMLElement
    handleEnd(target)
  }, [enableMouse, handleEnd])

  const handleMouseLeave = useCallback((e: React.MouseEvent) => {
    if (!enableMouse || !isDragging.current) return
    
    const target = e.currentTarget as HTMLElement
    handleEnd(target)
  }, [enableMouse, handleEnd])

  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseLeave
  }
}

