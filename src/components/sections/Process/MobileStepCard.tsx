import { ProcessStepCardProps } from './types'

export default function MobileStepCard({ step, index }: ProcessStepCardProps) {
  return (
    <div className="relative mb-12 last:mb-0 pl-20">
      <div className="absolute left-0 top-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full text-xl relative backdrop-blur-xl border border-white border-opacity-50"
             style={{
               background: 'rgba(254, 254, 254, 0.35)',
               color: '#444f55',
               boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
             }}>
          <span className="relative z-10 font-bold text-xl">{step.number}</span>
        </div>
      </div>
      
      <div className="backdrop-blur-xl rounded-2xl overflow-hidden border border-white border-opacity-30 relative"
           style={{
             background: 'rgba(254, 254, 254, 0.15)',
             boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
           }}>
        <div className="overflow-hidden"
             style={{boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'}}>
          <img src={step.image} alt={step.title} className="w-full h-56 object-cover" />
        </div>
        <div className="p-6">
          <h3 className="vogue-caption mb-3" style={{color: '#FEFEFE'}}>{step.title}</h3>
          <p className="vogue-body text-base mb-3" style={{color: '#FEFEFE', fontWeight: 600}}>{step.description}</p>
          <p className="vogue-body text-sm mb-3" style={{color: '#FEFEFE', opacity: 0.9}}>{step.details}</p>
          {step.security && (
            <div className="mt-4 p-3 rounded-lg backdrop-blur-sm border border-white border-opacity-20" style={{background: 'rgba(254, 254, 254, 0.12)'}}>
              <p className="text-xs text-center" style={{color: '#FEFEFE'}}>{step.security}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
