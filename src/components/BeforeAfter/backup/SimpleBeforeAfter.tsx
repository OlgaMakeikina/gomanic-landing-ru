'use client';

import React from 'react';
import Image from 'next/image';
import styles from './SimpleBeforeAfter.module.css';

interface SimpleBeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
  className?: string;
}

const SimpleBeforeAfter: React.FC<SimpleBeforeAfterProps> = ({
  beforeImage,
  afterImage,
  title,
  className = ''
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.comparison}>
        <div className={styles.imageWrapper}>
          <Image
            src={beforeImage}
            alt="Antes"
            fill
            className={styles.image}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className={styles.label}>ANTES</div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={afterImage}
            alt="Depois"
            fill
            className={styles.image}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className={styles.label}>DEPOIS</div>
        </div>
      </div>
    </div>
  );
};

export default SimpleBeforeAfter;