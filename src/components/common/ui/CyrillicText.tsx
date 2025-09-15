'use client';

import { useCyrillicFontSupport } from '@/hooks';
import { ReactNode, useEffect } from 'react';

interface CyrillicTextProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  fallbackClassName?: string;
  style?: React.CSSProperties;
  id?: string;
}

export function CyrillicText({ 
  children, 
  className = '', 
  as: Component = 'div',
  fallbackClassName = '',
  style,
  id,
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

  if (supportsCyrillic === null) {
    return <Component className={className} style={style} id={id} {...props}>{children}</Component>;
  }

  return <Component className={appliedClassName} style={style} id={id} {...props}>{children}</Component>;
}

export function HorizonText({ children, className = '', style, id, ...props }: Omit<CyrillicTextProps, 'fallbackClassName'>) {
  return (
    <CyrillicText 
      className={className}
      fallbackClassName="websafe-cyrillic"
      style={style}
      id={id}
      {...props}
    >
      {children}
    </CyrillicText>
  );
}
