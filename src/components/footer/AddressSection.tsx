import { addressInfo } from './data'
import MapEmbed from './MapEmbed'

interface AddressSectionProps {
  showMap: boolean
  onToggleMap: () => void
}

export default function AddressSection({ showMap, onToggleMap }: AddressSectionProps) {
  return (
    <div className="lg:col-span-5 flex flex-col min-h-[200px]">
      <div className="text-xs uppercase tracking-wider mb-8 text-center" style={{color: '#FEFEFE', letterSpacing: '0.15em'}}>АДРЕС</div>
      <div className="w-16 h-px mb-8 mx-auto" style={{backgroundColor: '#FEFEFE', opacity: 0.3}}></div>
      
      <div className="space-y-6 flex-grow">
        <div className="flex justify-center">
          <div className="flex items-start gap-2">
            <img src={addressInfo.icon} alt="Location" className="w-5 h-5 mt-1 flex-shrink-0" style={{filter: 'brightness(0) invert(1)'}} />
            <div className="text-sm leading-relaxed">
              <a href={addressInfo.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{color: '#FEFEFE', textDecoration: 'none'}}>
                {addressInfo.text.split('\n').map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <div className="flex justify-center">
          <button
            onClick={onToggleMap}
            className="px-8 py-3 transition-all duration-300 rounded-lg transform hover:scale-105 hover:-translate-y-1"
            style={{
              backgroundColor: 'rgba(254, 254, 254, 0.1)',
              color: '#FEFEFE',
              border: '1px solid rgba(254, 254, 254, 0.3)',
              fontFamily: 'Garet, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(254, 254, 254, 0.2)'
              e.currentTarget.style.color = '#FEFEFE'
              e.currentTarget.style.border = '1px solid rgba(254, 254, 254, 0.5)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(254, 254, 254, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(254, 254, 254, 0.1)'
              e.currentTarget.style.color = '#FEFEFE'
              e.currentTarget.style.border = '1px solid rgba(254, 254, 254, 0.3)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}
          >
            {showMap ? 'СКРЫТЬ КАРТУ' : 'ПОКАЗАТЬ НА КАРТЕ'}
          </button>
        </div>
      </div>
        
      <MapEmbed isVisible={showMap} />
    </div>
  )
}
