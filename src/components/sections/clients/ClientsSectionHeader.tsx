'use client'

import { HorizonText } from '@/components/ui';

interface ClientsSectionHeaderProps {
  colors: {
    white: string;
  };
}

export default function ClientsSectionHeader({ colors }: ClientsSectionHeaderProps) {
  return (
    <header className="text-center mb-16">
      <p
        className="uppercase tracking-[0.22em] mb-3"
        style={{ color: colors.white, fontFamily: "Manrope, sans-serif", fontSize: 14, opacity: 0.85 }}
      >
        ФОТО КЛИЕНТОВ
      </p>

      <HorizonText 
        as="h2"
        id="clientes-heading"
        className="vogue-subhead mb-8"
        style={{color: colors.white}}
      >
        НАШИ ДОВОЛЬНЫЕ КЛИЕНТЫ
      </HorizonText>
      
      <p
        className="mx-auto max-w-3xl"
        style={{ color: colors.white, opacity: 0.9, fontFamily: "Manrope, sans-serif", fontSize: 16 }}
      >
        Тысячи довольных клиентов, которые уже доверились нашей работе
      </p>
    </header>
  );
}
