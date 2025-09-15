import { ProcessTimelineProps } from './types'
import MobileStepCard from './MobileStepCard'
import TimelineLine from './TimelineLine'

export default function MobileTimeline({ passos }: ProcessTimelineProps) {
  return (
    <div className="block lg:hidden max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-1">
          <TimelineLine />
        </div>
        
        {passos.map((passo, index) => (
          <MobileStepCard key={index} passo={passo} index={index} />
        ))}
      </div>
    </div>
  )
}
