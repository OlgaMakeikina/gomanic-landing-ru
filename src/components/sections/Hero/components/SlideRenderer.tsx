import Slide1 from '../Slide1';
import Slide2 from '../Slide2';
import Slide3 from '../Slide3';

interface SlideRendererProps {
  slideIndex: number;
  slides: any[];
  onButtonAction: (action: string, id?: string) => void;
}

export default function SlideRenderer({ slideIndex, slides, onButtonAction }: SlideRendererProps) {
  const slideData = slides[slideIndex];
  const slideProps = { 
    slideData, 
    onButtonAction 
  };

  if (slideIndex === 0) return <Slide1 {...slideProps} />;
  if (slideIndex === 1) return <Slide2 {...slideProps} />;
  if (slideIndex === 2) return <Slide3 {...slideProps} />;
  return null;
}
