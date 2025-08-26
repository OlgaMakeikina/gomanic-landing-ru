'use client';

import { useCyrillicFontSupport } from '@/hooks';
import { ReactNode, useEffect } from 'react';

interface CyrillicTextProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  fallbackClassName?: string;
}

export function CyrillicText({ 
  children, 
  className = '', 
  as: Component = 'div',
  fallbackClassName = ''
}: CyrillicTextProps) {
  const supportsCyrillic = useCyrillicFontSupport();

  useEffect(() => {
    if (supportsCyrillic === false && typeof document !== 'undefined') {
      document.body.classList.add('use-fallback-fonts');
    }
  }, [supportsCyrillic]);

  const appliedClassName = supportsCyrillic === false && fallbackClassName 
    ? `${className} ${fallbackClassName}`
    : className;

  return <Component className={appliedClassName}>{children}</Component>;
}

export function HorizonText({ children, className = '', ...props }: Omit<CyrillicTextProps, 'fallbackClassName'>) {
  return (
    <CyrillicText 
      className={className}
      fallbackClassName="websafe-cyrillic"
      {...props}
    >
      {children}
    </CyrillicText>
  );
}
