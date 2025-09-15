import { useState, useEffect, useCallback } from 'react';
import { useSwipeNavigation } from '@/hooks/useSwipeNavigation';

interface UseHeroSliderProps {
  slidesLength: number;
}

export function useHeroSlider({ slidesLength }: UseHeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slidesLength);
  }, [slidesLength]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slidesLength) % slidesLength);
  }, [slidesLength]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const swipeHandlers = useSwipeNavigation({
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
    threshold: 50,
    preventDefault: true,
    enableMouse: true
  });

  useEffect(() => {
    if (!isPlaying) return;
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesLength);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [isPlaying, slidesLength]);

  return {
    currentSlide,
    isPlaying,
    setIsPlaying,
    nextSlide,
    prevSlide,
    goToSlide,
    swipeHandlers
  };
}
