window.checkCyrillicSupport = function() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    document.documentElement.classList.add('no-cyrillic-support');
    return false;
  }

  document.fonts.ready.then(() => {
    ctx.font = '48px Horizon';
    const horizonWidth = ctx.measureText('Ф').width;
    
    ctx.font = '48px serif';
    const serifWidth = ctx.measureText('Ф').width;
    
    const hasGlyphs = Math.abs(horizonWidth - serifWidth) > 1 && horizonWidth > 10;
    
    if (!hasGlyphs) {
      document.documentElement.classList.add('no-cyrillic-support');
      console.log('Шрифт Horizon не поддерживает кириллицу, используем резервный');
    } else {
      console.log('Шрифт Horizon поддерживает кириллицу');
    }
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.checkCyrillicSupport);
} else {
  window.checkCyrillicSupport();
}
