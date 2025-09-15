import { services } from './bookingData';

interface ServiceSelectorProps {
  selectedService: string;
  onServiceChange: (serviceId: string) => void;
}

export default function ServiceSelector({ selectedService, onServiceChange }: ServiceSelectorProps) {
  return (
    <div>
      <label className="block mb-3" style={{
        color: '#FEFEFE',
        fontFamily: 'Manrope, sans-serif',
        fontSize: 14,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        opacity: 0.85
      }}>
        ВЫБЕРИТЕ ВАШ ВАРИАНТ *
      </label>
      <div className="space-y-3">
        {services.map((service) => (
          <div 
            key={service.id}
            className={`backdrop-blur-sm rounded-xl p-4 border cursor-pointer transition-all ${
              selectedService === service.id 
                ? 'border-white/60' 
                : 'border-white/20 hover:border-white/40'
            }`}
            style={{
              background: selectedService === service.id 
                ? 'rgba(255, 255, 255, 0.25)' 
                : 'rgba(255, 255, 255, 0.1)',
              minHeight: '60px'
            }}
            onClick={() => onServiceChange(service.id)}
          >
            <div className="flex items-start space-x-3">
              <input
                type="radio"
                name="service"
                value={service.id}
                checked={selectedService === service.id}
                onChange={(e) => onServiceChange(e.target.value)}
                className="mt-1 text-white focus:ring-white/40"
                style={{ accentColor: '#FEFEFE' }}
              />
              <div className="flex-1">
                <div className="flex justify-between items-center gap-4">
                  <h4 style={{
                    color: '#FEFEFE',
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    lineHeight: 1.2,
                    flex: '1',
                    paddingRight: '8px'
                  }}>
                    {service.name}
                  </h4>
                  <span style={{
                    color: '#FEFEFE',
                    fontFamily: 'DrukWideCyr-Super, sans-serif',
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: '0.03em',
                    flexShrink: 0,
                    whiteSpace: 'nowrap'
                  }}>
                    {service.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
