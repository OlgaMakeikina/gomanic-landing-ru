import { CarouselControlsProps } from './types'

export default function CarouselControls({ onPrev, onNext, styles, colors }: CarouselControlsProps) {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-4 z-20 w-14 h-14 rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        style={{
          background: styles.cardBg,
          border: `1px solid ${styles.cardBorder}`,
          boxShadow: styles.cardShadow,
          color: colors.gray,
          fontSize: '24px'
        }}
      >
        ←
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 z-20 w-14 h-14 rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        style={{
          background: styles.cardBg,
          border: `1px solid ${styles.cardBorder}`,
          boxShadow: styles.cardShadow,
          color: colors.gray,
          fontSize: '24px'
        }}
      >
        →
      </button>
    </>
  )
}
