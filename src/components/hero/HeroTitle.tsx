interface HeroTitleProps {
  title: string
  subtitle: string
  content?: string
}

export default function HeroTitle({ title, subtitle, content }: HeroTitleProps) {
  // 1) Если передан "A × B", используем его
  const hasDivider = title.includes(' × ')
  const [part1, part2] = hasDivider
    ? (title.split(' × ') as [string, string])
    : (() => {
        // 2) Иначе: всё, кроме последнего слова — первая строка, последнее — вторая
        const words = title.trim().split(/\s+/)
        const last = words.pop() ?? ''
        return [words.join(' '), last] as [string, string]
      })()

  return (
    <>
      <div className="mb-8 lg:mb-12 text-center">
        <h1
          style={{
            fontFamily: 'Horizon, Arial, sans-serif',
            textTransform: 'uppercase',
            color: '#FEFEFE',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            lineHeight: 1.0,
            margin: 0
          }}
        >
          {/* Первая строка — мельче */}
          {part1 && (
            <span
              style={{
                display: 'block',
                fontWeight: 400,
                letterSpacing: '0.08em',
                fontSize: 'clamp(1.1rem, 3.2vw, 2.2rem)'
              }}
            >
              {part1}
            </span>
          )}

          {/* Вторая строка — крупная, акцент */}
          <span
            style={{
              display: 'block',
              fontWeight: 800,
              letterSpacing: '0.04em',
              lineHeight: 0.9,
              marginTop: part1 ? '-0.15em' : 0,
              fontSize: 'clamp(2rem, 7vw, 5.5rem)'
            }}
          >
            {part2}
          </span>
        </h1>
      </div>

      <div className="mb-6 lg:mb-8 text-center">
        <p
          style={{
            fontFamily: 'Garet, sans-serif',
            fontSize: 'clamp(1.1rem, 2.6vw, 2rem)',
            fontWeight: 600,
            color: '#FEFEFE',
            textShadow: '0 2px 10px rgba(0,0,0,0.4)',
            lineHeight: 1.2,
            margin: 0
          }}
        >
          {subtitle}
        </p>
      </div>

      {content && (
        <div className="mb-8 lg:mb-12 text-center">
          <p
            style={{
              fontFamily: 'Garet, sans-serif',
              fontSize: 'clamp(1rem, 2vw, 1.375rem)',
              fontWeight: 400,
              color: '#FEFEFE',
              opacity: 0.85,
              textShadow: '0 1px 5px rgba(0,0,0,0.3)',
              lineHeight: 1.5,
              maxWidth: 600,
              margin: '0 auto',
              padding: '0 1rem'
            }}
          >
            {content}
          </p>
        </div>
      )}
    </>
  )
}
