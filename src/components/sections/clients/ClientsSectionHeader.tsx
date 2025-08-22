'use client'

interface ClientsSectionHeaderProps {
  colors: {
    white: string;
  };
}

export default function ClientsSectionHeader({ colors }: ClientsSectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <div
        className="uppercase tracking-[0.22em] mb-3"
        style={{ color: colors.white, fontFamily: "Garet, sans-serif", fontSize: 14, opacity: 0.85 }}
      >
        FOTOS DE CLIENTES
      </div>

      <h2
        className="uppercase mb-6"
        style={{
          color: colors.white,
          fontFamily: "Horizon, sans-serif",
          letterSpacing: "0.12em",
          fontWeight: 500,
          fontSize: 28,
        }}
      >
        NOSSOS CLIENTES SATISFEITOS
      </h2>
      
      <p
        className="mx-auto max-w-3xl"
        style={{ color: colors.white, opacity: 0.9, fontFamily: "Garet, sans-serif", fontSize: 16 }}
      >
        Milhares de clientes satisfeitas que já confiaram em nosso trabalho
      </p>
    </div>
  );
}