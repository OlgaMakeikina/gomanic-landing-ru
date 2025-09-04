"use client"

import { useEffect, useMemo, useState } from "react"
import { HorizonText } from '@/components/ui';

export default function PromocoesMes2() {
  const promocoes = useMemo(
    () => [
      {
        titulo: "Маникюр без покрытия + снятие геля-лака",
        precoNormal: "1200 ₽",
        precoVIP: "600 ₽",
        inclui: [
          "Стерильные инструменты",
          "Идеальная обработка ногтей",
          "Профессиональное снятие покрытия",
        ],
      },
      {
        titulo: "Маникюр + гель-лак + снятие",
        precoNormal: "2500 ₽",
        precoVIP: "1200 ₽",
        inclui: [
          "Полная обработка ногтей",
          "Гель-лак премиум класса",
          "Стойкость до 4 недель",
        ],
      },
      {
        titulo: "Маникюр + гель-лак + укрепление гелем + снятие",
        precoNormal: "3000 ₽",
        precoVIP: "1600 ₽",
        inclui: [
          "Укрепление натуральных ногтей",
          "Долговечное покрытие",
          "Профессиональный уход",
        ],
      },
      {
        titulo: "Наращивание/коррекция + маникюр + гель-лак",
        precoNormal: "4000 ₽",
        precoVIP: "1800 ₽",
        inclui: [
          "Моделирование длины и формы",
          "Повышение прочности ногтей",
          "Гель-лак премиум класса",
        ],
      },
    ],
    []
  )

  const COLORS = { dark: "#444f55", gray: "#3B3B3A", white: "#FEFEFE" }
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const [remaining, setRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    const end = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0, 23, 59, 59, 999)
    const tick = () => {
      const now = new Date()
      const d = end.getTime() - now.getTime()
      if (d <= 0) return setRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      const totalSeconds = Math.floor(d / 1000)
      const days = Math.floor(totalSeconds / (24 * 3600))
      const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600)
      const minutes = Math.floor((totalSeconds % 3600) / 60)
      const seconds = totalSeconds % 60
      setRemaining({ days, hours, minutes, seconds })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <section id="promocoes" className="relative py-20" style={{ backgroundColor: COLORS.dark }}>
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
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="uppercase tracking-[0.22em] mb-3"
            style={{ color: COLORS.white, fontFamily: "Manrope, sans-serif", fontSize: 14, opacity: 0.85 }}
          >
            СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ
          </div>

          <HorizonText 
            as="h2"
            className="vogue-subhead mb-8"
            style={{color: COLORS.white}}
          >
            АКЦИИ МЕСЯЦА
          </HorizonText>

          <div
            className="mx-auto inline-block rounded-2xl px-6 py-4 backdrop-blur-md border shadow-lg mb-4"
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              borderColor: "rgba(255, 255, 255, 0.40)",
            }}
          >
            <div className="text-center">
              <div
                className="uppercase mb-2"
                style={{
                  color: COLORS.white,
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  opacity: 0.9,
                }}
              >
                Осталось времени
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <div
                    className="tabular-nums font-bold"
                    style={{
                      color: COLORS.white,
                      fontFamily: "Manrope, sans-serif",
                      fontSize: 20,
                      fontWeight: 800,
                      lineHeight: 1,
                    }}
                  >
                    {String(remaining.days).padStart(2, "0")}
                  </div>
                  <div
                    style={{
                      color: COLORS.white,
                      fontFamily: "Manrope, sans-serif",
                      fontSize: 10,
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      opacity: 0.8,
                      marginTop: 2,
                    }}
                  >
                    дни
                  </div>
                </div>
                
                <div className="text-center">
                  <div
                    className="tabular-nums font-bold"
                    style={{
                      color: COLORS.white,
                      fontFamily: "Manrope, sans-serif",
                      fontSize: 20,
                      fontWeight: 800,
                      lineHeight: 1,
                    }}
                  >
                    {String(remaining.hours).padStart(2, "0")}
                  </div>
                  <div
                    style={{
                      color: COLORS.white,
                      fontFamily: "Manrope, sans-serif",
                      fontSize: 10,
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      opacity: 0.8,
                      marginTop: 2,
                    }}
                  >
                    часы
                  </div>
                </div>
                
                <div className="text-center">
                  <div
                    className="tabular-nums font-bold"
                    style={{
                      color: COLORS.white,
                      fontFamily: "Manrope, sans-serif",
                      fontSize: 20,
                      fontWeight: 800,
                      lineHeight: 1,
                    }}
                  >
                    {String(remaining.minutes).padStart(2, "0")}
                  </div>
                  <div
                    style={{
                      color: COLORS.white,
                      fontFamily: "Manrope, sans-serif",
                      fontSize: 10,
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      opacity: 0.8,
                      marginTop: 2,
                    }}
                  >
                    мин
                  </div>
                </div>
                
                <div className="text-center">
                  <div
                    className="tabular-nums font-bold"
                    style={{
                      color: COLORS.white,
                      fontFamily: "Manrope, sans-serif",
                      fontSize: 20,
                      fontWeight: 800,
                      lineHeight: 1,
                    }}
                  >
                    {String(remaining.seconds).padStart(2, "0")}
                  </div>
                  <div
                    style={{
                      color: COLORS.white,
                      fontFamily: "Manrope, sans-serif",
                      fontSize: 10,
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      opacity: 0.8,
                      marginTop: 2,
                    }}
                  >
                    сек
                  </div>
                </div>
              </div>
            </div>
            
            <div
              className="flex items-center justify-center gap-2"
              style={{
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
              <span>Только 30 мест! Не упустите!</span>
            </div>
          </div>
        </div>

        {/* Main Content: Photo + Accordion */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Photo */}
          <div className="lg:sticky lg:top-8">
            <div
              className="relative aspect-square rounded-2xl overflow-hidden backdrop-blur-xl border"
              style={{
                background: "rgba(255, 255, 255, 0.12)",
                borderColor: "rgba(255, 255, 255, 0.25)",
                boxShadow: "0 32px 64px rgba(0,0,0,0.5)",
              }}
            >
              <img 
                src="/images/offer/offer.jpeg" 
                alt="Маникюр со скидкой 50% - наша работа" 
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  filter: "brightness(0.85) contrast(1.1)"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/30"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-4">
            {promocoes.map((promo, index) => (
              <div
                key={index}
                className="relative backdrop-blur-xl rounded-2xl border overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.12)",
                  borderColor: "rgba(255, 255, 255, 0.25)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-black/10"></div>

                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="relative z-10 w-full p-6 text-left focus:outline-none hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4">
                      <h3
                        style={{
                          color: COLORS.white,
                          fontFamily: "DrukWideCyr-Super, sans-serif",
                          fontSize: 18,
                          letterSpacing: "0.03em",
                          fontWeight: 500,
                          lineHeight: 1.3,
                          textTransform: "uppercase",
                          marginBottom: 12,
                        }}
                      >
                        {promo.titulo}
                      </h3>

                      <div className="flex items-center gap-3">
                        <span
                          style={{
                            color: COLORS.white,
                            opacity: 0.6,
                            textDecoration: "line-through",
                            fontFamily: "Manrope, sans-serif",
                            fontSize: 14,
                          }}
                        >
                          {promo.precoNormal}
                        </span>
                        <span
                          className="inline-flex items-center rounded-lg px-3 py-1"
                          style={{
                            background: COLORS.white,
                            color: COLORS.gray,
                            fontWeight: 800,
                            fontSize: 18,
                            fontFamily: "Manrope, sans-serif",
                            boxShadow: "0 4px 12px rgba(254,254,254,0.20)",
                          }}
                        >
                          {promo.precoVIP}
                        </span>
                      </div>
                    </div>

                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
                      style={{
                        background: "rgba(255, 255, 255, 0.2)",
                        transform: openAccordion === index ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        style={{ color: COLORS.white }}
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className="relative z-10 overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openAccordion === index ? "200px" : "0",
                  }}
                >
                  <div className="px-6 pb-6">
                    <div
                      className="mb-3 uppercase"
                      style={{
                        color: COLORS.white,
                        fontFamily: "Manrope, sans-serif",
                        fontSize: 12,
                        opacity: 0.9,
                        letterSpacing: "0.08em",
                      }}
                    >
                      Включено
                    </div>
                    <ul
                      className="space-y-2 mb-4"
                      style={{
                        color: COLORS.white,
                        fontFamily: "Manrope, sans-serif",
                        fontSize: 14,
                        lineHeight: 1.5,
                      }}
                    >
                      {promo.inclui.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-3 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() =>
                        document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth", block: "start" })
                      }
                      className="w-full rounded-lg px-4 py-3 transition-all duration-300 hover:scale-105"
                      style={{
                        background: COLORS.white,
                        color: COLORS.gray,
                        border: `1px solid ${COLORS.white}`,
                        fontFamily: "Manrope, sans-serif",
                        fontSize: 14,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        boxShadow: "0 8px 24px rgba(254,254,254,0.15)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "transparent"
                        e.currentTarget.style.color = COLORS.white
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(59,59,57,0.45)"
                        e.currentTarget.style.border = `1px solid ${COLORS.white}`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = COLORS.white
                        e.currentTarget.style.color = COLORS.gray
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(254,254,254,0.15)"
                        e.currentTarget.style.border = `1px solid ${COLORS.white}`
                      }}
                    >
                      Забронировать место
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div
          className="mt-16 rounded-2xl px-6 py-4 text-center mx-auto max-w-3xl"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            color: COLORS.white,
            fontFamily: "Manrope, sans-serif",
            fontSize: 14,
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="leading-relaxed">
            <span className="mr-1">💳</span>
            Оплата предоплаты на 100% безопасна.{" "}
            <span className="font-semibold">Если не сможете прийти, перенесем запись или вернем деньги.</span>
          </div>
        </div>
      </div>
    </section>
  )
}