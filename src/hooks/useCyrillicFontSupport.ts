'use client';

import { useEffect, useState } from 'react';

export function useCyrillicFontSupport() {
  const [supportsCyrillic, setSupportsCyrillic] = useState<boolean | null>(null);

  useEffect(() => {
    const checkCyrillicSupport = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        setSupportsCyrillic(false);
        return;
      }

      ctx.font = '16px Horizon';
      const horizonWidth = ctx.measureText('Ф').width;
      
      ctx.font = '16px Arial';
      const arialWidth = ctx.measureText('Ф').width;
      
      const hasGlyphs = horizonWidth !== arialWidth && horizonWidth > 0;
      setSupportsCyrillic(hasGlyphs);
    };

    if (typeof document !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkCyrillicSupport);
      } else {
        setTimeout(checkCyrillicSupport, 100);
      }
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', checkCyrillicSupport);
    };
  }, []);

  return supportsCyrillic;
}