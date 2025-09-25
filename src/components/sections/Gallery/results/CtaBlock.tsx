import { CtaBlockProps } from './types'
import styles from './styles.module.css'
import BookingButton from '@/components/common/BookingButton'
import { useMasterData } from '@/hooks/useMasterData'

export default function CtaBlock({ onCtaClick }: CtaBlockProps) {
  const masterData = useMasterData()
  
  return (
    <div className={styles.ctaContainer}>
      <div className={styles.ctaBox}>
        <div className={styles.ctaGradient1}></div>
        <div className={styles.ctaGradient2}></div>
        
        <div className={styles.ctaContent}>
          <p className={styles.ctaText}>
            <span className={styles.ctaSecondary}>Запишитесь сейчас и</span><br />
            <span className={styles.ctaHighlight}>сэкономьте 50%</span>
          </p>
          
          {masterData?.contacts?.bookingUrl ? (
            <BookingButton
              bookingUrl={masterData.contacts.bookingUrl}
              text="Хочу забронировать место сейчас"
              className={styles.ctaButton}
            />
          ) : (
            <button
              onClick={onCtaClick}
              className={styles.ctaButton}
            >
              Хочу забронировать место сейчас
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
