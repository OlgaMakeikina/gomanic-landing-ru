export const checkCyrillicFontSupport = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      resolve(false);
      return;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      resolve(false);
      return;
    }

    const checkFonts = () => {
      ctx.font = '48px Horizon';
      const horizonWidth = ctx.measureText('Ф').width;
      
      ctx.font = '48px serif';
      const serifWidth = ctx.measureText('Ф').width;
      
      const hasGlyphs = Math.abs(horizonWidth - serifWidth) > 1 && horizonWidth > 10;
      resolve(hasGlyphs);
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(checkFonts);
    } else {
      setTimeout(checkFonts, 1000);
    }
  });
};

export const applyCyrillicFallback = () => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('use-fallback-fonts');
  }
};

export const removeCyrillicFallback = () => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('use-fallback-fonts');
  }
};
