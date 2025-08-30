"use client"

import { useEffect, useMemo, useState } from "react"

export default function PromocoesMes() {
  const promocoes = useMemo(
    () => [
      {
        titulo: "Manicure + nivelamento + esmaltação em gel",
        precoNormal: "2500 ₽",
        precoVIP: "1200 ₽",
        // pagamentoAntecipado: "360 ₽",
        inclui: [
          "Ferramentas esterilizadas",
          "Nivelamento perfeito da unha",
          "Esmalte em gel premium com brilho até 4 semanas",
        ],
      },
      {
        titulo: "Alongamento + manicure + esmaltação em gel",
        precoNormal: "4000 ₽",
        precoVIP: "1800 ₽",
        // pagamentoAntecipado: "540 ₽",
        inclui: [
          "Modelagem de comprimento e formato",
          "Reforço da resistência",
          "Esmalte em gel premium",
        ],
      },
      {
        titulo: "Combo: manicure + esmaltação em gel + pedicure + plástica dos pés",
        precoNormal: "6000 ₽",
        precoVIP: "2400 ₽",
        // pagamentoAntecipado: "720 ₽",
        inclui: [
          "Cuidados completos para mãos e pés",
          "Esmaltação premium de longa duração",
          "SPA e plástica dos pés",
        ],
      },
    ],
    []
  )

  // === GLASSMORPHISM КАК В HERO =====
  const COLORS = { dark: "#444f55", gray: "#3B3B3A", white: "#FEFEFE" }
  const GLASS = {
    cardBg: `rgba(255, 255, 255, 0.12)`,
    cardBorder: "rgba(255, 255, 255, 0.25)",
    cardShadow: "0 32px 64px rgba(0,0,0,0.5)",
    priceBg: `rgba(255, 255, 255, 0.25)`,
    priceBorder: "rgba(255, 255, 255, 0.40)",
    priceShadow: "0 8px 32px rgba(0,0,0,0.3)",
    blur: "16px",
  }

  // === TIMER ==============================================================
  const [remaining, setRemaining] = useState("--:--:--")
  useEffect(() => {
    const end = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0, 23, 59, 59, 999)
    const tick = () => {
      const now = new Date()
      const d = end.getTime() - now.getTime()
      if (d <= 0) return setRemaining("00:00:00")
      const s = Math.floor(d / 1000)
      const hh = String(Math.floor(s / 3600)).padStart(2, "0")
      const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0")
      const ss = String(s % 60).padStart(2, "0")
      setRemaining(`${hh}:${mm}:${ss}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="promocoes" className="relative py-20" style={{ backgroundColor: COLORS.dark }}>
      {/* Текстурный фон как в Hero */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(1000px 500px at 15% 0%, rgba(254,254,254,0.08) 0%, rgba(254,254,254,0) 60%), radial-gradient(900px 450px at 85% 100%, rgba(254,254,254,0.06) 0%, rgba(254,254,254,0) 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Заголовок секции */}
        <div className="text-center mb-10">
          <div
            className="uppercase tracking-[0.22em] mb-3"
            style={{ color: COLORS.white, fontFamily: "Garet, sans-serif", fontSize: 14, opacity: 0.85 }}
          >
            OFERTAS ESPECIAIS
          </div>

          <h2
            className="uppercase mb-6"
            style={{
              color: COLORS.white,
              fontFamily: "DrukWideCyr-Super, sans-serif",
              letterSpacing: "0.12em",
              fontWeight: 500,
              fontSize: 24,
            }}
          >
            PROMOÇÕES DO MÊS
          </h2>

          {/* Glassmorphism таймер как у других элементов */}
          <div
            className="mx-auto inline-flex items-center gap-3 rounded-2xl px-5 py-3 backdrop-blur-md border shadow-lg"
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              borderColor: "rgba(255, 255, 255, 0.40)",
              fontFamily: "Manrope, sans-serif",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.1em",
            }}
            aria-live="polite"
          >
            <span className="uppercase" style={{ color: COLORS.white }}>Expira em</span>
            <span className="tabular-nums font-bold" style={{ color: COLORS.white }}>{remaining}</span>
          </div>

          {/* Urgência - лимит мест */}
          <div
            className="mt-4 inline-flex items-center gap-2 rounded-lg px-4 py-2"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: COLORS.white,
              animation: "pulse 2s infinite",
            }}
          >
            <span>🔥</span>
            <span>Apenas 30 vagas! Não perca!</span>
          </div>

          <p
            className="mt-6 mx-auto max-w-2xl"
            style={{ color: COLORS.white, opacity: 0.85, fontFamily: "Garet, sans-serif", fontSize: 14 }}
          >
            Эксклюзивные цены для владельцев VIP-пропуска
          </p>
        </div>

        {/* Карточки glassmorphism - равная высота */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-3 items-stretch" style={{ alignItems: "stretch" }}>
          {promocoes.map((promo, idx) => (
            <article
              key={idx}
              className="relative backdrop-blur-xl rounded-2xl border flex flex-col"
              style={{
                background: GLASS.cardBg,
                borderColor: GLASS.cardBorder,
                boxShadow: GLASS.cardShadow,
                height: "650px", // точная высота вместо min
              }}
            >
              {/* Точные градиенты как в Hero */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-black/10 rounded-2xl"></div>
              
              <div className="relative z-10 h-full grid grid-rows-[auto_auto_1fr_auto] px-8 py-8 gap-8">
                {/* Заголовок услуги - фиксированная область */}
                <div>
                  <h3
                    className="text-center"
                    style={{
                      color: COLORS.white,
                      fontFamily: "DrukWideCyr-Super, sans-serif",
                      fontSize: 18,
                      letterSpacing: "0.03em",
                      fontWeight: 500,
                      lineHeight: 1.45,
                      textTransform: "uppercase",
                      minHeight: "120px", // увеличу до 120px
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {promo.titulo}
                  </h3>
                </div>

                {/* Блок цен - фиксированная область */}
                <div>
                  <div
                    className="rounded-2xl px-5 py-4 backdrop-blur-md border"
                    style={{
                      background: GLASS.priceBg,
                      borderColor: GLASS.priceBorder,
                      boxShadow: GLASS.priceShadow,
                      fontFamily: "Manrope, sans-serif",
                      fontSize: 14,
                      color: COLORS.white,
                    }}
                  >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="uppercase" style={{ letterSpacing: "0.02em", opacity: 0.9 }}>
                      Preço com VIP:
                    </span>
                    <div className="flex items-baseline gap-3">
                      <span style={{ textDecoration: "line-through", opacity: 0.55 }}>{promo.precoNormal}</span>
                      <span
                        className="inline-flex items-center rounded-md px-3 py-1"
                        style={{
                          background: COLORS.white,
                          color: COLORS.gray,
                          fontWeight: 800,
                          boxShadow: "0 2px 8px rgba(254,254,254,0.20)",
                        }}
                      >
                        {promo.precoVIP}
                      </span>
                    </div>
                  </div>

                  {/* 
                  <div className="flex items-baseline justify-between gap-4 mt-3">
                    <span className="uppercase" style={{ letterSpacing: "0.02em", opacity: 0.9 }}>
                      Pagamento antecipado:
                    </span>
                    <span style={{ fontWeight: 700 }}>{promo.pagamentoAntecipado}</span>
                  </div>
                  */}
                  </div>
                </div>

                {/* Inclui - растягивается 1fr */}
                <div className="flex-1">
                  <div
                    className="mb-3 uppercase"
                    style={{ color: COLORS.white, fontFamily: "Garet, sans-serif", fontSize: 14, opacity: 0.9, letterSpacing: "0.08em" }}
                  >
                    Inclui
                  </div>
                  <ul className="space-y-2" style={{ color: COLORS.white, fontFamily: "Garet, sans-serif", fontSize: 14 }}>
                    {promo.inclui.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Кнопка - фиксированная область */}
                <div>
                  <button
                    onClick={() =>
                      document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    className="w-full rounded-xl px-6 py-3 transition-all duration-300"
                    style={{
                      background: COLORS.white,
                      color: COLORS.gray,
                      border: `1px solid ${COLORS.white}`,
                      fontFamily: "Manrope, sans-serif",
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      boxShadow: "0 10px 28px rgba(254,254,254,0.10)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "transparent"
                      e.currentTarget.style.color = COLORS.white
                      e.currentTarget.style.boxShadow = "0 10px 28px rgba(59,59,57,0.45)"
                      e.currentTarget.style.border = `1px solid ${COLORS.white}`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = COLORS.white
                      e.currentTarget.style.color = COLORS.gray
                      e.currentTarget.style.boxShadow = "0 10px 28px rgba(254,254,254,0.10)"
                      e.currentTarget.style.border = `1px solid ${COLORS.white}`
                    }}
                  >
                    Quero garantir minha vaga agora
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Гарантия */}
        <div
          className="mt-10 md:mt-12 rounded-2xl px-5 py-4 text-center mx-auto max-w-3xl"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            color: COLORS.white,
            fontFamily: "Garet, sans-serif",
            fontSize: 14,
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="leading-relaxed">
            <span className="mr-1">💳</span>
            Pagamento da entrada é 100% seguro.{" "}
            <span className="font-semibold">Se não puder comparecer, reagendamos ou devolvemos o valor.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
