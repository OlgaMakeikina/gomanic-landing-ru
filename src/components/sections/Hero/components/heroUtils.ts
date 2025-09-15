export const handleButtonAction = (action: string, id?: string, nextSlide?: () => void) => {
  if (action === 'next' && nextSlide) {
    nextSlide();
  } else if (action === 'whatsapp') {
    window.open('https://wa.me/5548996737351', '_blank');
  } else if (action === 'scroll' && id) {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export const setupTouchStyles = (element: HTMLElement) => {
  const style = element.style as any;
  style.touchAction = 'pan-y pinch-zoom';
  style.overscrollBehaviorX = 'none';
  style.webkitOverflowScrolling = 'touch';
  style.cursor = 'grab';
  
  return () => {
    style.touchAction = '';
    style.overscrollBehaviorX = '';
    style.webkitOverflowScrolling = '';
    style.cursor = '';
  };
};
