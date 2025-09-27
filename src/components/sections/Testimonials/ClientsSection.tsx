'use client'

import { MasterConfig } from '@/types/master'
import { 
  ClientsSectionHeader, 
  DesktopClientsGallery, 
  MobileClientsGallery 
} from './clients';

interface ClientsSectionProps {
  masterData?: MasterConfig | null;
}

export default function ClientsSection({ masterData }: ClientsSectionProps) {
  const COLORS = { dark: "#3B3B3A", white: "#FEFEFE" }

  return (
    <section 
      id="clientes" 
      className="py-20" 
      style={{ 
        background: 'linear-gradient(135deg, #3B3B3A 0%, #2a2a29 50%, #1f1f1e 100%)'
      }}
      aria-labelledby="clientes-heading"
    >
      <div className="vogue-container">
        <ClientsSectionHeader colors={COLORS} />
        <DesktopClientsGallery colors={COLORS} />
        <MobileClientsGallery colors={COLORS} />
      </div>

      {/* Мобильные стили для скрытия скроллбара в карусели */}
      <style jsx>{`
        @media (max-width: 768px) {
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
          
          /* Плавная анимация для мобильного CTA */
          @keyframes mobile-cta-fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          /* Добавляем анимацию для мобильной галереи */
          .md\\:hidden {
            animation: mobile-cta-fade-in 0.8s ease-out;
          }
        }
      `}</style>
    </section>
  )
}
