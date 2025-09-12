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


      <HorizonText 
        as="h2"
        id="clientes-heading"
        className="vogue-subhead mb-8"
        style={{color: colors.white}}
      >
        ФОТО ДЛЯ ВДОХНОВЕНИЯ
      </HorizonText>
      
      <p
        className="mx-auto max-w-3xl"
        style={{ color: colors.white, opacity: 0.9, fontFamily: "Manrope, sans-serif", fontSize: 16 }}
      >
        Тысячи довольных клиентов, которые уже доверились мастерам, прошедшим обучение в GOMANIC
      </p>
    </header>
  );
}
