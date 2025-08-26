'use client';

import { useCyrillicFontSupport } from '@/hooks';
import { ReactNode, useEffect } from 'react';

interface CyrillicTextProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  fallbackClassName?: string;
  style?: React.CSSProperties;
}

export function CyrillicText({ 
  children, 
  className = '', 
  as: Component = 'div',
  fallbackClassName = '',
  style,
  ...props
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

  return <Component className={appliedClassName} style={style} {...props}>{children}</Component>;
}

export function HorizonText({ children, className = '', style, ...props }: Omit<CyrillicTextProps, 'fallbackClassName'>) {
  return (
    <CyrillicText 
      className={className}
      fallbackClassName="websafe-cyrillic"
      style={style}
      {...props}
    >
      {children}
    </CyrillicText>
  );
}
