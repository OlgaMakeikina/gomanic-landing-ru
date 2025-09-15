import { reviewScreenshots } from './socialData';
import ReviewCard from './ReviewCard';

export default function ReviewGrid() {
  return (
    <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
      {reviewScreenshots.map((screenshot, index) => (
        <ReviewCard 
          key={index}
          screenshot={screenshot}
          index={index}
        />
      ))}
    </div>
  );
}
