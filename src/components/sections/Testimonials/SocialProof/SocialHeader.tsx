import { HorizonText } from '@/components/common/ui';
import { SOCIAL_COLORS } from './socialData';

export default function SocialHeader() {
  return (
    <div className="text-center mb-16">
      <div
        className="uppercase tracking-[0.22em] mb-3"
        style={{ 
          color: SOCIAL_COLORS.gray, 
          fontFamily: "Manrope, sans-serif", 
          fontSize: 14, 
          opacity: 0.85 
        }}
      >
        ОТЗЫВЫ
      </div>

      <HorizonText 
        as="h2"
        id="reviews-heading"
        className="vogue-subhead mb-8"
        style={{color: SOCIAL_COLORS.dark}}
      >
        ЧТО ГОВОРЯТ О МАСТЕРАХ GOMANIC
      </HorizonText>

      <p
        className="mx-auto max-w-2xl"
        style={{ 
          color: SOCIAL_COLORS.gray, 
          fontFamily: "Manrope, sans-serif", 
          fontSize: 16 
        }}
      >
        Реальные отзывы наших клиентов
      </p>
    </div>
  );
}
