import { MasterConfig } from '@/types/master';
import { SocialHeader, ReviewGrid, SOCIAL_COLORS } from './SocialProof/index';

interface SocialProofProps {
  masterData?: MasterConfig | null;
}

export default function SocialProof({ masterData }: SocialProofProps) {
  return (
    <section 
      id="reviews" 
      className="relative py-20" 
      style={{ backgroundColor: SOCIAL_COLORS.white }} 
      aria-labelledby="reviews-heading"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <SocialHeader />
        <ReviewGrid />
      </div>
    </section>
  );
}
