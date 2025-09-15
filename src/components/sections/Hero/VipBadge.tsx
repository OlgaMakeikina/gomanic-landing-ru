interface VipBadgeProps {
  text: string
}

export default function VipBadge({ text }: VipBadgeProps) {
  return (
    <div className="inline-flex items-center mb-3 lg:mb-6 px-3 lg:px-5 py-1 lg:py-3 rounded-full bg-white/25 backdrop-blur-md border border-white/40 shadow-lg">
      <span style={{
        fontFamily: 'Manrope, sans-serif',
        fontSize: '10px',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#FEFEFE'
      }}>
        {text}
      </span>
    </div>
  )
}
