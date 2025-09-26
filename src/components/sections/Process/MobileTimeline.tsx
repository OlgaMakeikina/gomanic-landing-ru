import { ProcessTimelineProps } from './types'
import MobileStepCard from './MobileStepCard'
import TimelineLine from './TimelineLine'

export default function MobileTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="block lg:hidden max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-1">
          <TimelineLine />
        </div>
        
        {steps.map((step, index) => (
          <MobileStepCard key={index} step={step} index={index} />
        ))}
      </div>
    </div>
  )
}
