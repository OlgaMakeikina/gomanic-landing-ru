interface ServiceItemProps {
  service: {
    name: string
    oldPrice: number
    newPrice: number
  }
  isLast: boolean
}

export default function ServiceItem({ service, isLast }: ServiceItemProps) {
  return (
    <div>
      <div style={{
        fontFamily: 'DrukWideCyr-Super, Arial Black, Arial, sans-serif',
        fontSize: 'clamp(11px, 2vw, 17px)',
        fontWeight: 'normal',
        color: '#FEFEFE',
        opacity: 0.9,
        marginBottom: '4px',
        lineHeight: '1.2',
        textTransform: 'uppercase',
        letterSpacing: '0.02em'
      }}>
        {service.name}
      </div>
      <div className="flex items-center justify-center gap-2 lg:gap-4">
        <span style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: 'clamp(12px, 2vw, 16px)',
          fontWeight: 400,
          color: '#FEFEFE',
          opacity: 0.5,
          textDecoration: 'line-through'
        }}>
          R$ {service.oldPrice}
        </span>
        <span style={{
          fontFamily: 'DrukWideCyr-Super, Arial Black, Arial, sans-serif',
          fontSize: 'clamp(13px, 2.5vw, 17px)',
          fontWeight: 'normal',
          color: '#3B3B3A',
          backgroundColor: '#FEFEFE',
          padding: '3px 6px',
          borderRadius: '4px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
        }}>
          R$ {service.newPrice}
        </span>
      </div>
      {!isLast && (
        <div className="w-full h-px bg-white/15 mt-3 lg:mt-6"></div>
      )}
    </div>
  )
}
