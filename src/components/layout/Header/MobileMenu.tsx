import { MobileMenuProps } from './types'
import { useMasterData } from '@/hooks/useMasterData'

interface ExtendedMobileMenuProps extends MobileMenuProps {
  masterData?: {
    contacts?: {
      address?: {
        full?: string;
      };
      bookingUrl?: string;
    };
  } | null;
}

export default function MobileMenu({ isOpen, items, onClose, masterData }: ExtendedMobileMenuProps) {
  const currentMasterData = useMasterData()
  
  return (
    <nav className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
      isOpen 
        ? 'opacity-100 visible' 
        : 'opacity-0 invisible'
    }`}>
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(59, 59, 58, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }}
        onClick={onClose}
      ></div>
      
      <div className={`relative h-full flex flex-col justify-center items-center text-center px-6 pb-16 transform transition-transform duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        <div 
          className="p-8 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(254, 254, 254, 0.1) 0%, rgba(254, 254, 254, 0.05) 100%)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(254, 254, 254, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(254, 254, 254, 0.1)'
          }}
        >
          
          <div className="space-y-0 mb-6">
            {items.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="block hover:opacity-70 transition-all duration-300 py-1 text-base touch-manipulation"
                style={{
                  color: '#FEFEFE', 
                  minHeight: '40px', 
                  lineHeight: '40px',
                  fontSize: '16px',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
                onClick={onClose}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div 
            className="w-full rounded-lg overflow-hidden mb-4"
            style={{
              height: '180px',
              border: '1px solid rgba(254, 254, 254, 0.2)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.4832842723186!2d30.347961776909826!3d59.93428887491749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5ba729%3A0x4b9c53d4493c879f!2z0J3QtdCy0YHQutC40Lkg0L_RgNC-0YHQv9C10LrRgiwgMTE4LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTkxMTg2!5e0!3m2!1sru!2sru!4v1736631000000!5m2!1sru!2sru"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={masterData?.contacts?.address?.full || "Невский проспект, 118, офис 4109, Санкт-Петербург"}
            ></iframe>
          </div>
          
        </div>
      </div>
    </nav>
  )
}
