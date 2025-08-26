"use client"

import { useEffect, useMemo, useState } from "react"

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
  const GLASS = {
    cardBg: `rgba(255, 255, 255, 0.12)`,
    cardBorder: "rgba(255, 255, 255, 0.25)",
    cardShadow: "0 32px 64px rgba(0,0,0,0.5)",
    priceBg: `rgba(255, 255, 255, 0.25)`,
    priceBorder: "rgba(255, 255, 255, 0.40)",
    priceShadow: "0 8px 32px rgba(0,0,0,0.3)",
    blur: "16px",
  }

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
        <div className="text-center mb-10">
          <div
            className="uppercase tracking-[0.22em] mb-3"
            style={{ color: COLORS.white, fontFamily: "Garet, sans-serif", fontSize: 14, opacity: 0.85 }}
          >
            СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ
          </div>

          <h2
            className="uppercase mb-6"
            style={{
              color: COLORS.white,
              fontFamily: "Horizon, Impact, Arial Black, sans-serif",
              letterSpacing: "0.12em",
              fontWeight: 500,
              fontSize: 24,
            }}
          >
            АКЦИИ МЕСЯЦА
          </h2>

          <div
            className="mx-auto inline-flex items-center gap-3 rounded-2xl px-5 py-3 backdrop-blur-md border shadow-lg"
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              borderColor: "rgba(255, 255, 255, 0.40)",
              fontFamily: "Garet, sans-serif",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.1em",
            }}
            aria-live="polite"
          >
            <span className="uppercase" style={{ color: COLORS.white }}>Осталось времени</span>
            <span className="tabular-nums font-bold" style={{ color: COLORS.white }}>{remaining}</span>
          </div>

          <div
            className="mt-4 inline-flex items-center gap-2 rounded-lg px-4 py-2"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              fontFamily: "Garet, sans-serif",
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

          <p
            className="mt-6 mx-auto max-w-2xl"
            style={{ color: COLORS.white, opacity: 0.85, fontFamily: "Garet, sans-serif", fontSize: 14 }}
          >
            Эксклюзивные цены для обладателей VIP-пропуска
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-4 items-stretch">
          {promocoes.map((promo, idx) => (
            <article
              key={idx}
              className="relative backdrop-blur-xl rounded-2xl border flex flex-col"
              style={{
                background: GLASS.cardBg,
                borderColor: GLASS.cardBorder,
                boxShadow: GLASS.cardShadow,
                height: "500px",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-black/10 rounded-2xl"></div>
              
              <div className="relative z-10 h-full grid grid-rows-[auto_auto_1fr_auto] px-6 py-6 gap-4">
                <div>
                  <h3
                    className="text-center"
                    style={{
                      color: COLORS.white,
                      fontFamily: "Horizon, Impact, Arial Black, sans-serif",
                      fontSize: 16,
                      letterSpacing: "0.03em",
                      fontWeight: 500,
                      lineHeight: 1.3,
                      textTransform: "uppercase",
                      minHeight: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {promo.titulo}
                  </h3>
                </div>

                <div>
                  <div
                    className="rounded-2xl px-4 py-3 backdrop-blur-md border"
                    style={{
                      background: GLASS.priceBg,
                      borderColor: GLASS.priceBorder,
                      boxShadow: GLASS.priceShadow,
                      fontFamily: "Garet, sans-serif",
                      fontSize: 12,
                      color: COLORS.white,
                    }}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="uppercase" style={{ letterSpacing: "0.02em", opacity: 0.9 }}>
                        Цена с VIP:
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span style={{ textDecoration: "line-through", opacity: 0.55, fontSize: 11 }}>
                          {promo.precoNormal}
                        </span>
                        <span
                          className="inline-flex items-center rounded-md px-2 py-1"
                          style={{
                            background: COLORS.white,
                            color: COLORS.gray,
                            fontWeight: 800,
                            fontSize: 14,
                            boxShadow: "0 2px 8px rgba(254,254,254,0.20)",
                          }}
                        >
                          {promo.precoVIP}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div
                    className="mb-2 uppercase"
                    style={{ color: COLORS.white, fontFamily: "Garet, sans-serif", fontSize: 12, opacity: 0.9, letterSpacing: "0.08em" }}
                  >
                    Включено
                  </div>
                  <ul className="space-y-1" style={{ color: COLORS.white, fontFamily: "Garet, sans-serif", fontSize: 12 }}>
                    {promo.inclui.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    onClick={() =>
                      document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    className="w-full rounded-xl px-4 py-2 transition-all duration-300"
                    style={{
                      background: COLORS.white,
                      color: COLORS.gray,
                      border: `1px solid ${COLORS.white}`,
                      fontFamily: "Garet, sans-serif",
                      fontSize: 12,
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
                    Забронировать место
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

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
            Оплата предоплаты на 100% безопасна.{" "}
            <span className="font-semibold">Если не сможете прийти, перенесем запись или вернем деньги.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
