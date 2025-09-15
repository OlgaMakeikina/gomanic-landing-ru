export default function PortfolioHeader() {
  return (
    <div className="text-center mb-16">
      <div
        className="uppercase tracking-[0.22em] mb-3"
        style={{ color: '#444e55', fontFamily: "Garet, sans-serif", fontSize: 14, opacity: 0.85 }}
      >
        РЕЗУЛЬТАТЫ
      </div>

      <h2
        className="uppercase mb-6"
        style={{
          color: '#444e55',
          fontFamily: "Horizon, sans-serif",
          letterSpacing: "0.12em",
          fontWeight: 500,
          fontSize: 28,
        }}
      >
        ВАШИ НОГТИ БУДУТ ВЫГЛЯДЕТЬ ТАК УЖЕ ЗАВТРА
      </h2>

      <p
        className="mx-auto max-w-3xl"
        style={{ color: '#444e55', fontFamily: "Garet, sans-serif", fontSize: 16 }}
      >
        Наши мастера воспроизведут тот же уровень <span style={{ fontWeight: 700 }}>блеска и совершенства</span> на ваших руках.
      </p>
    </div>
  )
}
