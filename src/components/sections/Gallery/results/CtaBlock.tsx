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
          
          <a
            href="https://dikidi.net/1899279?p=3.pi-po-sm-ssm&o=1&m=4107990"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-12 py-4 rounded-lg font-bold border-2 transition-all hover:opacity-90 hover:scale-105 uppercase tracking-wide whitespace-nowrap"
            style={{ 
              color: '#FEFEFE', 
              borderColor: '#FEFEFE',
              backgroundColor: 'transparent',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '16px',
              letterSpacing: '0.1em',
              textDecoration: 'none'
            }}
          >
            Хочу забронировать место сейчас
          </a>
        </div>
      </div>
    </div>
  )
}
