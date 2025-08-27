interface BenefitItemProps {
  benefit: string
  isLast: boolean
}

export default function BenefitItem({ benefit, isLast }: BenefitItemProps) {
  return (
    <div>
      <div className="flex items-start gap-3 lg:gap-4">
        <span style={{
          color: '#FEFEFE', 
          fontSize: '18px', 
          marginTop: '1px',
          textShadow: '0 2px 8px rgba(0,0,0,0.9)',
          flexShrink: 0
        }}>✓</span>
        <span style={{
          fontFamily: 'DrukWideCyr-Super, Arial Black, Arial, sans-serif',
          fontSize: 'clamp(13px, 2.5vw, 17px)',
          fontWeight: 'normal',
          color: '#FEFEFE',
          opacity: 0.9,
          lineHeight: '1.3',
          textTransform: 'uppercase',
          letterSpacing: '0.02em'
        }}>
          {benefit}
        </span>
      </div>
      {!isLast && (
        <div className="w-full h-px bg-white/15 mt-4 lg:mt-6"></div>
      )}
    </div>
  )
}
