import { ProcessTimelineProps } from './types'
import DesktopStepCard from './DesktopStepCard'
import TimelineLine from './TimelineLine'

export default function DesktopTimeline({ passos }: ProcessTimelineProps) {
  return (
    <div className="max-w-4xl mx-auto hidden lg:block">
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2">
          <TimelineLine />
        </div>
        
        {passos.map((passo, index) => (
          <DesktopStepCard key={index} passo={passo} index={index} />
        ))}
      </div>
    </div>
  )
}
