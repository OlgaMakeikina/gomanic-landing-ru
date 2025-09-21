'use client';

import { ReactNode } from 'react';

interface CyrillicTextProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  style?: React.CSSProperties;
  id?: string;
}

export function CyrillicText({ 
  children, 
  className = '', 
  as: Component = 'div',
  style,
  id,
  ...props
}: CyrillicTextProps) {
  return <Component className={className} style={style} id={id} {...props}>{children}</Component>;
}

export function HorizonText({ children, className = '', style, id, ...props }: CyrillicTextProps) {
  return (
    <CyrillicText 
      className={className}
      style={style}
      id={id}
      {...props}
    >
      {children}
    </CyrillicText>
  );
}