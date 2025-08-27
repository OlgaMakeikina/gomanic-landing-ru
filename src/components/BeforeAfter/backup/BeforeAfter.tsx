'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './BeforeAfter.module.css';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
  className?: string;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({
  beforeImage,
  afterImage,
  title,
  className = ''
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updateSliderPositionTouch(e);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    updateSliderPositionTouch(e);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const updateSliderPositionTouch = (e: React.TouchEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className={`${styles.container} ${className}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div 
        className={styles.wrapper}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.imageContainer}>
          <Image
            src={afterImage}
            alt="Depois"
            fill
            className={styles.afterImage}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div 
            className={styles.beforeContainer}
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src={beforeImage}
              alt="Antes"
              fill
              className={styles.beforeImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        
        <div 
          className={styles.slider}
          style={{ left: `${sliderPosition}%` }}
        >
          <div className={styles.sliderButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className={styles.labels}>
          <span className={styles.beforeLabel}>ANTES</span>
          <span className={styles.afterLabel}>DEPOIS</span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
